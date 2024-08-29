import EmployeeForm, {
  EmployeeFormInput,
} from "@/components/forms/EmployeeForm/EmployeeForm.tsx";
import { addEmployee } from "@/app/slices/employeesSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();

  const handleSubmit = (data: EmployeeFormInput) => {
    dispatch(
      addEmployee({
        ...data,
        dateOfBirth: data.dateOfBirth.format("MM/DD/YYYY"),
        startDate: data.startDate.format("MM/DD/YYYY"),
      }),
    );
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to={"/employee-list"}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default HomePage;
