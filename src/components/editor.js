import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogEditor = ({
  post,
  setPost,
  closeButton,
  postButton,
  updateButton,
}) => {
  const [content, setContent] = useState(post.content);

  return (
    <div className="editor">
      <div className="editor-controls">
        <button className="back-btn" onClick={closeButton}>
          Back
        </button>
        {post._id !== undefined && <h1>editing {post.title}</h1>}
        {post._id === undefined && <h1>new blog</h1>}
        {post._id !== undefined && (
          <button className="submit-btn" onClick={updateButton}>
            update
          </button>
        )}
        {post._id === undefined && (
          <button className="submit-btn" onClick={postButton}>
            post
          </button>
        )}
      </div>
      <hr />
      <div className="editor-content">
        <input
          className="title-edit"
          placeholder="title"
          value={post.title}
          onChange={(event) => {
            setPost((prevState) => ({
              ...prevState,
              title: event.target.value,
              author: "asad",
            }));
          }}
        ></input>
        <ReactQuill
          theme="snow"
          value={post.content}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, false] }],
              [{ size: ["small", false, "large", "huge"] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { list: "check" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["image", "code-block"],
              [{ script: "sub" }, { script: "super" }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["clean"],
            ],
          }}
          onChange={(value) => {
            setPost((prevState) => ({
              ...prevState,
              content: value,
            }));
          }}
        />
        ;
      </div>
    </div>
  );
};

export default BlogEditor;
