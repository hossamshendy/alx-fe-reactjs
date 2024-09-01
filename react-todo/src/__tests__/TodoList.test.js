// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todoItems = screen.getAllByText(/Learn React|Build a Todo App/i);
    expect(todoItems.length).toBe(2);
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText(/test new todo/i);
    expect(newTodo).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0];
    fireEvent.click(deleteButton);

    const deletedTodo = screen.queryByText(/Learn React/i);
    expect(deletedTodo).toBeNull();
  });
});
test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByText(/Learn React|Build a Todo App/i);
  expect(todoItems.length).toBe(2);
});
