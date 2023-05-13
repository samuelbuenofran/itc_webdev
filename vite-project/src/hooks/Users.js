/*
The place where you fetch data is here in this file. Just alter the URL in the fetch function to your own API URL.

*/

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export const useUsers = () => {
  const { data, error, isLoading } = useQuery(["users"], fetchUsers);
  return {
    users: data,
    error,
    isLoading,
  };
};
