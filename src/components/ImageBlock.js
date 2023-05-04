import "../styles/Article.css";

function ImageBlock({ url, children }) {
  return (
    <div className="ImageBlock">
      <img src={url}></img>
      <div className="image-block-caption">{children}</div>
    </div>
  );
}

export default ImageBlock;
