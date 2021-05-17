import React from "react";
import { Image } from "react-bootstrap";

const Logo = () => {
  return (
    <div>
      <Image src="/assets/logo.svg" alt="logo" className="mr-2" />
      Space Trello
    </div>
  );
};

export default Logo;
