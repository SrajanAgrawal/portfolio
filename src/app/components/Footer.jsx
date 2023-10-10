import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-4 md:p-12  flex justify-between flex-col md:flex-row items-center">
        <div>
          <span className="text-yellow-500">{"</>"}</span>Srajan  <span className="text-yellow-500"> Agrawal</span>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
