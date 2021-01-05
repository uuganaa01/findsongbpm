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
    <nav className="uk-navbar-container uk-margin" uk-navbar>
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <div className="uk-search uk-search-navbar">
            <span uk-search-icon="" className="uk-icon uk-search-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="search-navbar"
              >
                <circle
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.1"
                  cx="10.5"
                  cy="10.5"
                  r="9.5"
                ></circle>
                <line
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.1"
                  x1="23"
                  y1="23"
                  x2="17"
                  y2="17"
                ></line>
              </svg>
            </span>
            <input
              className="uk-input uk-search-input"
              type="search"
              onKeyUp={(e) => onKeyUp(e)}
              placeholder={placeHolder}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InputSong;
