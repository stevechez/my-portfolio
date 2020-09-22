import React from "react";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
} from "../styles/indexStyle.js";
import StevePic from "../assets/images/steve-photo2.jpeg";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>Steve Maciaszek</UserTitle>
        <UserDescription>
          <div>
            <p>Well-rounded IT professional with experience as both a team and individual contributor on web application development projects. </p>
            <p>Excellent problem solver using technology to address business challenges. Easy to work with, team player, and poses solid communication skills.</p>
            <p>React // Javascript // Node // Wordpress // React Native</p>
            <DownloadButton href="" download title="Resume">
              Download Resume
            </DownloadButton>
          </div>
          <img src={StevePic} alt="Steve's Profiile Photo" />
        </UserDescription>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
