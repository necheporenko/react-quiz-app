import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconHome } from "../components/Icons/tabs/tab-01.svg";
import { ReactComponent as IconTest } from "../components/Icons/tabs/tab-02.svg";
import { ReactComponent as IconInfo } from "../components/Icons/tabs/tab-03.svg";
import { ReactComponent as IconAbout } from "../components/Icons/tabs/tab-04.svg";

const Navigation = () => (
  <div className="navigation__app">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          <IconHome className="tab-home"/>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/test" activeClassName="active">
          <IconTest className="tab-test" />
          <span>Test</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/info" activeClassName="active">
          <IconInfo className="tab-info" />
          <span>Info</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          <IconAbout className="tab-about" />
          <span>About</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
