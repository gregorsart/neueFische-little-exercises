import { useRouter } from "next/router";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
const URL = "https://swapi.dev/api/people";

export default function Character() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error, isLoading } = useSWR(`${URL}/${id}`);

  if (isLoading) {
    return <h3>loading ⏳</h3>;
  }
  if (error) {
    return <h3>error 🍃</h3>;
  }

  // destructure
  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
