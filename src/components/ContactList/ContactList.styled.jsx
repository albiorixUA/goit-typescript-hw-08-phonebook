import styled from '@emotion/styled';

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  text-align: left;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.black};
    margin-right: 15px;
    margin-left: 30px;
  }
`;
export const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
export const ContactDetails = styled.p`
  flex-grow: 1;
`;
