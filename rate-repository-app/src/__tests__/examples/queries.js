import { Text, View } from "react-native";
import { render, screen } from "@testing-library/react-native";

// a component to be tested
const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};
// 'describe' makes a group of tests
describe("Greeting", () => {
  // a single test for the component
  it("renders a greeting message based on the name prop", () => {
    // render one component
    render(<Greeting name="Kalle" />);

    // prints the rendered React tree in a user-friendly format
    screen.debug();

    // assert there is a component which incluedes the text
    expect(screen.getByText("Hello Kalle!")).toBeDefined();
  });
});
