import Button from './layout/Button';

const BoardHeader = () => {
  return (
    <div className='p-2 flex gap-4'>
      <h1 className='text-white text-lg pl-3'>Tableau principal</h1>
      <Button handleClick={() => console.log('click')}>
        Initialiser le jeu de données
      </Button>
    </div>
  );
};

export default BoardHeader;
