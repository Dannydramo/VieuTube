import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/fetchApi'
import Videos from './Videos'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(()=>{
    FetchApi(`search?part=snippet&q=${searchTerm}`)
    .then(data => setVideos(data.items)).catch(err => console.log(err.message))

  }, [searchTerm])
  return (
    <Fragment>
    <div className="container h-[95vh]">
      <div className="">
        <div className="my-4 text-2xl">
        Search Result for  <span className='font-bold'>{searchTerm} </span>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
   </Fragment>
  )
}

export default SearchFeed