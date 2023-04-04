import PropTypes from 'prop-types';

const CloseButton = ({ handleClose }) => {
  return (
    <button
      type='button'
      className=' px-3 h-8 text-gray-600 hover:text-gray-900 text-2xl rounded '
      onClick={handleClose}
    >
      &times;
    </button>
  );
};

CloseButton.propTypes = {
  handleClose: PropTypes.func,
};

export default CloseButton;
