import type { NextPage } from "next";
import styled from "styled-components";

import SurveyForm from "@components/SurveyForm";

const Home: NextPage = () => {
  return (
    <StyledHome>
      <SurveyForm />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.dark.shade000};
`;
