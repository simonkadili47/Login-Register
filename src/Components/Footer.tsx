import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" py-1 mt-24">
      <div className="container mx-auto flex flex-col justify-center items-center"> 
        <div className="text-center"> 
          <p className="text-lg text-zinc-600">
            &copy; {new Date().getFullYear()} Zanzibar Condominium Board
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
