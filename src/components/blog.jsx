import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmarks,handleMarkAsRead  }) => {
    const {title, cover,posted_date, reading_time,author,author_img,hashtags} = blog;

    return (
        <div className='mb-10'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex mt-5 justify-between'>
                <div className='flex items-center'>
                    <img className="w-1/6" src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p>{posted_date}</p>

                    </div>

                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-1 text-2xl' 
                    ><FaBookmark></FaBookmark>
                    </button>

                </div>
            </div>

            
            <h2 className='text-4xl font-bold mt-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span key={idx}><a href="">#{hash}</a></span>,)
                }
            </p>

            <button className='text-blue-800 text-xl font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>


            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
      
} 

export default Blog;