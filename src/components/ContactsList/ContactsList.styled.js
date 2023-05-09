import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContactListSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #3b327d;
`;

export const ContactListButton = styled.button`
  font-size: 16px;
  padding: 4px;
  margin-top: 5px;
  cursor: pointer;
  border: solid 2px #000;
  border-radius: 5px;
  background-color: #9b94ce;

  :hover {
    color: #e02121;
  }
`;
