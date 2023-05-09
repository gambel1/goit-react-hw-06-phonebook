import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column; */
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const FormLabel = styled.label`
  /* margin-right: 15px; */
  font-size: 24px;
`;

export const FormInput = styled.input`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  background-color: #cccccc;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  font-size: 16px;
  padding: 7px;
  margin-top: 5px;
  cursor: pointer;
  border: solid 2px #000;
  border-radius: 5px;
  background-color: #9b94ce;

  :hover{
    color: green;
  }
`;
