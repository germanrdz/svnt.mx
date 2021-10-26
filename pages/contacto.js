import styled from "@emotion/styled";
import P from "../components/styled/P";

const Container = styled.div`
  .freebirdFormviewerViewNavigationPercentComplete {
    color: white !important;
  }

  iframe {
    margin-top: 1em;
  }
`;

const Contacto = () => (
  <Container>
    <P>
      <a href="/">← volver</a>
    </P>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSezWlrnSG3G-COJLn_c3sYzi8kW6u57b6fE3o4s-9d7tonWXQ/viewform?embedded=true"
      width="100%"
      height="800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Cargando…
    </iframe>
  </Container>
);

export default Contacto;
