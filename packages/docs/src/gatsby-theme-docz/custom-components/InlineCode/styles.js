import styled from '@emotion/styled';

export const Container = styled.code`
  position: relative;
  display: inline-block;
  background-color: #f3f3f3;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono',
    Consolas, Menlo, monospace;
  font-size: 0.7em;
  padding: 3px 8px;
  border-radius: 3px;
`;
