const navigates = [
  { href: "/add-user", name: "Enter User" },
  { href: "/", name: "Users" },
];

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="nav">
        {navigates.map((nav) => (
          <li key={nav.name} className="nav-item">
            <a href={nav.href}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
