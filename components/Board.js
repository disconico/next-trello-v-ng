import { useContext } from 'react';
import { ListsContext } from '../Context/ListsContext';
import BoardHeader from './BoardHeader';
import Lists from './Lists';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';

const Board = () => {
  const { lists, addList, addCard, deleteList } = useContext(ListsContext);

  return (
    <main className=' '>
      <BoardHeader />
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

        <button className='px-1 text-sm text-white   font-normal h-10  w-72  '>
          <div className='flex gap-2 px-4 rounded  bg-[#ABB1B4] hover:bg-[#bec2c4] h-10 items-center'>
            <IconContext.Provider value={{ className: 'w-4 h-4 text-white' }}>
              <div className='cursor-pointer '>
                <AiOutlinePlus />
              </div>
            </IconContext.Provider>
            <div onClick={() => addList('hi')}>{`Ajouter une ${
              lists.length > 0 ? 'autre' : ''
            } liste`}</div>
          </div>
        </button>
      </div>
    </main>
  );
};

export default Board;
