import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

export default function DetailsPage() {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) return <div>Is Loading</div>;

  if (error) {
    return <div>Error</div>;
  }

  const { name, description, price } = data;

  return (
    <>
      <h1>{name}</h1>
      <h4>
        <StyledSpan>Preis: </StyledSpan>€ {price}
      </h4>
      <p>{description}</p>
    </>
  );
}

const StyledSpan = styled.span`
  font-weight: 300;
`;
