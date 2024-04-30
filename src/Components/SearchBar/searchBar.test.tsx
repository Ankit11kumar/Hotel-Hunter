import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./searchBar";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { initStore } from "../../Redux/store";

describe("SearchBar component", () => {
  const store = initStore();
  it("renders input element with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(getByPlaceholderText("Search Hotels")).toBeInTheDocument();
  });

  it("updates search value on input change", async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputElement: HTMLInputElement = getByPlaceholderText(
      "Search Hotels"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "New York" } });
    await waitFor(() => {
      expect(inputElement.value).toBe("New York");
    });
  });

  it("fetches hotel data when input value changes", async () => {
    const mockDispatch = jest.fn();
    jest.mock("../../Redux/hotelsAndPlaces/actionCreators", () => ({
      fetchSearchedData: mockDispatch,
    }));
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = getByPlaceholderText("Search Hotels");
    fireEvent.change(input, { target: { value: "New York" } });
    waitFor(() => expect(mockDispatch).toHaveBeenCalled());
  });
});
