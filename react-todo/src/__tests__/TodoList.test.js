import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import TodoList from '../components/TodoList'; // Adjust path as necessary

describe('TodoList Component', () => {
  // Initial rendering test
  test('renders the initial todo items', () => {
    render(<TodoList />);
    
    // Check if the initial todos are present
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  // Adding a new todo
  test('adds a new todo item', async () => {
    render(<TodoList />);
    
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    // Simulate user adding a new todo
    fireEvent.change(inputElement, { target: { value: 'Write unit tests' } });
    fireEvent.click(addButton);

    // Wait for the new todo item to appear
    await waitFor(() => {
      expect(screen.getByText(/Write unit tests/i)).toBeInTheDocument();
    });
  });

  // Toggling a todo completion status
  test('toggles the completion status of a todo', async () => {
    render(<TodoList />);

    const todoItem = screen.getByText(/Learn React/i);
    
    // Ensure the todo is not completed initially
    expect(todoItem).not.toHaveClass('completed');

    // Simulate clicking the todo to toggle completion
    fireEvent.click(todoItem);

    // Wait for the class to change indicating completion
    await waitFor(() => {
      expect(todoItem).toHaveClass('completed');
    });
  });

  // Deleting a todo item
  test('deletes a todo item', async () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText(/Build a Todo App/i);
    const deleteButton = screen.getByTestId('delete-button-2'); // Adjust according to the delete button setup

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Wait for the item to be removed from the document
    await waitFor(() => {
      expect(todoItem).not.toBeInTheDocument();
    });
  });
});
