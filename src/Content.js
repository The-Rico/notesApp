import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import React from 'react';
import { useState } from "react";

export default function Content() {
    const [convertedText, setConvertedText] = useState("Some default content");
    return (
      <div className="content">
        <ReactQuill
          theme='snow'
          value={convertedText}
          onChange={setConvertedText}
          style={{minHeight: '300px'}}
        />
      </div>
    );
  }