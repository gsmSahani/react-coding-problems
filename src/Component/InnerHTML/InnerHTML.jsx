import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
const InnerHTML = () => {
  // this is pure html
  let data = `<p style="font-size: 20px">Hello React</p>`;
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: data }}></h1>
        {/* this is jsx */}
        <h1 style={{ color: "red", backgroundColor: "blue" }}>
          This is amazing
        </h1>
      </div>
      <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
    </>
  );
};

export default InnerHTML;
