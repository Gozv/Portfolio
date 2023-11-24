import React, { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".main-menu li");

    listItems.forEach((listItem) => {
      listItem.addEventListener("click", () => {
        listItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });
        listItem.classList.add("active");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      listItems.forEach((listItem) => {
        listItem.removeEventListener("click", () => {
          listItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
          });
          listItem.classList.add("active");
        });
      });
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link href="/">
            <i className="fa fa-home nav-icon"></i>
            <span className="nav-text">Home</span>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <i className="fa fa-pen nav-icon"></i>
            <span className="nav-text">Blog</span>
          </Link>
        </li>

        <li>
          <Link href="/github">
            <i className="fa-brands fa-github nav-icon"></i>
            <span className="nav-text">Github</span>
          </Link>
        </li>

        

        <li>
          <Link target="_blank" href="https://www.linkedin.com/in/gonzalo-vignolles/">
          <i className="fa-brands fa-linkedin nav-icon"></i>
            <span className="nav-text">Linkedin</span>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;