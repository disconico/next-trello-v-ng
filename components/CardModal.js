import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineMinus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Image from 'next/image';

const Modal = ({
  isOpen,
  onClose,
  cardId,
  title,
  list,
  isFollowed,
  description,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  p-4 bg-black bg-opacity-50'>
      <div className='bg-[#F4F5F7] rounded-md shadow-lg w-[780px]  px-6 pt-4 pb-8'>
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
          Dans la liste <span className='underline'>{list}</span>{' '}
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
              {description && (
                <p className='text-sm font-normal text-[#313131]'>
                  {description}
                </p>
              )}
              {!description && (
                <form className='flex flex-col gap-2'>
                  <textarea
                    className='w-full h-16 text-sm border border-gray-300 rounded-md p-2'
                    placeholder='Ajouter une description plus détaillée...'
                  ></textarea>
                  <div className='flex gap-2'>
                    <button
                      type='button'
                      className='bg-[#5aac44] hover:bg-[#61bd4f] text-white px-3 h-8 text-sm rounded '
                    >
                      Enregistrer
                    </button>
                    <button
                      type='button'
                      className=' px-3 h-8 text-gray-600 hover:text-gray-900 text-2xl rounded '
                    >
                      &times;
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div>
            {' '}
            <h3 className='text-xl font-semibold mb-2'>Actions</h3>
            <div className='flex flex-col items-start gap-2'>
              <button className='w-[170px] text-[#313131] h-8 text-sm bg-gray-200 hover:bg-gray-300 flex items-center gap-1 rounded-sm pl-2'>
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
              <button className='w-[170px] text-[#313131] h-8 text-sm bg-gray-200 hover:bg-gray-300 flex items-center gap-1 rounded-sm pl-2'>
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
  list: PropTypes.string.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  description: PropTypes.string,
};

export default Modal;
