import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,SetBlogs] = useState([])


    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            
        </div>
    );
};

export default Blogs;