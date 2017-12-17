import React from 'react';
import Post from './post';
import CreatePost from './create_post';

class Snack extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: ''
    }
    this.refresh = this.refresh.bind(this);
  }

  render() {
    return <div>
      <div className='header'>
        <h1>snack</h1>

        <div className='user-name-input'>
          Your name:
          <input type='text' onChange={ this.setUser } value={ this.state.user } />
        </div>
      </div>

      <div className='content'>
        { this.state.posts.map(post => {
          return <Post key={ post._id } { ...post } />
        })}
      </div>

      <CreatePost onPost={ this.refresh } user={ this.state.user } />
    </div>;
  }

  refresh() {
    fetch('/api/posts')
    .then(res => res.json())
    .then(posts => this.setState({ posts }))
  }

  setUser(e) {
    this.setState({ user: e.target.value });
  }

  componentDidMount() {
    this.refresh();
  }
}

export default Snack;