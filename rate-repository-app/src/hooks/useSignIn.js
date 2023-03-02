/*
Implement a useSignIn hook that sends the authenticate mutation using the useMutation hook. 
Note that the authenticate mutation has a single argument called credentials, which is of type AuthenticateInput. 
This input type contains username and password fields.
*/

import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } });
    console.log(response.data);
    const accessToken = response.data.authenticate.accessToken;
    await authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
    navigate("/");
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
