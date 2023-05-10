import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--border-margin-padding);
`;

export const FormLabel = styled.label`
  font-size: var(--font-size-subtitle);
`;

export const FormInput = styled(Field)`
  padding: var(--border-margin-padding);
  font-size: 20px;
  font-weight: bold;
  background-color: #cccccc;
  border-radius: var(--border-margin-padding);
`;

export const FormButton = styled.button`
  font-size: var(--font-size-buttons);
  padding: 5px 15px;
  margin: 10px 0 15px 0;
  cursor: pointer;
  border: solid 2px #000;
  border-radius: var(--border-margin-padding);
  background-color: #9b94ce;

  :hover {
    color: green;
  }
`;
