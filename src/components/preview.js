import React, { useState } from "react";

const Preview = ({ content, setPreview }) => {
  const [size, setSize] = useState("preview-content-phone");
  return (
    <div className="blog-preview">
      <div className="topbar">
        <h1>Preview Post</h1>
        <div>
          <select
            name="device"
            id="device"
            onChange={(e) => {
              setSize("preview-content-" + e.target.value);
            }}
          >
            <option value="phone">phone</option>
            <option value="desktop">desktop</option>
          </select>
          <button onClick={() => setPreview(false)}>Done</button>
        </div>
      </div>
      <div className={size} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Preview;
