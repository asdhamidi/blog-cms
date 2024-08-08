import React, { useState } from "react";
import BeatLoader from "react-spinners/ClipLoader";
import Popup from "./pop";

const override = {
  borderColor: "#666",
};

const Dashboard = ({
  posts,
  setEditor,
  openEditor,
  deletePost,
  setloggedIn,
  generateCode,
  loadPosts,
  unpublishPost,
  publishPost,
  loading,
  setLoading,
}) => {
  const [deletePop, setDeletePop] = useState(false);
  const [contextPost, setContextPost] = useState(null);
  const [theme, setTheme] = useState("🔆");

  const handleDelete = () => {
    deletePost(contextPost);
    setContextPost(null);
    setDeletePop(false);
    loadPosts();
  };

  function changeTheme() {
    if (theme === "🔆") setTheme("🌙");
    else setTheme("🔆");

    document.body.classList.toggle("dark");
  }

  return (
    <div className="dashboard">
      {loading === true && (
        <div className="front-page loading-screen">
          <BeatLoader
            className="loading-spinner"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
          />
        </div>
      )}
      {loading === true && <div className="blur"></div>}
      {deletePop === true && <div className="blur"></div>}
      {deletePop === true && (
        <Popup
          title="delete?"
          ques="do you want to delete this?"
          yesHandler={handleDelete}
          yesText="yes"
          noHandler={() => {
            setContextPost(null);
            setDeletePop(false);
          }}
          noText="no"
        />
      )}
      <nav>
        <h1>hi, {localStorage.getItem("user")}!</h1>
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
              localStorage.removeItem("user");
            }}
          >
            log out
          </button>
          <button className="theme-btn" onClick={changeTheme}>
            {theme}
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
              {post.published === "false" && (
                <button
                  className="submit-btn"
                  onClick={() => {
                    publishPost(post._id);
                  }}
                >
                  publish
                </button>
              )}
              {post.published === "true" && (
                <button
                  className="upub-btn"
                  onClick={() => {
                    unpublishPost(post._id);
                  }}
                >
                  unpublish
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
