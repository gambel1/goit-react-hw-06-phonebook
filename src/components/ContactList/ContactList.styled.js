import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--border-margin-padding);
`;

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ContactListSpan = styled.span`
  font-size: var(--font-size-subtitle);
  font-weight: bold;
  color: #3b327d;
`;

export const ContactListButton = styled.button`
  font-size: var(--font-size-buttons);
  padding: 4px 10px;

  cursor: pointer;
  border: solid 2px #000;
  border-radius: var(--border-margin-padding);
  background-color: #9b94ce;

  :hover {
    color: #e02121;
  }
`;
