import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashboardPage from "../components/DashboardPage";

afterEach(() => {
  cleanup();
});

test("render DashboardPage component correctly", () => {
  const { getByText } = render(<DashboardPage />);
  expect(getByText("Ali Zamani")).toBeInTheDocument();
});
