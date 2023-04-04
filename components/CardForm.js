import PropTypes from 'prop-types';
import Button from './layout/ValidateButton';
import { useState, useRef, useEffect } from 'react';
import CloseButton from './layout/CloseButton';

const CardForm = ({ listId, isFormOpen, addCard, toggleForm }) => {
  const [description, setDescription] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isFormOpen) {
      textareaRef.current.focus();
    }
  }, [isFormOpen]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCard = (e) => {
    if (!description) {
      return;
    }
    e.preventDefault();
    addCard(description, listId);
    setDescription('');
    toggleForm();
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <form className='p-2 '>
      <textarea
        ref={textareaRef}
        className='w-full bg-white rounded shadow p-2 min-h-[72px] text-sm placeholder:text-gray-500 focus:outline-none'
        placeholder='Saisissez un titre pour cette carte...'
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <div>
        <Button handleClick={handleAddCard}>Ajouter une carte</Button>
        <CloseButton handleClose={toggleForm} />
      </div>
    </form>
  );
};

CardForm.propTypes = {
  listId: PropTypes.string.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
  addCard: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default CardForm;
