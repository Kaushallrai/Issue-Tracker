import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/issues"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
