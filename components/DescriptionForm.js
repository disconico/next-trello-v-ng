import CloseButton from './layout/CloseButton';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DescriptionForm = ({
  cardId,
  listId,
  toggleForm,
  description,
  updateCardDescription,
}) => {
  const [newDescription, setNewDescription] = useState(description || '');

  const handleChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSave = () => {
    updateCardDescription(cardId, listId, newDescription);
    toggleForm();
  };

  return (
    <form className='flex flex-col gap-2'>
      <textarea
        className='w-full h-16 text-sm border border-gray-300 rounded-md p-2'
        placeholder='Ajouter une description plus détaillée...'
        value={newDescription}
        onChange={handleChange}
      ></textarea>
      <div className='flex gap-2'>
        <button
          type='button'
          className='bg-[#5aac44] hover:bg-[#61bd4f] text-white px-3 h-8 text-sm rounded '
          onClick={handleSave}
        >
          Enregistrer
        </button>
        <CloseButton handleClose={toggleForm} />
      </div>
    </form>
  );
};

DescriptionForm.propTypes = {
  cardId: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
  description: PropTypes.string,
  updateCardDescription: PropTypes.func.isRequired,
};

export default DescriptionForm;
