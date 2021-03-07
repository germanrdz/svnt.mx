import styled from "@emotion/styled";

const Container = styled.div`
  .video-container {
    overflow: hidden;
    position: relative;
    width: 100%;

    max-width: 900px;
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

const Video = ({ videoId }) => (
  <Container>
    <div class="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Container>
);

export default Video;
