/* eslint-disable no-console */
import { isEqual, omit } from 'lodash';

import {
  LocalExperimentAction,
  LocalExperimentState,
  defaultLocalExperimentState,
} from '.';

const reducer = (
  state: LocalExperimentState,
  action: LocalExperimentAction,
): LocalExperimentState => {
  let newLocalExperimentState: LocalExperimentState = state;

  if (action.type === 'update') {
    const sanitizedAction = omit(action, ['type']);

    newLocalExperimentState = {
      ...state,
      ...sanitizedAction,
    };
  } else if (action.type === 'reset') {
    newLocalExperimentState = {
      ...defaultLocalExperimentState,
    };
  }

  if (isEqual(state, newLocalExperimentState)) {
    return state;
  }

  console.log(newLocalExperimentState);

  return newLocalExperimentState;
};

export default reducer;
