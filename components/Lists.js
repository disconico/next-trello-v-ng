import Card from './Card';
import PropTypes from 'prop-types';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Lists = ({ title, cards = [] }) => {
  return (
    <div>
      <div className='flex flex-col w-[272px] bg-gray-300 mx-1 rounded max-h-min'>
        <div className='px-2 py-[10px]'>
          <div className='flex justify-between px-2 items-center'>
            <div className='text-[#313131] font-semibold text-sm'>{title}</div>
            <div className='w-8 h-8 rounded-md hover:bg-[#091e4221] text-gray-600 flex justify-center items-center '>
              <IconContext.Provider value={{ className: 'w-6 h-6 ' }}>
                <button className='cursor-pointer'>
                  <BiDotsHorizontalRounded />
                </button>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-2 gap-2'>
          {cards.length > 0 &&
            cards.map((card, index) => <Card key={index} card={card} />)}
        </div>
        <button className='p-2 text-sm text-[#616161]'>
          <div className='flex gap-2 px-4 rounded hover:bg-[#091e4214] h-[30px] items-center'>
            <IconContext.Provider
              value={{ className: 'w-4 h-4 text-gray-800' }}
            >
              <AiOutlinePlus />
            </IconContext.Provider>
            <div>{`Ajouter une ${cards.length > 0 ? 'autre' : ''} carte`}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

Lists.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array,
};

export default Lists;
