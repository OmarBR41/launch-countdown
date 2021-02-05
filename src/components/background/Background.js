import React from "react";
import "./Background.css";

import { ReactComponent as Stars } from "./bg-stars.svg";
import { ReactComponent as Hills } from "./pattern-hills.svg";

export default function Background() {
  return (
    <div className="background">
      <Stars />
      <Hills />
    </div>
  );
}
