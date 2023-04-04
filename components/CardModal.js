import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineMinus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Image from 'next/image';
import DescriptionForm from './DescriptionForm';

const Modal = ({
  isOpen,
  onClose,
  cardId,
  title,
  listId,
  listName,
  isFollowed,
  description,
  deleteCard,
  toggleFollow,
  updateCardDescription,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const modalRef = useRef();

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  if (!isOpen) {
    return null;
  }

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const handleAlert = () => {
    const result = window.confirm(
      `Vous allez supprimer la carte nommée ${title}. \nAppuyez sur OK pour continuer. \nOu sur "Annuler" pour fermer. `
    );
    if (result) {
      deleteCard(cardId, listId);
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  p-4 bg-black bg-opacity-50'>
      <div
        className='bg-[#F4F5F7] rounded-md shadow-lg w-[780px]  px-6 pt-4 pb-8'
        ref={modalRef}
      >
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <div
            className='rounded-full hover:bg-gray-200 w-7 h-7 flex justify-center items-center cursor-pointer
        '
            onClick={onClose}
          >
            <button className='text-gray-500 hover:text-inherit text-lg'>
              {' '}
              &times;
            </button>
          </div>
        </div>
        <div className='text-sm font-normal text-[#313131 flex gap-1 items-center'>
          Dans la liste <span className='underline'>{listName}</span>{' '}
          <span>
            {isFollowed ? (
              <IconContext.Provider value={{ className: 'w-4 h-4' }}>
                <AiOutlineEye />
              </IconContext.Provider>
            ) : (
              ''
            )}
          </span>
        </div>
        <div className='mt-4 flex gap-4 '>
          <div className='w-[530px]'>
            {' '}
            <h3 className='text-xl font-semibold mb-2'>Description</h3>
            <div>
              {!isFormOpen && description && (
                <p
                  className='text-sm font-normal text-[#313131] hover:cursor-pointer'
                  onClick={toggleForm}
                >
                  {description}
                </p>
              )}
              {!isFormOpen && !description && (
                <p
                  className='text-sm font-normal h-14 p-2 rounded hover:cursor-pointer hover:bg-gray-300 text-[#313131] bg-gray-200'
                  onClick={toggleForm}
                >
                  Ajouter une description plus détaillée...
                </p>
              )}
              {isFormOpen && (
                <DescriptionForm
                  key={cardId}
                  description={description}
                  cardId={cardId}
                  listId={listId}
                  toggleForm={toggleForm}
                  updateCardDescription={updateCardDescription}
                />
              )}
            </div>
          </div>
          <div>
            {' '}
            <h3 className='text-xl font-semibold mb-2'>Actions</h3>
            <div className='flex flex-col items-start gap-2'>
              <button
                className='w-[170px] text-[#313131] h-8 text-sm bg-gray-200 hover:bg-gray-300 flex items-center gap-1 rounded-sm pl-2'
                onClick={() => toggleFollow(cardId, listId)}
              >
                <span>
                  <IconContext.Provider value={{ className: 'w-4 h-4' }}>
                    <AiOutlineEye />
                  </IconContext.Provider>
                </span>
                Suivre
                <span className='flex-grow' />
                {isFollowed && (
                  <span className='mr-2'>
                    <Image
                      src='/assets/ok.png'
                      alt='ok'
                      width={20}
                      height={20}
                    />
                  </span>
                )}
              </button>
              <button
                className='w-[170px] text-[#313131] h-8 text-sm bg-gray-200 hover:bg-gray-300 flex items-center gap-1 rounded-sm pl-2'
                onClick={handleAlert}
              >
                <span>
                  <IconContext.Provider value={{ className: 'w-4 h-4' }}>
                    <AiOutlineMinus />
                  </IconContext.Provider>
                </span>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  listName: PropTypes.string.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  description: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  toggleFollow: PropTypes.func.isRequired,
  updateCardDescription: PropTypes.func.isRequired,
};

export default Modal;
