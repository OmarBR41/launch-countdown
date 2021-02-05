import React from "react";
import "./Footer.css";

import { ReactComponent as FacebookIcon } from "./icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "./icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "./icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
        <PinterestIcon />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
    </footer>
  );
}
