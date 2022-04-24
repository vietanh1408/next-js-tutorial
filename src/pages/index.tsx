import type { NextPage } from "next";
import AuthContextProvider from "src/utils/context";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <div className={styles.container}>HOME</div>
    </AuthContextProvider>
  );
};

export default Home;
