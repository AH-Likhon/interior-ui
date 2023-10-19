"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface FormDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
  defaultValue?: string;
}

const FormDatePicker = ({
  name,
  label,
  onChange,
  size,
  defaultValue,
}: FormDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  //   console.log(dayjs(defaultValue).toISOString(), "checking value");

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            style={{ width: "100%" }}
            size={size}
            defaultValue={defaultValue ? dayjs(defaultValue) : dayjs()}
            onChange={handleOnChange}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
