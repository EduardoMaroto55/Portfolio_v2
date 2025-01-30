import React from "react";
import {useState, useEffect} from 'react'


const Footer = () => {
   
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="dark:bg-primary-dark flex flex-wrap gap-10 mx-auto p-5 justify-center bg-slate-600 items-center h-80 md:gap-20 lg:gap-60 lg:h-72 ">
      <div className="h-28 ">
        <h3 className="text-[30px] ">Eduardo</h3>
        <p>© <span>{year}</span></p>
      </div>
      <div className="h-28 ">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <p>edu5.maroto@hotmail.com</p>
          </li>
          <li>
            <p>(+506) 85776408</p>
          </li>
        </ul>
      </div>
      <div className="h-28 ">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
