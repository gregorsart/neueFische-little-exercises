import Link from "next/link";
import { useRouter } from "next/router";
import GlobalStyle from "../styles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Nav>
        <StyledList>
          <li>
            <StyledLink $primary href="/">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </Nav>
      <Component {...pageProps} />
    </>
  );
}
// Styled Elements
const Nav = styled.nav`
  border-bottom: solid 1px var(--main-contrast-color);
  padding: 1rem;
`;

const StyledList = styled.ul`
  all: unset;
  justify-content: center;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

// Styled Components

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--main-text-color);
  padding-bottom: 1rem;
  font-weight: 100;
  &:hover {
    border-bottom: 4px solid var(--main-contrast-color);
    color: var(--main-contrast-color);
  }
`;
