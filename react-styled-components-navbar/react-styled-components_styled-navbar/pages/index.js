import { styled } from "styled-components";

export default function HomePage() {
  // h1
  const StyledHeadline = styled.h1`
    font-size: 3rem;
  `;

  // p
  const StyledParagraph = styled.p`
    font-weight: 100;
    line-height: 1.4;
  `;
  return (
    <div>
      <StyledHeadline>Hello from Next.js</StyledHeadline>
      <StyledParagraph>
        Used by some of the largest companies, Next.js enables you to create
        full-stack Web applications by extending the latest React features, and
        integrating powerful Rust-based JavaScript tooling for the fastest
        builds.
      </StyledParagraph>
    </div>
  );
}
