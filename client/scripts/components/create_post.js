import React from 'react';

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      body: ''
    }
    this.updateBody = this.updateBody.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  render() {
    return <form onSubmit={ this.createPost }>
      <input type='text' onChange={ this.updateBody } value={ this.state.body } />
      <input type='submit' value='Post' />
    </form>
  }

  updateBody(e) {
    this.setState({ body: e.target.value })
  }

  createPost(e) {
    e.preventDefault();
    const data = JSON.stringify({
      body: this.state.body,
      user: this.props.user
    })
    fetch('/api/posts', {
      method: 'POST',
      body: data,
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then(this.props.onPost)
  }
}

export default CreatePost;