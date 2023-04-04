import { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../utils/localStorage';

const ListsContext = createContext();

const initialLists = [
  {
    title: 'My first list',
    id: uuidv4(),
    cards: [
      {
        title: 'My first card',
        cardId: uuidv4(),
        listId: '',
        isFollowed: false,
        description: '',
      },
      {
        title: 'My second card',
        cardId: uuidv4(),
        listId: '',
        isFollowed: false,
        description: '',
      },
      {
        title: 'Followed card',
        cardId: uuidv4(),
        listId: '',
        isFollowed: true,
        description: '',
      },
    ],
  },
  {
    title: 'My second list',
    id: uuidv4(),
    cards: [
      {
        title: 'Followed card with description',
        isFollowed: true,
        description: 'My first description',
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
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const savedLists = loadFromLocalStorage('lists');
    if (savedLists) {
      setLists(savedLists);
    } else {
      setLists(setListIdsAndCardIds(initialLists));
    }
  }, []);

  const updateAndSaveLists = (updatedLists) => {
    setLists(updatedLists);
    saveToLocalStorage('lists', updatedLists);
  };

  const resetLists = () => {
    const newLists = setListIdsAndCardIds(initialLists);
    updateAndSaveLists(newLists);
  };

  const addList = (title) => {
    const newList = {
      title,
      id: uuidv4(),
      cards: [],
    };

    updateAndSaveLists([...lists, newList]);
  };

  const deleteList = (listId) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    updateAndSaveLists(updatedLists);
  };

  const addCard = (title, listId) => {
    const newCard = {
      title,
      isFollowed: false,
      cardId: uuidv4(),
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
    updateAndSaveLists(updatedLists);
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
    updateAndSaveLists(updatedLists);
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
    updateAndSaveLists(updatedLists);
  };

  const updateCardDescription = (cardId, listId, newDescription) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedCards = list.cards.map((card) => {
          if (card.cardId === cardId) {
            return {
              ...card,
              description: newDescription,
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
    updateAndSaveLists(updatedLists);
  };

  return (
    <ListsContext.Provider
      value={{
        lists,
        addList,
        addCard,
        deleteList,
        deleteCard,
        toggleFollow,
        resetLists,
        updateCardDescription,
      }}
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
