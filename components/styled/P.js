import styled from "@emotion/styled";

const Container = styled.div`
  ${({ small }) => (small ? "font-size: 0.8em" : ``)}
`;

export default function P({ children, small }) {
  return <Container small={small}>{children}</Container>;
}
