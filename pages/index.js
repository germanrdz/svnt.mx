import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import SpotifyFollow from "../components/SpotifyFollow";
import P from "../components/styled/P";
import Video from "../components/Video";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4em;
`;

const Home = () => (
  <Container>
    <Fade bottom>
      <Section>
        <h1>SVNT</h1>
        <P>
          SVNT (Savant) es una banda indie mexicana que existe en la imaginación
          de un niño con sindrome Savant.
        </P>
        <SpotifyFollow />

        <P>
          <a href="https://open.spotify.com/artist/0kyOA8rutuOL3DwaveHsnG?si=UxzKAelZTgGsd7ho2Af80w">
            Spotify
          </a>
          ,<a href="https://www.instagram.com/svntmx/">Instagram</a>,
          <a href="https://www.facebook.com/SVNTMX">Facebook</a>,
          <a href="https://www.youtube.com/c/SVNTMX">Youtube</a>
        </P>
      </Section>
    </Fade>

    <Fade bottom>
      <Section>
        <h2>Último lanzamiento</h2>
        <Video videoId="MYdFA6MF2Qk" />
      </Section>
    </Fade>

    <Fade bottom>
      <Section>
        <h2>Videos</h2>
        <Video videoId="Y-L-_g_rqog" />
      </Section>
    </Fade>

    <Fade bottom>
      <Section>
        <h2>
          Energía Oscura <small>Sencillos 2021</small>
        </h2>
        <Video square videoId="MYdFA6MF2Qk" /> {/* Energía Oscura */}
        <Video square videoId="xloitqXKZnI" /> {/* Desfrag */}
      </Section>
    </Fade>

    <Fade bottom>
      <Section>
        <h2>
          Cosmogonía <small>Disco Completo 2017</small>
        </h2>
        <Video square videoId="xkvzACdyhy0" />
      </Section>
    </Fade>

    <Fade bottom>
      <Section>
        <h2>Contacto</h2>
        <P>
          Para contactar a la banda <a href="/contacto">da click aquí.</a>
        </P>
      </Section>
    </Fade>
  </Container>
);

export default Home;
