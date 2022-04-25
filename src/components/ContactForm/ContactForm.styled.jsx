import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  position: relative;
  width: 200px;
  padding: 20px 100px 20px 20px;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 18px;
`;
export const ErrorText = styled.p`
  color: red;
`;

export const InputForm = styled(Field)`
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const ButtonAddContact = styled.button`
  position: absolute;
  top: 45%;
  right: 15%;
`;
