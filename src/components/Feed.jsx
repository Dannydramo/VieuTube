import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchApi } from '../utils/fetchApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    FetchApi(`search?part=snippet&q=${selectedCategory}`)
    .then(data => setVideos(data.items))
    .catch(err => console.log(err.message))

  }, [selectedCategory])

  return (
   <Fragment>
    <div className="container h-[95vh]">
      <div className=""><Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /></div>
      <div className="">
        <div className="my-4 font-bold text-2xl">
          {selectedCategory} <span>Videos</span>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
   </Fragment>
  )
}

export default Feed