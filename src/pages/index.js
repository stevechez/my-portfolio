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
            <p>
              10+ years of development experience. Well-versed and comfortable
              in all stages of the software developement life-cycle. From
              concept and design, development, to QA and tuning. Strong focus on
              the front-end, comfortable on the back-end, and have had many
              successful implementations, large and small.
              <br />
              Specialties: JavaScript, React, Angular2, Node, Bootstrap, HTML,
              CSS, jQuery, Mongodb, MySQL, PHP, Wordpress, and React Native{" "}
            </p>
            <DownloadButton
              href="https://github.com/stevechez/my-portfolio/blob/master/src/assets/steve--resume.pdf"
              download
              title="Steve Resume"
            >
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
