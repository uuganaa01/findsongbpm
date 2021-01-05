import React from "react";

const tagStyle = {
  display: "inline-block",
  //backgroundColor: "withe",
  fontSize: "0.9em",
  margin: "5px",
  border: "1px solid lightblue",
  padding: "2px",
  cursor: "pointer",
};

interface Track {
  album: string;
  albumArtUrl: string;
  artist: string;
  id: string;
  name: string;
  duration: string;
  previewUrl: string;
  releaseYear: string;
}

type Props = {
  value: Track;
  index: number;
};

const Track = ({ value, index }: Props) => {
  const track = (
    <React.Fragment>
      <div className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-margin uk-child-width-1-4@m uk-grid">
        <div className="uk-card-media-left uk-cover-container">
          <img src={value.albumArtUrl} alt="" />
        </div>
        <div className="uk-width-expand@m">
          <div
            className="uk-card-body"
            style={{ paddingTop: 15, paddingLeft: 30, paddingBottom: 0 }}
          >
            <h3 className="uk-margin-remove">
              {value.artist} - {value.name}
            </h3>
            <h5 className="uk-margin-small">{value.album}</h5>
            <h4 className="uk-margin-remove-top">{value.duration}</h4>
          </div>
        </div>
      </div>
      {index == 0 && <hr className="uk-divider-icon" style={{ color: "#fff" }}></hr>}
    </React.Fragment>
  );
  return <React.Fragment>{track}</React.Fragment>;
};

export default Track;
