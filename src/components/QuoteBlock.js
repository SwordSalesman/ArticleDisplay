import "../styles/Article.css";

function QuoteBlock({ attribution, children }) {
  return (
    <div className="QuoteBlock">
      <i className="quote-body">{children}</i>
      {attribution && <div className="quote-attribution">{attribution}</div>}
    </div>
  );
}

export default QuoteBlock;
