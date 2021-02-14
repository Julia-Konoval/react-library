import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './BookForm.scss';
import axios from 'axios';
import { useBookContext } from './contexts/BookContext';
import { useForm } from 'react-hook-form';

function BookForm() {
  // const { currentBook } = useBookContext();

  const { register, handleSubmit } = useForm();
  let history = useHistory();

  async function onSubmit(data) {
    try {
      const response = await axios.post('http://localhost:8000/books', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="book__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          ref={register({ required: true, maxLength: 20 })}
          placeholder="Title"
        />
        <input
          name="author"
          ref={register({ required: true, maxLength: 20 })}
          placeholder="Author"
        />
        <select name="category" ref={register}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        <input
          name="isbn"
          type="number"
          ref={register({ min: 18, max: 99 })}
          placeholder="ISBN"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BookForm;
