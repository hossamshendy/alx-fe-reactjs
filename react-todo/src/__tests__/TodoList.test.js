// __tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    const initialTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Testing', completed: false }
    ];
    render(<TodoList initialTodos={initialTodos} />);
    initialTodos.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' }
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    const todos = [{ id: 1, text: 'Learn React', completed: false }];
    render(<TodoList initialTodos={todos} />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed'); // Assumes a 'completed' class is added on completion
  });

  test('deletes a todo item', () => {
    const todos = [{ id: 1, text: 'Learn React', completed: false }];
    render(<TodoList initialTodos={todos} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
