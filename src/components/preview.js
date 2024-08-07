import React from "react";

const Preview = ({ content, setPreview }) => {
  return (
    <div className="blog-preview">
      <div className="topbar">
        <h1>Preview Post</h1>
        <button onClick={() => setPreview(false)}>Done</button>
      </div>
      <div
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Preview;
