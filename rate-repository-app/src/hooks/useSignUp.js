import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutation, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const response = await mutation({
      variables: {
        user: {
          username,
          password,
        },
      },
    });

    return response;
  };

  return [signUp, result];
};

export default useSignUp;
