import React, { useState } from "react";
// import TagList from "./TagList";

type Props = {
  onSearchTrack: any;
  placeHolder: string;
  loading: boolean
};

const InputSong = ({ onSearchTrack, loading, placeHolder }: Props) => {
  console.log(loading, "loading");
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      let input = e.target.value;
      if (input.length === 0 || input[0] === "") return;
      onSearchTrack(input);
      e.target.value = "";
    }
  };

  return (
    <nav className="uk-navbar uk-navbar-container uk-margin">
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <div className="uk-search uk-search-navbar">
            <span uk-search-icon="" className="uk-icon uk-search-icon">
              {loading && (
                <div uk-spinner="" className="uk-icon uk-spinner">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="spinner"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      cx="15"
                      cy="15"
                      r="14"
                    ></circle>
                  </svg>
                </div>
              )}
              {!loading && (
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
              )}
            </span>
            <input
              className="uk-input uk-search-input uk-margin-small-left"
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
