import React, { FC } from 'react';
import Input from './input';
import TextArea from './text-area';
import Select from './select';
import Radio from './radio';
import Checkbox from './checkbox';
import DatePicker from './date-picker';

type PropsType = {
  control?: string;
  type?: string;
  label?: string;
  as?: string;
  name?: string;
  placeholder?: string;
  options?: {
    key: string;
    value: string;
  }[];
};

const FormikControl: FC<PropsType> = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
