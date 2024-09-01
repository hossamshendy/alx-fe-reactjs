import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("renders todo list and adds todo", () => {
  render(<TodoList />);

  // التحقق من وجود todos الافتراضية
  expect(screen.getByText("Learn React")).toBeInTheDocument();

  // إضافة todo جديد
  fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
    target: { value: "New Todo" }
  });
  fireEvent.click(screen.getByText("Add"));

  // التحقق من أن todo الجديد تم إضافته
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);

  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  // تحقق من تغيير الحالة إلى مكتمل
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  // تحقق من حذف العنصر
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
test("should use localStorage mock", () => {
  localStorage.setItem("key", "value");
  expect(localStorage.getItem("key")).toBe("value");
});
