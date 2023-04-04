import PropTypes from 'prop-types';

const Button = ({ handleClick, children }) => {
  return (
    <button
      type='button'
      onClick={handleClick}
      className='bg-[#5aac44] hover:bg-[#61bd4f] text-white px-3 h-8 text-sm rounded '
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
