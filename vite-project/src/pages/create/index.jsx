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

  const {mutate: mutateCreateUser} = 
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="button" onClick={() => reset()} colorScheme="red">
            Clear
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Create;
