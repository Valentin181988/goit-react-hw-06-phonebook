import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Label, Input, SubmitButton } from "./PhoneBookForm.styled";

export function PhoneBookForm({onSubmit}) {

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {

    const {name, value} = event.target;
    
    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default: return;
    };
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({name, number})
    
    setName('');
    setNumber('');
};


  return (
    <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}/>

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
            type="number"
            name="number"
            id={numberInputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}/>
        <SubmitButton
            type="submit"
            disabled={!number || !name}>Add contact
        </SubmitButton>
  </Form>
);
};



PhoneBookForm.propTypes = {
    onSubmit: PropTypes.func
 }; 


