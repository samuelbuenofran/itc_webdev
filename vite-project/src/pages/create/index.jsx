import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Create = () => {
  const { reset, register, handleSubmit } = useForm();
  return (
    <Container>
      <form>
        <Stack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              {...register("name", { required: true })}
              placeholder="Enter your email"
            />
          </FormControl>
          <Button colorScheme="blue">Register </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Create;
