import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/book/booksSlice';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className="btn-group">
      <button type="button">Comment</button>
      <div className="vertical-divider" />
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <div className="vertical-divider" />
      <button type="button">Edit</button>
    </div>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Buttons;
