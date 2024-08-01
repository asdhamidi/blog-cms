import "./App.css";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Editor from "./components/editor";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [editor, setEditor] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const openEditor = (id) => {
    axios
      .get("https://blog-api-h1by.vercel.app/posts/" + id)
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
    axios
      .put(
        "https://blog-api-h1by.vercel.app/post/" + currentPost._id,
        currentPost
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setCurrentPost([]);
    setEditor(false);
  };

  const publishPost = () => {
    axios
      .post("https://blog-api-h1by.vercel.app/post", currentPost)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setCurrentPost([]);
    setEditor(false);
  };

  const deletePost = (id) => {
    axios
      .delete("https://blog-api-h1by.vercel.app/post/" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setCurrentPost([]);
    setEditor(false);
  };

  useEffect(() => {
    axios
      .get("https://blog-api-h1by.vercel.app/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {editor === false && (<Dashboard
        posts={posts}
        setEditor={setEditor}
        openEditor={openEditor}
        deletePost={deletePost}
      />)}
      {editor === true && (
        <Editor
          post={currentPost}
          setPost={setCurrentPost}
          closeButton={closeEditor}
          updateButton={updatePost}
          postButton={publishPost}
        />
      )}
    </div>
  );
}

export default App;
