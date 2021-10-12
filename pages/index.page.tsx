import type { NextPage } from "next";
import { Header } from "./Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>ホームページ</main>
    </div>
  );
};

export default Home;
