import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks,handleMarkAsRead }) => {
    const [blogs,SetBlogs] = useState([])


    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            {
                blogs.map(blog => <Blog 
                handleAddToBookmarks={handleAddToBookmarks}
                handleMarkAsRead ={handleMarkAsRead }
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
   
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;