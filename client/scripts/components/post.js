import React from 'react';

const Post = ({ body,  user }) => (
  <div className='post'>
    <div className='userName'>{ user }</div>
    <div className='body'>{ body }</div>
  </div>
)

export default Post;