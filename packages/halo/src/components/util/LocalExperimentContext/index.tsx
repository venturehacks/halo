/* eslint-disable no-console */
/**
 * LocalExperimentContext is functionally equivalent to
 * feature flags, except for the following qualities:
 *
 * - discoverable
 * - admin only
 * - TFE only
 * - backed by local storage
 * - emphemeral
 *
 * Local Experiment shines when we introduce new UIs. Said
 * UI can be toggled in real time without page refresh and
 * without manual engineer intervention.
 */

import { isEqual, merge } from 'lodash';
import React, {
  Dispatch,
  ReducerAction,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useLocalStorage, useDeepCompareEffect } from 'react-use';

import reducer from './reducer';

export interface LocalExperimentState {
  componentIdentify: boolean;
}

// these should always be false by default!
export const defaultLocalExperimentState: LocalExperimentState = {
  componentIdentify: true,
};

type LocalExperimentContextT = [
  LocalExperimentState,
  Dispatch<ReducerAction<typeof reducer>>,
];

interface LocalExperimentActionUpdate extends Partial<LocalExperimentState> {
  type: 'update';
}

interface LocalExperimentActionReset {
  type: 'reset';
}

export type LocalExperimentAction =
  | LocalExperimentActionUpdate
  | LocalExperimentActionReset;

export const LocalExperimentContext =
  React.createContext<LocalExperimentContextT>([
    defaultLocalExperimentState,
    (_: LocalExperimentAction) => {},
  ]);

interface LocalExperimentProviderProps {
  children: React.ReactNode;
  initialState?: Nullable<Partial<LocalExperimentState>>;
}

const LOCAL_EXPERIMENT_KEY = 'haloLocalExperimentContext';

const LocalExperimentProvider = ({
  initialState,
  children,
}: LocalExperimentProviderProps) => {
  const [localStorageState] = useLocalStorage(
    LOCAL_EXPERIMENT_KEY,
    defaultLocalExperimentState,
  );

  const mergedInitialState = merge(
    {},
    defaultLocalExperimentState,
    initialState,
    localStorageState,
  ) as LocalExperimentState;

  console.log('experiment state', mergedInitialState);

  const value = useReducer(reducer, defaultLocalExperimentState);
  const [, dispatch] = value;

  /**
   * Due to LocalExperiment's client-side nature (localStorage),
   * SSR breaks when a local experiment is active. Nextjs complains of
   * mismatched HTML; it's right in doing so.
   *
   * To preserve SSR site-wide, we introduce the workaround:
   * On initial render, ignore localStorage. Use default experiment state.
   * HTML matches, and Nextjs doesn't complain.
   *
   * After SSR, check to see if the state found in localStorage is different.
   * When it is different, the useEffect below triggers a client re-render.
   *
   * But how do I test SSR on a view gated by local experiment
   * in my dev environment?
   *
   * Modify defaultLocalExperimentState to enable the gated feature by default.
   * useEffect below will not detect a change (and thus won't re-render).
   */
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !isEqual(defaultLocalExperimentState, mergedInitialState)
    ) {
      console.log(
        '🚩 Local experiment active! SSR is disabled until you disable all experiments.',
      );

      dispatch({
        type: 'update',
        ...mergedInitialState,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LocalExperimentContext.Provider value={value}>
      <>
        <LocalStorageFlush />
        {children}
      </>
    </LocalExperimentContext.Provider>
  );
};

function LocalStorageFlush() {
  const experiments = useLocalExperiment();
  const [, setLocalStorageState] = useLocalStorage(
    LOCAL_EXPERIMENT_KEY,
    experiments,
  );

  /**
   * This feels a bit chicken-and-egg. Setting local storage
   * will re-render the entire application, but that's the point.
   */
  useDeepCompareEffect(() => {
    setLocalStorageState(experiments);
  }, [experiments]);

  return null;
}

const useLocalExperimentControl = () => useContext(LocalExperimentContext);

/**
 * Convenience helper. Most engineers will just want experiment state,
 * not full control to mutate state via dispatch.
 */
const useLocalExperiment = () => {
  const [experiments] = useLocalExperimentControl();
  return experiments;
};

export type LocalExperimentName = keyof LocalExperimentState;

export {
  LocalExperimentProvider,
  useLocalExperiment,
  useLocalExperimentControl,
};
