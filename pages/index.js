import styled from "@emotion/styled";
import Image from "next/image";

import SpotifyFollow from "../components/SpotifyFollow";
import P from "../components/styled/P";
import Video from "../components/Video";
import TourBox from "../components/TourBox";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4em;
`;

const Center = styled.div`
  text-align: center;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 2em;
`;

const Home = () => (
  <Container>
    <Section>
      <Center
        style={{
          marginBottom: "32px",
        }}
      >
        <Image
          src="/symbol-white.png"
          alt="SVNT"
          title="SVNT"
          width={100}
          height={100}
        />
      </Center>

      <P>
        SVNT (Savant) es una banda Indie mexicana que existe en la imaginación
        de un niño con sindrome Savant.
      </P>
      <P>
        Con sus visuales oscuros, un arte surreal y con un show en vivo teatral,
        SVNT ha logrado combinar sonidos Soft Dark, Indie Pop y Synth Wave para
        crear un universo imaginario que cuenta la historia de un niño llamado
        Dante.
      </P>

      <P>
        <h2>Redes</h2>
        <a href="https://open.spotify.com/artist/0kyOA8rutuOL3DwaveHsnG?si=UxzKAelZTgGsd7ho2Af80w">
          Spotify
        </a>
        ,<a href="https://www.instagram.com/svntmx/">Instagram</a>,
        <a href="https://www.facebook.com/SVNTMX">Facebook</a>,
        <a href="https://www.youtube.com/c/SVNTMX">Youtube</a>
      </P>
    </Section>

    <Section>
      <TourBox />
    </Section>

    <Section>
      <h2>Último lanzamiento</h2>
      <Video videoId="QcpKqa5dAsk" />
    </Section>

    <Section>
      <h2>Videos</h2>
      <Video videoId="GArHxU5PL3o" />
      <Video videoId="Y-L-_g_rqog" />
    </Section>

    <Section>
      <h2>
        Energía Oscura <small>2021</small>
      </h2>
      <Video square videoId="QcpKqa5dAsk" /> {/* Madre */}
      <Video square videoId="hvU4g0-9pI4" /> {/* Duele */}
      <Video square videoId="S9RpodZGNT8" /> {/* Será por eso */}
      <Video square videoId="MYdFA6MF2Qk" /> {/* Energía Oscura */}
      <Video square videoId="xloitqXKZnI" /> {/* Desfrag */}
    </Section>

    <Section>
      <h2>
        Cosmogonía <small>2018</small>
      </h2>
      <Video square videoId="xkvzACdyhy0" />
    </Section>

    <Section>
      <h2>Contacto</h2>
      <P>
        Para contactar a la banda <a href="/contacto">da click aquí.</a>
      </P>
    </Section>
  </Container>
);

export default Home;
