import styled from '@emotion/styled';
import { breakpoints } from 'gatsby-theme-docz/src/theme/breakpoints';
import global from 'gatsby-theme-docz/src/theme/global';

export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: ${breakpoints.mobile}px) {
    table {
      display: block;
      overflow: auto;
      min-width: 520px;
    }
  }
`;

export const globalStyles = {
  ...global,
  '*': {
    boxSizing: 'border-box',
  },
  '.h-o:hover': {
    transition: 'opacity .2s ease',
    opacity: '.8',
  },
  'button, select, input, textarea': {
    fontFamily: 'inherit',
  },
  'a': {
    color: ({ theme }) => theme.colors.primary,
  },
  '.nav-group a:hover > span:first-of-type': {
    textDecoration: 'underline',
  },
};
