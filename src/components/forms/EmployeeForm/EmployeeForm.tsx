import { SubmitHandler, useForm } from "react-hook-form";
import { Employee } from "@/types";
import { FC } from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";
import { DevTool } from "@hookform/devtools";
import stateOptions from "./stateSelectOptions";
import { Dayjs } from "dayjs";

const { Option } = Select;

export type EmployeeFormInput = Omit<Employee, "dateOfBirth" | "startDate"> & {
  dateOfBirth: Dayjs;
  startDate: Dayjs;
};

interface EmployeeFormProps {
  onSubmit: SubmitHandler<EmployeeFormInput>;
}

const EmployeeForm: FC<EmployeeFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    // formState: { errors: formErrors },
  } = useForm<EmployeeFormInput>();

  const onSubmitProxy: SubmitHandler<EmployeeFormInput> = (data) =>
    onSubmit && onSubmit(data);

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit(onSubmitProxy)}>
        <FormItem control={control} name="firstName" label="First Name">
          <Input />
        </FormItem>

        <FormItem control={control} name="lastName" label="Last Name">
          <Input />
        </FormItem>

        <FormItem control={control} name="dateOfBirth" label="Date of Birth">
          <DatePicker style={{ width: "100%" }} format="MM/DD/YYYY" />
        </FormItem>

        <FormItem control={control} name="startDate" label="Start Date">
          <DatePicker style={{ width: "100%" }} format="MM/DD/YYYY" />
        </FormItem>

        <fieldset>
          <legend>Address</legend>

          <FormItem control={control} name="street" label="Street">
            <Input />
          </FormItem>

          <FormItem control={control} name="city" label="City">
            <Input />
          </FormItem>

          <FormItem control={control} name="state" label="State">
            <Select>
              {stateOptions.map((state) => (
                <Option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </Option>
              ))}
            </Select>
          </FormItem>

          <FormItem control={control} name="zipCode" label="Zip Code">
            <InputNumber style={{ width: "100%" }} />
          </FormItem>
        </fieldset>

        <FormItem control={control} name="department" label="Department">
          <Select>
            <Option value="Sales">Sales</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Engineering">Engineering</Option>
            <Option value="HR">Human Resources</Option>
            <Option value="Legal">Legal</Option>
          </Select>
        </FormItem>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default EmployeeForm;
