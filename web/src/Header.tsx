import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <div>{props.title}</div>
    </header>
  );
};

export default Header;
