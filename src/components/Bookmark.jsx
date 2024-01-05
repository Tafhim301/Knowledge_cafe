import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-50 p-10 mt-10 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
            
        </div>
    );
};
Bookmark.propTypes = {
    
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;