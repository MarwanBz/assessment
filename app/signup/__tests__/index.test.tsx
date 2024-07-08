import { render, userEvent } from "@testing-library/react-native";
import { renderRouter, screen } from "expo-router/testing-library";

import Button from "@/components/ui/Button/Button";
import React from "react";
import Signup from "..";
import renderer from "react-test-renderer";

// render() function the starting point for writing React Native Testing Library tests. It deeply renders the given React element and returns helpers to query the output components' structure. //! see the docs render func

describe("Signup", () => {
  // snapshot test
  test("renders correctly", () => {
    const tree = renderer.create(<Signup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // form testing
  const onSubmit = jest.fn();
  beforeEach(() => {
    onSubmit.mockClear(); //Clears all information stored in the mockFn.mock.calls, mockFn.mock.instances, mockFn.mock.contexts and mockFn.mock.results arrays. Often this is useful when you want to clean up a mocks usage data between two assertions. 
    // TODO://see the docs and this repo
    
    //! https://github.com/bmvantunes/youtube-react-testing-video8-forms-react-testing-library/blob/main/src/components/MultiStepForm.spec.tsx
    
    render(<Button title="my" onPress={onSubmit} />);
  })
  // user events like firing press or long press etc...
  const user = userEvent.setup();

  test("renders correctly", () => {
    // Idiom: no need to capture render output, as we will use `screen` for queries.
    render(<Signup />);
    const signUpText = screen.getByText("Sign Up")
    // Idiom: `getBy*` queries are predicates by themselves, but we will use it with `expect().toBeOnTheScreen()`
    // to clarify our intent.
    // expect(signUpText);
    expect(signUpText).toHaveTextContent("Sign Up");
  });

  it("signup-test", async () => {
    const MockComponent = jest.fn(() => <Signup />);

    renderRouter(
      {
        "/signup": MockComponent,
      },
      {
        initialUrl: "/signup",
      }
    );

    expect(screen).toHavePathname("/signup");
  });
});
