import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <nav className={styles.topNavbar}>
      <Container fluid>
        <Row>
          <Col md={8} sm={6}>
            <ul className={styles.ulLeftNav}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <ul className={styles.ulRightNav}>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Sign Up</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;
