export interface FormProps {
  onSubmit: (arg: Values) => void;
  children?: React.ReactNode;
  toggleModal?: () => void;
  initialValues?: {
    name: string;
    number: string;
  };
}

export interface Values {
  name: string;
  number: string;
  username?: string;
  password?: string;
}

export interface ContactFormProps {
  onSubmit: (arg: Values) => void;
  isAddItems: boolean;
}

export interface ContactListProps {
  contacts: [];
  onEdit: () => void;
  getContactId: (id: string) => void;
}

export interface FilterProps {
  value: string;
  onChange: () => void;
}

export interface EditContactModalProps {
  hide: () => void;
  onSubmit: (arg: Values) => void;
}

export interface RoutesPropsType {
  children: React.ReactNode;
  restricted?: boolean;
}
