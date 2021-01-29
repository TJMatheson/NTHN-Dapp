import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import bannerContract from "../../banner";

import App from "../../App";





it("displays a textfield for user to write their own message", () => {

  render(<App />)

  const TextField = screen.getByTestId("message-input")

  expect(TextField).toBeTruthy()

  user.type(TextField, "Test content")


})


