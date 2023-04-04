import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const ListsContext = createContext();

const initialLists = [
  {
    title: 'First list',
    id: uuidv4(),
    cards: [
      { title: 'card-1', cardId: uuidv4(), listId: '', isFollowed: true },
      { title: 'card-1', cardId: uuidv4(), listId: '', isFollowed: true },
      { title: 'card-1', cardId: uuidv4(), listId: '', isFollowed: true },
      {
        title: 'card-2',
        isFollowed: false,
        description: 'Nice',
        cardId: uuidv4(),
        listId: '',
      },
    ],
  },
  {
    title: 'Second list',
    id: uuidv4(),
    cards: [
      { title: 'card-1', cardId: uuidv4(), listId: '', isFollowed: false },
      {
        title: 'card-2',
        isFollowed: true,
        description: 'Nice',
        cardId: uuidv4(),
        listId: '',
      },
    ],
  },
];

const setListIdsAndCardIds = (lists) => {
  return lists.map((list) => {
    const id = uuidv4();
    const cards = list.cards.map((card) => {
      const cardId = uuidv4();
      return { ...card, listId: id, cardId };
    });
    return { ...list, id, cards };
  });
};

const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState(setListIdsAndCardIds(initialLists));

  const addList = (title) => {
    const newList = {
      title,
      id: Math.random().toString(36),
      cards: [],
    };

    setLists((prevLists) => [...prevLists, newList]);
  };

  const deleteList = (listId) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    setLists(updatedLists);
  };

  const addCard = (title, listId) => {
    const newCard = {
      title,
      isFollowed: false,
      cardId: Math.random().toString(36),
      listId,
    };
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          cards: [...list.cards, newCard],
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const deleteCard = (cardId, listId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedCards = list.cards.filter(
          (card) => card.cardId !== cardId
        );
        return {
          ...list,
          cards: updatedCards,
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const toggleFollow = (cardId, listId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedCards = list.cards.map((card) => {
          if (card.cardId === cardId) {
            return {
              ...card,
              isFollowed: !card.isFollowed,
            };
          }
          return card;
        });
        return {
          ...list,
          cards: updatedCards,
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <ListsContext.Provider
      value={{ lists, addList, addCard, deleteList, deleteCard, toggleFollow }}
    >
      {children}
    </ListsContext.Provider>
  );
};

ListsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ListsProvider, ListsContext };
