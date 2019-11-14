import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddProjectPage from "../components/AddProjectPage";

afterEach(() => {
  cleanup();
});

test("render AddProjectPage correctly", () => {
  const { getByText } = render(<AddProjectPage />);
  expect(getByText(/submit/i)).toBeInTheDocument();
});
