import { renderRouter, screen } from "expo-router/testing-library";

import React from "react";
import Signup from "..";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

describe("Signup", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Signup />).toJSON();
    expect(tree).toMatchSnapshot();
  });

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
