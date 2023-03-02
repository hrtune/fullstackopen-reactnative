/*
Implement a useSignIn hook that sends the authenticate mutation using the useMutation hook. 
Note that the authenticate mutation has a single argument called credentials, which is of type AuthenticateInput. 
This input type contains username and password fields.
*/

import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { username, password } });
  };

  return [signIn, result];
};

export default useSignIn;
