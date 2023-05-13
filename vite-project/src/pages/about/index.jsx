import { Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <hr />
      <Link to="/">
        <Button type="button" colorScheme="blue">
          Home Page
        </Button>
      </Link>
    </Container>
  );
};

export default About;
