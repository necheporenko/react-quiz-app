import React from "react";
import { Link } from "react-router-dom";
import { Row } from "antd";
import { ReactComponent as Logo } from "../../components/Icons/logo.svg";

const Home = () => (
  <Row className="home" type="flex" justify="center" align="middle">
    <div className="home__content">
      <Row
        className="home__content--logo"
        type="flex"
        justify="center"
        align="middle"
      >
        <Logo />
        <div>
          <h1>Turn!</h1>
          <h2>Check yourself!</h2>
        </div>
      </Row>

      <p className="home__content--description">
        Our main task is to provide everyone to tutoring classes with the help
        of technology.
      </p>

      <Link to="/test" className="home__content--btn">
        <button className="btn">TAKE A FREE TEST</button>
      </Link>
    </div>
  </Row>
);

export default Home;
