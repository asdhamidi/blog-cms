import React from "react";

const Dashboard = ({ posts, setEditor, openEditor, deletePost, setloggedIn }) => {
  return (
    <div className="dashboard">
      <nav>
        <h1>Blog Dashboard</h1>
        <div className="dash-control">
        <button
          className="new-btn"
          onClick={() => {
            setEditor(true);
          }}
        >
          New Post
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            setloggedIn(false);
            localStorage.removeItem("token");
          }}
        >
          Log Out
        </button>

        </div>
      </nav>
      <hr />
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <div className="post-info">
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </div>
            <div className="post-controls">
              <button className="edit-btn" onClick={() => openEditor(post._id)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deletePost(post._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;