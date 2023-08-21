import Image from "./Image";
import avatar from "../img/avatar.jpg";

export default function Avatar() {
  <button
    type="button"
    onClick={() => console.log("I could toggle a profile!")}
    aria-label="toggle profile"
  >
    <Image src={avatar} alt="avatar" />
  </button>;
}
