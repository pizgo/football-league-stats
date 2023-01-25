import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";

const ButtonBackToSchedules: React.FC = () => {
  return (
    <Link to="/">
      <Button
        variant="light"
        size="lg"
        className="position-fixed px-5 fw-bold"
        style={{ backgroundColor: "#D9D9D6" }}>
        <BiArrowBack />
      </Button>
    </Link>
  );
};

export default ButtonBackToSchedules;
