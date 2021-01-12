import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-items">
        <Link
          className="nav-item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="books"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
        >
          Books
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="music"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          Music
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="../pages/Projects.js"
          spy={true}
        >
          <Link to="../pages/Projects.js">Projects</Link>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
