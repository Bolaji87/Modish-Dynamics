import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex items-center justify-center bg-slate-100 px-4 py-5">
      <div>
        <p>Modish D &copy; {today.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
