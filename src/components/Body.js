import "../styles/Article.css";

import ImageBlock from "./ImageBlock";
import QuoteBlock from "./QuoteBlock";
import FormattedText from "./FormattedText";

function Body({ blocks }) {
  const renderedBlocks = blocks.map((b) => {
    switch (b.kind) {
      case "text":
        return (
          <p className="text-block">
            <FormattedText intentions={b.intentions}>{b.text}</FormattedText>
          </p>
        );
      case "image":
        return <ImageBlock url={b.url}>{b.captionText}</ImageBlock>;
      case "pull-quote":
        return <QuoteBlock attribution={b.attribution}>{b.text}</QuoteBlock>;
      default:
        return null;
    }
  });

  return <div className="Body">{renderedBlocks}</div>;
}

export default Body;
