import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, to, className, onclick }) {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  if (onclick)
    return (
      <button onClick={onclick} className={className}>
        {children}
      </button>
    );

  return <button className={className}>{children}</button>;
}
