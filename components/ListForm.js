import PropTypes from 'prop-types';
import Button from './layout/ValidateButton';
import { useState, useRef, useEffect } from 'react';
import CloseButton from './layout/CloseButton';

const ListForm = ({ isFormOpen, addList, toggleForm }) => {
  const [title, setTitle] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isFormOpen) {
      textareaRef.current.focus();
    }
  }, [isFormOpen]);

  const handleDescriptionChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddList = (e) => {
    if (!title) {
      return;
    }
    e.preventDefault();
    addList(title);
    setTitle('');
    toggleForm();
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <div>
      <form className='p-1   w-72 bg-gray-300 rounded max-h-min'>
        <textarea
          ref={textareaRef}
          className='w-full bg-white rounded shadow p-2  text-xs placeholder:text-gray-500 focus:border-blue-600 resize-none h-9'
          placeholder='Saisissez un titre pour cette carte...'
          value={title}
          onChange={handleDescriptionChange}
        ></textarea>
        <div>
          <Button handleClick={handleAddList}>Ajouter une liste</Button>
          <CloseButton handleClose={toggleForm} />
        </div>
      </form>
    </div>
  );
};

ListForm.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  addList: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default ListForm;
