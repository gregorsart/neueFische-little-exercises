import { useEffect, useState } from "react";

export default function PokemonList() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (data.length === 0) return null;

  return (
    <main>
      <button
        onClick={() => {
          setUrl(data.previous);
        }}
        type="button"
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setUrl(data.next);
        }}
        type="button"
        // hidden={offset <= 0}
      >
        Next Page
      </button>
      <ul>
        {data.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
