import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#212430] to-[#17171a]">
      <Header />
      <div className="mt-10" />
      <Trending />
      <div className="mt-20" />
    </div>
  );
};

export default Home;
