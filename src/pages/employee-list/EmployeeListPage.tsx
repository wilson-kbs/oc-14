import { RootState } from "@/app/store.ts";
import { useSelector } from "react-redux";
import { DataTable } from "@wilson-kbs/oc-14-datatable";
import type { Employee } from "@/app/slices/employeesSlice";
import {NavLink} from "react-router-dom";
import style from "./EmployeeListPage.module.css";

function EmployeeListPage() {
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employees.employees,
  );

  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  return (
    <div className={style.Container}>
      <h1>Current Employees</h1>
      <DataTable columns={columns} data={employees} />
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
}

export default EmployeeListPage;
