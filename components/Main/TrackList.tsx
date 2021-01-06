import React from "react";
import Track from "./Track";

type Props = {
  tracks: any[];
  searchText: string;
};

const TrackList = ({ tracks, searchText }: Props) => {
  let tracksUI = tracks.map((track, index) => {
    return <Track key={`${index}+${track}`} index={index} value={track} />;
  });
  return (
    <div>
      {searchText && <h3>Result found for <b>"{searchText}"</b></h3>}
      <hr/>
      {tracksUI}
    </div>
  );
};

export default TrackList;
