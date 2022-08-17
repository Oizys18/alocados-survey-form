import type { NextPage } from "next";
import { useEffect } from "react";
import SurveyForm from "@components/SurveyForm";

const Home: NextPage = () => {
  useEffect(() => {
    console.log("App");
  });
  return <SurveyForm />;
};

export default Home;
