const renderTitleWithHighlight = (title: string, matches: any[]) => {
  let highlightedTitle = [];
  let lastIndex = 0;
  matches?.forEach((match) => {
    highlightedTitle.push(title.substring(lastIndex, match.offset));
    highlightedTitle.push(
      <span className="highlight">
        {title.substring(match.offset, match.offset + match.length)}
      </span>
    );
    lastIndex = match.offset + match.length;
  });
  highlightedTitle.push(title.substring(lastIndex));
  return <>{highlightedTitle}</>;
};

export default renderTitleWithHighlight;
