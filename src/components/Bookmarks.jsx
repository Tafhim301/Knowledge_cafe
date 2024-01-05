import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3">
            <div>
                <h3 className="text-3xl font-bold text-center mt-20">Reading Time: {readingTime}</h3>
            </div>
            <div className='text-center bg-gray-300 rounded-lg ml-4 mt-10 p-6'>
            <h2 className="text-3xl font-semibold ">Bookmark Blogs: {bookmarks.length}</h2>
            <div >
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
            </div>
           
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    readingTime: PropTypes.number,
   
   
    bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;