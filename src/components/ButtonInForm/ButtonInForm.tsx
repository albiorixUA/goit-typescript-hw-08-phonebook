import { ButtonAddContact } from './ButtonInForm.styled';
import { AiFillFileAdd } from 'react-icons/ai';
import { iconSize } from 'constants/iconSize';
import { Spiner } from 'utils/Spiner';
import React from 'react';

interface ButtonInFormProps {
  isAddItems: boolean;
}

export default function ButtonInForm({ isAddItems }: ButtonInFormProps) {
  return (
    <ButtonAddContact type="submit" disabled={isAddItems}>
      {isAddItems ? <Spiner /> : <AiFillFileAdd size={iconSize.md} />}
    </ButtonAddContact>
  );
}
