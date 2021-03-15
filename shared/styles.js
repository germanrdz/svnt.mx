import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

  html,
  body {
    padding: 1rem;
    margin: 0;
    background: black;
    min-height: 100%;

    font-family: "DotGothic16", sans-serif;
    font-size: 24px;
    color: white;

    @media only screen and (max-device-width: 480px) {
      font-size: 16px;
    }
  }

  a {
    color: #fe019a;
    background-color: black;
    padding: 0.1em;

    text-decoration: none;
    border-bottom: 2px dashed;

    &:hover {
      border-bottom: 2px solid;
    }
  }

  h2 small {
    color: darkmagenta;
    font-size: 0.6em;
  }
`;

export const globalStyles = <Global styles={styles} />;
