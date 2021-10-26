import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

const styles = css`
  /* @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"); */
  @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap");

  html,
  body {
    padding: 1rem;
    margin: 0;
    background: #fff;
    min-height: 100%;

    /* font-family: "DotGothic16", sans-serif; */
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-size: 24px;
    color: #000;

    @media only screen and (max-device-width: 480px) {
      font-size: 16px;
    }
  }

  a {
    color: #000;
    /* background-color: #fe019a; */
    margin: 0.2em;

    text-decoration: none;
    border-bottom: 2px dashed #fe019a;

    &:hover {
      border-bottom: 2px solid;
    }
  }

  h2 small {
    color: #fe019a;
    font-size: 0.6em;
  }
`;

export const globalStyles = <Global styles={styles} />;
