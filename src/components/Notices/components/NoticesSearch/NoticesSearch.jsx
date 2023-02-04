import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button } from './NoticesSearch.styled';
import PropTypes from 'prop-types';

export const NoticesSearch = ({ getSearchQuery }) => {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    input.trim() === ''
      ? toast.error('Search input is empty... Please enter a new word')
      : getSearchQuery(input);
    setInput('');
    };
    
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="input"
          value={input}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          // autoFocus
          placeholder="Search"
        />
        <Button type="submit"/>
      </Form>
    </div>
  );
}
NoticesSearch.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};
