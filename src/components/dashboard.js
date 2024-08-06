import React, { useState } from "react";

const Dashboard = ({
  posts,
  setEditor,
  openEditor,
  deletePost,
  setloggedIn,
  generateCode,
  loadPosts,
}) => {
  const [deletePop, setDeletePop] = useState(false);
  const [contextPost, setContextPost] = useState(null);
  const handleDelete = () => {
    deletePost(contextPost);
    setContextPost(null);
    setDeletePop(false);
    loadPosts();
  };

  return (
    <div className="dashboard">
      {deletePop === true && <div className="blur"></div>}
      {deletePop === true && (
        <div className="delete-pop">
          <h2>Delete?</h2>
          <div>Do you want to delete this post?</div>
          <div className="delete-controls">
            <button className="delete-btn" onClick={handleDelete}>
              Yes
            </button>
            <button
              className="submit-btn"
              onClick={() => {
                setContextPost(null);
                setDeletePop(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
      <nav>
        <h1>dashboard</h1>
        <div className="dash-control">
          <button className="new-btn gen-btn" onClick={generateCode}>
            generate code
          </button>
          <button
            className="new-btn"
            onClick={() => {
              setEditor(true);
            }}
          >
            new post
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              setloggedIn(false);
              localStorage.removeItem("token");
            }}
          >
            log out
          </button>
        </div>
      </nav>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <div className="post-info">
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </div>
            <div className="post-controls">
              <button className="edit-btn" onClick={() => openEditor(post._id)}>
                edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  setDeletePop(true);
                  setContextPost(post._id);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
