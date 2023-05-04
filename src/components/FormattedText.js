import "../styles/Article.css";

function FormattedText({ intentions, children }) {
  // This method is a little hacky and would see improvement with more development time.
  // It relies on the assumption that the formatted sections don't overlap

  var text = children;
  var padding = 0;
  intentions
    .sort((a, b) => a.index - b.index)
    .forEach((i) => {
      let format = null;
      switch (i.kind) {
        case "emphasized":
          format = "i";
          break;
        case "important":
          format = "b";
          break;
        default:
      }

      if (!format) {
        return;
      }

      text =
        text.slice(0, i.index + padding) +
        "<" +
        format +
        ">" +
        text.slice(i.index + padding, i.index + i.length + padding) +
        "</" +
        format +
        ">" +
        text.slice(i.index + i.length + padding);
      padding += 5 + format.length * 2;
    });

  return (
    <div
      className="FormattedText"
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
}

export default FormattedText;
