import { Label, InputFilter } from './Filter.styled';
import React from 'react';
import { FilterProps } from 'types/componentTypes';

const Filter: React.FC<FilterProps> = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
