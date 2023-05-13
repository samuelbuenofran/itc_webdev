/*
The following code
*/

import { Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/Users";

const Home = () => {
  const { users, error, isLoading } = useUsers();
  return (
    <Container>
      <h1>Home Page</h1>
      <hr />
      <Link to="/about">
        <Button type="button" colorScheme="blue">
          About
        </Button>
      </Link>
      <hr />
      {isLoading && <p>Loading...</p>}
      {users?.map((user) => (
        <p key="user.id">{user.name}</p>
      ))}
    </Container>
  );
};

export default Home;
