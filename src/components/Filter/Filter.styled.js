import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: var(--font-size-buttons);
  margin-bottom: var(--border-margin-padding);
`;

export const FilterInput = styled.input`
  padding: var(--border-margin-padding);
  font-size: 20px;
  font-weight: bold;
  background-color: #cccccc;
  border-radius: var(--border-margin-padding);
`;
