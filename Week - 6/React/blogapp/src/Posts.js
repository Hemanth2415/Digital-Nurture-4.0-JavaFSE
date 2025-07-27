import React from 'react';
import Post from './Post'; 

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Fetch Error:", error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts.");
    console.error("Error caught in componentDidCatch:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
