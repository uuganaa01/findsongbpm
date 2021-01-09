import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import Layout from "../components/Layout";
import InputSong from "../components/Main/Input";
import axios from "axios";
import { useState } from "react";
import TrackList from "../components/Main/TrackList";
import { useRouter } from "next/dist/client/router";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import Logo from "../components/Topbar/Logo";

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

// };

const Home = () =>
  // props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const onSearchTrack = async (query) => {
      setLoading(true);
      var replaced = query.replace(/ /g, "-");
      await router.push({
        pathname: "/search/[id]",
        query: { id: replaced },
      });
    };

    return (
      <Layout title={`findsongbpm.com - Find the BPM & Key for any song`}>
        <div className="uk-margin-xlarge-top">
          <Logo />
          <InputSong
            onSearchTrack={onSearchTrack}
            placeHolder="Type a song, get a bpm"
            loading={loading}
          />
        </div>
        {/* <SpeechProvider appId="99c16bb5-3f15-439a-aeda-64bc8cf3b1a6" language="en-US">
          <SpeechlyApp />
        </SpeechProvider> */}
        <nav className="">
          <div className="uk-navbar uk-container uk-container-small uk-margin">
            <div className="uk-navbar-left">© 2021 findsongbpm.com</div>
            <div className="uk-navbar-right">
              Powered by the Spotify Web API
            </div>
          </div>
        </nav>
      </Layout>
    );
  };

export default Home;

function SpeechlyApp() {
  const { speechState, segment, toggleRecording } = useSpeechContext();

  return (
    <div>
      <div className="status">{speechState}</div>
      {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
      <div className="mic-button">
        <button onClick={toggleRecording}>Record</button>
      </div>
    </div>
  );
}
