import { useContext } from 'react';
import { ListsContext } from '../Context/ListsContext';
import BoardHeader from './BoardHeader';
import Lists from './Lists';
import NewList from './NewList';

const Board = () => {
  const { lists, addList, addCard, deleteList, resetLists } =
    useContext(ListsContext);

  return (
    <main className=' '>
      <BoardHeader resetLists={resetLists} />
      <div className='ml-1 flex'>
        {lists &&
          lists.map((list, index) => (
            <Lists
              key={index}
              title={list.title}
              cards={list.cards}
              id={list.id}
              deleteList={deleteList}
              addCard={addCard}
            />
          ))}

        <NewList addList={addList} lists={lists} />
      </div>
    </main>
  );
};

export default Board;
