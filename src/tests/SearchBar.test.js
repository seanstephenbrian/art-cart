import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SearchBar from '../components/SearchBar';

describe('Search Bar', () => {
    it('calls updateInputValue correct number of times', () => {
        const updateInputValueMock = jest.fn();
        render(<SearchBar updateInputValue={updateInputValueMock}></SearchBar>);
        const input = screen.getByRole('searchbox');

        userEvent.type(input, 'Test');

        expect(updateInputValueMock).toHaveBeenCalledTimes(4);
    });

    it('calls updateInputValue with correct arguments on each input', () => {
        const updateInputValueMock = jest.fn();
        render(<SearchBar updateInputValue={updateInputValueMock}></SearchBar>);
        const input = screen.getByRole('searchbox');

        userEvent.type(input, 'Abcd');

        expect(updateInputValueMock).toHaveBeenNthCalledWith(1, 'A');
        expect(updateInputValueMock).toHaveBeenNthCalledWith(2, 'Ab');
        expect(updateInputValueMock).toHaveBeenNthCalledWith(3, 'Abc');
        expect(updateInputValueMock).toHaveBeenNthCalledWith(4, 'Abcd');
    });

    it('input has correct values', () => {
        const updateInputValueMock = jest.fn();
        render(<SearchBar updateInputValue={updateInputValueMock}></SearchBar>);
        const input = screen.getByRole('searchbox');

        userEvent.type(input, 'Pablo Picasso');

        expect(input).toHaveValue('Pablo Picasso');
    });
});