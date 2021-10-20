import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 2rem;

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    vertical-align: middle;
    font-size: 0.9em;

    th,
    td {
      border-bottom: solid 1px ${({ theme }) => theme.colors.border};
      padding: 10px 8px;
      min-height: 68px;
    }

    th {
      color: ${({ theme }) => theme.colors.gray};
    }
    td {
      p {
        margin: 0;
      }
    }
  }
`;
