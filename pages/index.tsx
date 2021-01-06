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
    const [loading, setLoading] = useState(false);
    const onSearchTrack = async (query) => {
      setLoading(true);
      await router.push({
        pathname: "/search/[id]",
        query: { id: query },
      });
    };

    return (
      <Layout title={`findsongbpm.com - Find the BPM & Key for any song`}>
        <InputSong
          onSearchTrack={onSearchTrack}
          placeHolder="Type a song, get a bpm"
          loading={loading}
        />
      </Layout>
    );
  };

export default Home;
