import PropTypes from 'prop-types';

const CardForm = ({ listId, isFormOpen }) => {
  if (!isFormOpen) {
    return null;
  }

  return (
    <form className='px-2 '>
      <textarea
        className='w-full bg-white rounded shadow p-2 min-h-[72px] text-sm placeholder:text-gray-500 focus:outline-none'
        placeholder='Saisissez un titre pour cette carte...'
        required
      ></textarea>
    </form>
  );
};

CardForm.propTypes = {
  listId: PropTypes.string.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
};

export default CardForm;
