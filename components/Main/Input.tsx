import React from "react";
// import TagList from "./TagList";

type Props = {
  onSearchTrack: any;
  placeHolder: string;
};

const InputSong = ({ onSearchTrack, placeHolder }: Props) => {
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      let input = e.target.value;
      if (input.length === 0 || input[0] === "") return;
      onSearchTrack(input);
      e.target.value = "";
    }
  };

  return (
    <div className="uk-search uk-search-large">
      <span className="uk-icon uk-search-icon">
        <svg
          width="40"
          height="50"
          viewBox="0 5 40 40"
          xmlns="http://www.w3.org/2000/svg"
          data-svg="search-large"
        >
          <circle
            fill="none"
            stroke="#000"
            strokeWidth="1.8"
            cx="17.5"
            cy="17.5"
            r="16.5"
          ></circle>
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.8"
            x1="38"
            y1="39"
            x2="29"
            y2="30"
          ></line>
        </svg>
      </span>
      <input
        className="uk-search-input uk-margin-bottom"
        onKeyUp={(e) => onKeyUp(e)}
        type="search"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputSong;
