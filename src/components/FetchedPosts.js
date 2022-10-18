import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, showLoader } from '../redux/actions';
import Loader  from './Loader';
import Post from './Post';

export default function FetchedPosts() {
  const dispatchPost = useDispatch()
  const posts = useSelector((state) => state.posts.fetchedPosts)
  const loading = useSelector((state) => state.app.loading)
  console.log(loading)
  
  if(loading) {
    return (
      <Loader />
    )
  }
  if(!posts.length ) {
    return <button 
      className='btn btn-primary'
      onClick={() => {
        dispatchPost(fetchPosts())
      }}
    >
      Загрузить
    </button>
  }
  
  
  return posts.map(post => <Post post={post} key={post.id}/>)
}