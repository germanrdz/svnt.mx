import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 3em;
  margin-bottom: 1em;
`;

const SpotifyFollow = () => (
  <Container>
    <iframe
      src="https://open.spotify.com/follow/1/?uri=spotify:artist:0kyOA8rutuOL3DwaveHsnG&size=detail&theme=light&show-count=0"
      width="300"
      height="56"
      scrolling="no"
      frameBorder="0"
      style={{ border: "none", overflow: "hidden" }}
      allowtransparency="true"
    ></iframe>
  </Container>
);

export default SpotifyFollow;
