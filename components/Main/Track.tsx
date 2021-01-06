import React, { useState } from "react";

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
  tempo: number;
  key: number;
  previewUrl: string;
  releaseYear: string;
}

type Props = {
  value: Track;
  index: number;
};

const Track = ({ value, index }: Props) => {
  const [playing, setPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const track = (
    <React.Fragment>
      <div
        className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-margin uk-child-width-1-4@m uk-grid"
        // onMouseLeave={pausePreview}
      >
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
            <h4 className="uk-margin-small-top">
              {value.duration} {value.tempo} Bpm {value.key}
            </h4>
          </div>
        </div>
      </div>
      {index == 0 && (
        <hr className="uk-divider-icon" style={{ color: "#fff" }}></hr>
      )}
    </React.Fragment>
  );
  return <React.Fragment>{track}</React.Fragment>;
};

export default Track;
