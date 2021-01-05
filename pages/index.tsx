import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import Layout from "../components/Layout";
import InputSong from "../components/Main/Input";
import axios from "axios";
import { useState } from "react";
import TrackList from "../components/Main/TrackList";
import { useRouter } from "next/dist/client/router";

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

// };

const Home = () =>
  // props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    const router = useRouter();
    const [tracks, setTracks] = useState([]);

    const onSearchTrack = async (query) => {
      router.push({
        pathname: '/search/[id]',
        query: {id: query}
      })
    };

    return (
      <Layout title={"HOME PAGE"}>
        <InputSong
          onSearchTrack={onSearchTrack}
          placeHolder="Type a song, get a bpm"
        />
        <TrackList tracks={tracks} />

        {/* <TagList tags={defaultTags} onDeleteTag={_onDeleteTag} /> */}
      </Layout>
    );
  };

export default Home;
