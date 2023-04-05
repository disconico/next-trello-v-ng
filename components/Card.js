import PropTypes from 'prop-types';
import { ListsContext } from '../Context/ListsContext';
import { useState, useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsTextLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Modal from './CardModal';

const Card = ({ card, listName }) => {
  const { title, description, isFollowed, cardId, listId } = card;
  const { deleteCard, toggleFollow, updateCardDescription } =
    useContext(ListsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className='w-full bg-white hover:bg-gray-100 hover:cursor-pointer rounded shadow-custom px-2 min-h-[32px] text-[#313131] text-sm '
        onClick={toggleModal}
      >
        <h2 className='pt-2 h-8 font-Arial '>{title}</h2>
        {(description || isFollowed) && (
          <div className='flex gap-2 ml-1 h-6'>
            {isFollowed && (
              <IconContext.Provider value={{ className: 'w-4 h-4' }}>
                <AiOutlineEye />
              </IconContext.Provider>
            )}
            {description && (
              <IconContext.Provider value={{ className: 'w-4 h-4' }}>
                <BsTextLeft />
              </IconContext.Provider>
            )}
          </div>
        )}
      </div>
      <Modal
        cardId={cardId}
        isFollowed={isFollowed}
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={title}
        listId={listId}
        listName={listName}
        description={description}
        deleteCard={deleteCard}
        toggleFollow={toggleFollow}
        updateCardDescription={updateCardDescription}
      />
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  listName: PropTypes.string.isRequired,
};

export default Card;
