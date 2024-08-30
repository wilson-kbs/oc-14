import EmployeeForm, {
  EmployeeFormInput,
} from "@/components/forms/EmployeeForm/EmployeeForm.tsx";
import style from "./HomePage.module.css";
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
    <div className={style.WrapperPage}>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className={style.Container}>
        <NavLink to={"/employee-list"} className={style.Container_Link}>View Current Employees</NavLink>
        <h2 className={style.Container_Title}>Create Employee</h2>
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default HomePage;
