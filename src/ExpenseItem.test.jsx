
import { describe, test } from "vitest";
import ExpenseItem from "./components/ExpenseItem";
import { render, screen } from "@testing-library/react";

describe("ExpenseItem",()=>{
    test("should render ExpenseItem component",()=>{
        render(<ExpenseItem title={"Groceries"}/>);
        const element = screen.getByText(/Groceries/i);
        expect(element).toBeInTheDocument();
    })
    test("should render ExpenseItem component",()=>{
        render(<ExpenseItem title={"Groceries"} amount={45}/>);
        const element = screen.getByText("45");
        expect(element).toBeInTheDocument();
    })
})
