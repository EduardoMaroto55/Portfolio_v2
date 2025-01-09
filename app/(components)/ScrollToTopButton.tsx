import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop smooth component={<FontAwesomeIcon icon={faArrowUp} className="text-black"/>}/>
    </div>
  );
};

export default ScrollToTopButton;
