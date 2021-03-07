import styled from "@emotion/styled";

import P from "../components/styled/P";
import Video from "../components/Video";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Home = () => (
  <Container>
    <h1>SVNT</h1>
    <P>
      SVNT (Savant) es una banda indie mexicana que existe en la imaginación de
      un niño con sindrome Savant.
    </P>
    <P>
      <iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:artist:0kyOA8rutuOL3DwaveHsnG&size=detail&theme=dark&show-count=0"
        width="300"
        height="56"
        scrolling="no"
        frameborder="0"
        style={{ border: "none", overflow: "hidden" }}
        allowtransparency="true"
      ></iframe>
    </P>

    <P>
      <a href="https://open.spotify.com/artist/0kyOA8rutuOL3DwaveHsnG?si=UxzKAelZTgGsd7ho2Af80w">
        Spotify
      </a>
      ,<a href="https://www.instagram.com/svntmx/">Instagram</a>,
      <a href="https://www.facebook.com/SVNTMX">Facebook</a>,
      <a href="https://www.youtube.com/channel/UCeOSUURloyKLh7-GBetT4SA">
        Youtube
      </a>
    </P>

    <h2>Último lanzamiento</h2>
    <Video videoId="xloitqXKZnI" />

    <h2>Videos</h2>
    <Video videoId="Y-L-_g_rqog" />

    <h2>
      Energía Oscura <small>(2021)</small>
    </h2>
    <Video square videoId="_v9LA9EdBwE" />
    <Video square videoId="xloitqXKZnI" />

    <h2>
      Cosmogonia <small>(2017)</small>
    </h2>
    <Video square videoId="xkvzACdyhy0" />

    <h2>Contacto</h2>
    <P>
      Te gustaría contactar a la banda? escribenos a{" "}
      <a href="mailto:svntmx@gmail.com">svntmx@gmail.com</a>
    </P>
  </Container>
);

export default Home;
