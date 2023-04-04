import PropTypes from 'prop-types';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import ListForm from './ListForm';

const NewList = ({ addList, lists }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <>
      {!isFormOpen && (
        <button
          className='px-1 text-sm text-white   font-normal h-10  w-72  '
          onClick={toggleForm}
        >
          <div className='flex gap-2 px-4 rounded  bg-[#ABB1B4] hover:bg-[#bec2c4] h-10 items-center'>
            <IconContext.Provider value={{ className: 'w-4 h-4 text-white' }}>
              <div className='cursor-pointer '>
                <AiOutlinePlus />
              </div>
            </IconContext.Provider>
            <div>{`Ajouter une ${lists.length > 0 ? 'autre' : ''} liste`}</div>
          </div>
        </button>
      )}
      {isFormOpen && (
        <ListForm
          isFormOpen={isFormOpen}
          addList={addList}
          toggleForm={toggleForm}
        />
      )}
    </>
  );
};

NewList.propTypes = {
  addList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default NewList;
