import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeJumbotron() {
  return (
    <Jumbotron fluid className="home-jumbotron">
      <Container>
        <Row>
          <Col xs lg="5" md="7">
            <div className="heading-card paper-bg">
              <div className="heading-content">
                <h1 className="heading-h1">
                  Add your recipe to share it with the world or search through
                  the existing ones to get inspired
                </h1>
                {/* <h3 className="heading-h2">Loggin to add a recipie</h3> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeJumbotron;
