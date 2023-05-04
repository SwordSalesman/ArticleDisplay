import { useState } from "react";

import "../styles/Article.css";
import placeholder from "../assets/camera.svg";

function ImageBlock({ url, children }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="ImageBlock">
      <div
        className="image-loader"
        style={{ display: loading ? "block" : "none" }}
      >
        <img src={placeholder}></img>
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <img src={url} onLoad={() => setLoading(false)}></img>
      </div>
      <div className="image-block-caption">{children}</div>
    </div>
  );
}

export default ImageBlock;
