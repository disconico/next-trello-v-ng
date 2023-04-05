import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import ListForm from './ListForm';

const NewList = ({ addList, lists }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef();

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsFormOpen(false);
    }
  };

  useEffect(() => {
    if (isFormOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormOpen]);

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
            <div className='pt-1 font-Arial'>{`Ajouter une ${
              lists.length > 0 ? 'autre' : ''
            } liste`}</div>
          </div>
        </button>
      )}
      {isFormOpen && (
        <div ref={formRef}>
          <ListForm
            isFormOpen={isFormOpen}
            addList={addList}
            toggleForm={toggleForm}
          />
        </div>
      )}
    </>
  );
};

NewList.propTypes = {
  addList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default NewList;
