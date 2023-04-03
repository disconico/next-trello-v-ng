import PropTypes from 'prop-types';
import BoardHeader from './BoardHeader';
import Lists from './Lists';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';

const Board = ({ lists = [] }) => {
  return (
    <main className=' '>
      <BoardHeader />
      <div className='ml-1 flex'>
        <Lists
          title='First card'
          cards={[
            { title: 'card-1', cardId: '1', list: 'List 1', isFollowed: true },
            { title: 'card-1', cardId: '2', list: 'List 1', isFollowed: true },
            { title: 'card-1', cardId: '3', list: 'List 1', isFollowed: true },
            {
              title: 'card-2',
              isFollowed: false,
              description: 'Nice',
              cardId: '4',
              list: 'List 1',
            },
          ]}
        />
        <Lists
          title='Second card'
          cards={[
            { title: 'card-1', cardId: '5', list: 'List 2', isFollowed: false },
            {
              title: 'card-2',
              isFollowed: true,
              description: 'Nice',
              cardId: '6',
              list: 'List 2',
            },
          ]}
        />
        <button className='px-1 text-sm text-white   font-normal h-10  w-72  '>
          <div className='flex gap-2 px-4 rounded  bg-[#ABB1B4] hover:bg-[#bec2c4] h-10 items-center'>
            <IconContext.Provider value={{ className: 'w-4 h-4 text-white' }}>
              <div className='cursor-pointer '>
                <AiOutlinePlus />
              </div>
            </IconContext.Provider>
            <div>{`Ajouter une ${lists.length > 0 ? 'autre' : ''} liste`}</div>
          </div>
        </button>
      </div>
    </main>
  );
};

Board.propTypes = {
  lists: PropTypes.array,
};

export default Board;
