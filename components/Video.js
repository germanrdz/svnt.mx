import styled from "@emotion/styled";
import { css } from "@emotion/react";

const squareStyle = css`
  width: 280px;
  height: 280px;

  margin: 5px;
`;

const Container = styled.div`
  ${({ square }) => (square ? "display: inline-block" : ``)};

  .video-container {
    overflow: hidden;
    position: relative;
    width: 100%;

    max-width: 1200px;

    ${({ square }) => (square ? squareStyle : ``)}
  }

  .video-container::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoId, square = false }) => (
  <Container square={square}>
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Container>
);

export default Video;
