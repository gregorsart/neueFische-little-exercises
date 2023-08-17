import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Article />
      <HelloWorldArticle />
    </>
  );
}

function Article() {
  return (
    <article>
      <h2 className="aricle__title">I am a title</h2>

      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" />

      <a href="#" className="article__link">
        Go to Wikipedia
      </a>
    </article>
  );
}

function HelloWorldArticle() {
  const name = "newbie";
  return (
    <article>
      <h1>Hello {name} </h1>
      <p>I am a paragraph</p>
      <p>I am another paragraph</p>
    </article>
  );
}
