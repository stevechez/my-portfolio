import React from "react";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
} from "../styles/indexStyle.js";
import StevePic from "../assets/images/steve-photo.jpeg";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>steve chez</UserTitle>
        <UserDescription>
          <div>
            <p>content for my site</p>
            <DownloadButton href="" download title="Resume">
              Download Resume
            </DownloadButton>
          </div>
          <img src={StevePic} alt="steve photo" />
        </UserDescription>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
