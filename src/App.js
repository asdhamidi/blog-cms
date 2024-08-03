import "./App.css";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Editor from "./components/editor";
import React, { useState } from "react";
import axiosInstance from "./components/api-handling";

function App() {
  const [posts, setPosts] = useState([]);
  const [editor, setEditor] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);

  const openEditor = (id) => {
    axiosInstance
      .get("/posts/" + id)
      .then((response) => {
        setCurrentPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setEditor(true);
  };

  const closeEditor = () => {
    setCurrentPost([]);
    setEditor(false);
  };

  const updatePost = () => {
    axiosInstance
      .put("/posts/" + currentPost._id, currentPost)
      .then((response) => {
        setCurrentPost([]);
        setEditor(false);
        loadPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const publishPost = () => {
    axiosInstance
      .post("/posts", currentPost)
      .then((response) => {
        setCurrentPost([]);
        setEditor(false);
        loadPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletePost = (id) => {
    axiosInstance
      .delete("/posts/" + id)
      .then((response) => {
        loadPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadPosts = () => {
    axiosInstance
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      {loggedIn === false && (
        <Login setloggedIn={setloggedIn} loadPosts={loadPosts} />
      )}
      {loggedIn === true && (
        <>
          {editor === false && (
            <Dashboard
              posts={posts}
              setEditor={setEditor}
              openEditor={openEditor}
              deletePost={deletePost}
              setloggedIn={setloggedIn}
            />
          )}
          {editor === true && (
            <Editor
              post={currentPost}
              setPost={setCurrentPost}
              closeButton={closeEditor}
              updateButton={updatePost}
              postButton={publishPost}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
