import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/fetchApi'
import Videos from './Videos'
import {Oval} from 'react-loader-spinner'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    FetchApi(`search?part=snippet&q=${searchTerm}`)
    .then(data => {
      setVideos(data.items)
      setIsLoading(false)
    }).catch(err => console.log(err.message))

  }, [searchTerm])
  return (
    <Fragment>
    <div className="container h-[95vh]">
      <div className="">
        <div className="my-4 text-2xl">
        Search Result for  <span className='font-bold'>{searchTerm} </span>
        </div>
        <div className="absolute top-[50%] right-[50%]">
{isLoading &&   <Oval
  height={80}
  width={80}
  color="#000"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#000"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>}
</div>
      { !isLoading && <Videos videos={videos} />}
      </div>
    </div>
   </Fragment>
  )
}

export default SearchFeed