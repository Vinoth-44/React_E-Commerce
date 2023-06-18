import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Navbar from "./Navbar";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("Navbar component", () => {
    const initialState = [{name:'test'}];
    const mockStore = configureStore();
    let store;

    test("should render Navbar component correctly", () => {
        store = mockStore(initialState);
        render(<Provider store={store}><Navbar /></Provider>);
    });
});