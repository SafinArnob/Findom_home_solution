import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";


const Properties = () => {
  return (
    <>
      <Navbar />
      <Container className="properties-container mt-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>Manage Properties</h2>
            <p className="text-muted">
              Here you can manage your property listings. You can add new
              properties, edit existing ones, or view all your listings.
            </p>
            <Button
              as={Link}
              to="/upload-details"
              variant="primary"
              size="lg"
              className="mt-3"
            >
              Upload New Property
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Properties;