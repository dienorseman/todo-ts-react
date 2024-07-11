import { Input } from "@nextui-org/react"
import { FormikHandlers } from "formik";

interface TextInputProps {
    field: string;
    placeholder: string;
    handleChange: FormikHandlers['handleChange'];
    error?: string;
    value: string;
}

export const TextInput = ({ field, placeholder, error, handleChange, value }: TextInputProps) => {

    return (
        <Input
            className="w-4/5 mr-8 h-20"
            type="text"
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            placeholder={placeholder}
            name={field}
            value={value}
            onChange={handleChange}
            isInvalid={!!error}
            errorMessage={error}
        />
    )
}
