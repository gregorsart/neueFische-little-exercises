import "./Tag.css";

export default function Tag({ tag, classValue }) {
  return <li className={classValue}>{tag}</li>;
}
