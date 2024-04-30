import React from "react";
import { StringWithHighlightProps } from "../../Interfaces/hotelsAndPlaces.interface";

const StringWithHighlight = ({ string, matches }: StringWithHighlightProps) => {
  let elements: JSX.Element[] = [];
  let lastIndex = 0;

  matches.forEach((match) => {
    // Non-highlighted text before the current match
    if (lastIndex < match.offset) {
      elements.push(
        <React.Fragment key={`${string}_${lastIndex}_before`}>
          {string.substring(lastIndex, match.offset)}
        </React.Fragment>
      );
    }

    // Highlighted text
    elements.push(
      <span className="highlight" key={`${string}_${match.offset}`}>
        {string.substring(match.offset, match.offset + match.length)}
      </span>
    );

    lastIndex = match.offset + match.length;
  });

  // Remaining non-highlighted text after the last match
  if (lastIndex < string.length) {
    elements.push(
      <React.Fragment key={`${string}_${lastIndex}_after`}>
        {string.substring(lastIndex)}
      </React.Fragment>
    );
  }

  return <>{elements}</>;
};

export default StringWithHighlight;
