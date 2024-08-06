import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "react-quill/dist/quill.snow.css";

const BlogEditor = ({
  post,
  setPost,
  closeButton,
  postButton,
  updateButton,
}) => {
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
        <Editor
          apiKey="8ng6q3yo50e24pazz6qmd84l6nt0hb0gamt3m7hqfen9jzio"
          init={{
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
          }}
          initialValue={post.content}
        />
      </div>
    </div>
  );
};

export default BlogEditor;
