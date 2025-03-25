import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../component/Contact"
import '@testing-library/jest-dom';
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("renders the Input field", () => {
  render(<Contact />);  
  // Check if the heading is in the document
  const inputname = screen.getByLabelText(/name/i);
  expect(inputname).toBeInTheDocument();


  const placeholderInput = screen.getByPlaceholderText("Your Name");
  expect(placeholderInput).toBeInTheDocument();
});

test("renders the Input field type", () => {
  render(<Contact />);  
  
  const inputname = screen.getByLabelText(/name/i);
  
  fireEvent.change(inputname,{target:{value:"johne de"}});

  expect(inputname.value).toBe("johne de");
});

test("updates Name input on user typing", async () => {
  render(<Contact />);  
  
  const inputname = screen.getByLabelText(/name/i);
  
   await userEvent.type(inputname,"johne de");

  expect(inputname.value).toBe("johne de");
});


test("renders the Contact form", () => {
  render(<Contact />);  
  // Check if the heading is in the document
  const heading = screen.getByText(/Contact Me/i);
  expect(heading).toBeInTheDocument();
});

test("renders the Message Label", () => {
    render(<Contact />);  
    const label = screen.getByLabelText(/Message/i);
    expect(label).toBeInTheDocument();
  });


test("renders the submit button", () => {
    render(<Contact />);
      
    const button=screen.getByRole("button",{name:/Send Message/i});
    expect(button).toBeInTheDocument();
  });
