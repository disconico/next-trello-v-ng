import Button from './layout/ValidateButton';
import PropTypes from 'prop-types';

const BoardHeader = ({ resetLists }) => {
  return (
    <header className='p-2 flex gap-4 w-full'>
      <h1 className='text-white text-lg pl-3'>Tableau principal</h1>
      <Button handleClick={resetLists}>Initialiser le jeu de données</Button>
    </header>
  );
};

BoardHeader.propTypes = {
  resetLists: PropTypes.func.isRequired,
};

export default BoardHeader;
