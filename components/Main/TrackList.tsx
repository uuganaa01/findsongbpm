import React from "react";
import Track from "./Track";

type Props = {
  tracks: any[];
};

const TrackList = ({ tracks }: Props) => {
  let tracksUI = tracks.map((track, index) => {
    return <Track key={`${index}+${track}`} index={index} value={track} />;
  });
  return <div>{tracksUI}</div>;
};

export default TrackList;
