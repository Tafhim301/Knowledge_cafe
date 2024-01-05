import { useState } from "react"
import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Header from "./components/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const [readingTime,setReadingTime] = useState(0);
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time)
  }
  

  return (
    <>
     <Header ></Header>
     <div className="md:flex max-w-7xl mx-auto">
     <Blogs handleAddToBookmarks={handleAddToBookmarks}
    handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks
     bookmarks={bookmarks}
     readingTime={readingTime}
     
     ></Bookmarks>
     </div>
      
    </>
  )
}

export default App
