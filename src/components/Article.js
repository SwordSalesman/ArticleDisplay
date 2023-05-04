import "../styles/Article.css";
import Header from "./Header";
import Body from "./Body";

function Article({ data }) {
  return (
    <div className="Article">
      <Header
        headline={data.headline}
        source={data.source}
        byline={data.byline}
        date={data.publicationDate}
      />
      <Body blocks={data.blocks} />
    </div>
  );
}

export default Article;
