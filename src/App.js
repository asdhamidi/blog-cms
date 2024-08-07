import "./App.css";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import BlogEditor from "./components/editor";
import React, { useState, useEffect } from "react";
import axiosInstance from "./components/api-handling";

function App() {
  const [posts, setPosts] = useState([]);
  const [editor, setEditor] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloggedIn(true);
      loadPosts();
    }
  }, []);

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

  const createPost = () => {
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
      .get("/posts-all")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const publishPost = (id) => {
    axiosInstance
      .put("/posts/" + id + "/publish")
      .then((response) => {
        setCurrentPost([]);
        setEditor(false);
        loadPosts();
      })
      .catch((error) => {
        console.error(error);
      });
    loadPosts();
  };

  const unpublishPost = (id) => {
    axiosInstance
      .put("/posts/" + id + "/unpublish")
      .then((response) => {
        setCurrentPost([]);
        setEditor(false);
        loadPosts();
      })
      .catch((error) => {
        console.error(error);
      });
    loadPosts();
  };

  const generateCode = () => {
    axiosInstance
      .post("https://blog-api-h1by.vercel.app/generate_code")
      .then((res) => {
        window.alert("Registration Code: " + res.data.code);
      })
      .catch((err) => console.error(err));
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
              generateCode={generateCode}
              loadPosts={loadPosts}
              unpublishPost={unpublishPost}
              publishPost={publishPost}
            />
          )}
          {editor === true && (
            <BlogEditor
              post={currentPost}
              setPost={setCurrentPost}
              closeButton={closeEditor}
              updateButton={updatePost}
              postButton={createPost}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
