import { GetServerSideProps, NextPage } from "next";
import { ReactNode } from "react";
import Layout from "../../components/Layout";
import InputSong from "../../components/Main/Input";
import TrackList from "../../components/Main/TrackList";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { searchTrack } from "../../lib/spotify";
import qs from "querystring";

// interface Props {
//   query: string;
//   children: ReactNode;
// }

interface Track {
  id: string;
  name: string;
  releaseYear: string;
  artist: string;
  album: string;
  albumArtUrl: string;
  duration: string;
  previewUrl?: string | null;
  createdAt?: Date | string;
}

type Props = {
  tracks: Track[];
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: { tracks: Track[] };
}> => {
  const searchTerm = "" + context.query.id;
  const tracks = await searchTrack(searchTerm);

  return { props: { tracks } };
};

const SearchResult = ({ tracks }: Props) => {
  const router = useRouter();
  const onSearchTrack = async (query) => {
    router.push({
      pathname: "/search/[id]",
      query: { id: query },
    });
  };

  return (
    <Layout title={"HOME PAGE"}>
      <InputSong
        onSearchTrack={onSearchTrack}
        placeHolder="Type a song, get a bpm"
      />
      <TrackList tracks={tracks} />
    </Layout>
  );
};

export default SearchResult;
