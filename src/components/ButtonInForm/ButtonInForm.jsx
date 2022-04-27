import { ButtonAddContact } from './ButtonInForm.styled';
import { AiFillFileAdd } from 'react-icons/ai';
import { iconSize } from 'constants';
import { Spiner } from 'utils/Spiner';

export default function ButtonInForm({ isAddItems }) {
  return (
    <ButtonAddContact type="submit" disabled={isAddItems}>
      {isAddItems ? <Spiner /> : <AiFillFileAdd size={iconSize.md} />}
    </ButtonAddContact>
  );
}
