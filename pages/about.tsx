import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";
// import Header from "@/components/header";

const Header = dynamic(() => import("@/components/header"), { ssr: true });

const About = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <Header />
      <h1>About</h1>
    </div>
  );
};

export default About;

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
