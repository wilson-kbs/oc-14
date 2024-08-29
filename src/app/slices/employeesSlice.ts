import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee as EmployeeBase } from "@/types";

export type Employee = Omit<EmployeeBase, "dateOfBirth" | "startDate"> & {
  dateOfBirth: string;
  startDate: string;
};

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: JSON.parse(localStorage.getItem("employees") || "[]"),
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);

      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
