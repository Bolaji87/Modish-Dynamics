import React from "react";

export default function Link({ children, to, className }) {
  return <Link to={to}>{children}</Link>;
}
