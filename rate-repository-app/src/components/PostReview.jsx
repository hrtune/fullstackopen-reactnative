import FormikTextInput from "./FormikTextInput";
import { inputStyle } from "../style";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const PostView = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "stretch",
    },
  });
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        style={inputStyle.input}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={inputStyle.input}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 to 100"
        style={inputStyle.input}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={inputStyle.input}
        multiline
      />
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .integer("Rating must be an integer")
    .max(100, "Maximum rating is 100")
    .min(0, "Minimum rating is 0")
    .required("Rating number is required"),
  text: yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <PostView onSubmit={handleSubmit} />}
    </Formik>
  );
};

const PostReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await createReview(values);
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <ReviewForm onSubmit={onSubmit} />;
};

export default PostReview;
