import styled from "@emotion/styled";

const Container = styled.p`
  ${({ small }) => (small ? "font-size: 0.8em" : ``)}
`;

export default function ({ children, small }) {
  return <Container small={small}>{children}</Container>;
}
