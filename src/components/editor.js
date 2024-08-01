import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ post, setPost, closeButton, postButton, updateButton }) => {
  return (
    <div className="editor">
      <div className="editor-controls">
        <button className="back-btn" onClick={closeButton}>
          Back
        </button>
        {post._id !== undefined && <h1>Editing Blog</h1>}
        {post._id === undefined && <h1>New Blog</h1>}
        {post._id !== undefined && (
          <button className="submit-btn" onClick={updateButton}>
            Update
          </button>
        )}
        {post._id === undefined && (
          <button className="submit-btn" onClick={postButton}>
            Post
          </button>
        )}
      </div>
      <div className="editor-content">
        <label>Title: </label>
        <input
          className="title-edit"
          value={post.title}
          onChange={(event) => {
            setPost((prevState) => ({
              ...prevState,
              title: event.target.value,
              author: "asad",
            }));
          }}
        ></input>
        <label>Content: </label>
        <ReactQuill
          className="content-edit"
          theme="snow"
          value={post.content}
          onChange={(value) => {
            setPost((prevState) => ({
              ...prevState,
              content: value,
              author: "asad",
            }));
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
