import React from "react";
import { Link } from "react-router-dom";
import { WrapHeader } from "./Header.style";

const Header = () => {
  return (
    <WrapHeader>
      <Link to="/" style={{ textDecoration: "none",color:"white" }}>
        Home
      </Link>
    </WrapHeader>
  );
};

export default Header;
