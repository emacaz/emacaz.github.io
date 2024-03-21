import React, { forwardRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/emacastillozam/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/emacastillozam/"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/emacastillozam/"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright &copy; {currentYear} All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});
