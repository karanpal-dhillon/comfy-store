import { NavLink } from "react-router-dom";

const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Products", url: "/products" },
  { id: 4, text: "Cart", url: "/cart" },
  { id: 5, text: "Checkout", url: "/checkout" },
  { id: 6, text: "Orders", url: "/orders" },
];
const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
