import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="w-100 bg-light text-center my-2">
        <p>
          All right reserved © {year}{" "}
          <a
            className="footerlink"
            target="_blank"
            href="https://instagram.com/its_shah_9?utm_medium=copy_link"
          >
            Shahbaz
          </a>{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
