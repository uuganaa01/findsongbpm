import { GetServerSideProps, NextPage } from "next";
import { Fragment, ReactNode, useState } from "react";
import Layout from "../../components/Layout";
import InputSong from "../../components/Main/Input";
import TrackList from "../../components/Main/TrackList";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { searchTrack } from "../../lib/spotify";
import qs from "querystring";
import Head from "next/head";

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
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("" + router.query.id);
  const onSearchTrack = async (query) => {
    setLoading(true);
    await router.push({
      pathname: "/search/[id]",
      query: { id: query },
    });
    setSearchText(query);
    setLoading(false);
  };

  return (
    <Fragment>
      <Head>
        <meta
          property="og:title"
          content={`  ${tracks[0].name} by ${tracks[0].artist} - findsongbpm`}
        />
        <meta
          property="og:description"
          content={`find the bpm of any song`}
        />
        <meta property="og:image" content={tracks[0].albumArtUrl} />
        <meta
          property="og:url"
          content={`https://findsongbpm.com/search/${tracks[0].name}}`}
        />
      </Head>
      <Layout title={`findsongbpm.com-bpm for "${searchText}"`}>
        <InputSong
          onSearchTrack={onSearchTrack}
          placeHolder="Type a song, get a bpm"
          loading={loading}
        />
        <TrackList tracks={tracks} searchText={searchText} />
      </Layout>
    </Fragment>
  );
};

export default SearchResult;
