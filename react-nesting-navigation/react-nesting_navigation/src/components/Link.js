export default function Header({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
