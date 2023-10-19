"use client";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  disabled?: boolean;
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValues?: SelectOptions;
  handleChange?: (value: string) => void;
};

const CustomSelectField = ({
  name,
  size,
  value,
  placeholder,
  options,
  label,
  disabled,
  defaultValues,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            disabled={disabled}
            style={{ width: "100%" }}
            onChange={handleChange ? handleChange : onChange}
            options={options}
            placeholder={placeholder}
            size={size}
            value={value}
          />
        )}
      />
    </>
  );
};

export default CustomSelectField;
