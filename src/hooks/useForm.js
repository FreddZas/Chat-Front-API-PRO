import { useState } from "react";

function useForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleValue = (label, value) => {
    const data = { ...formData };
    const errorCopy = { ...errors };
    if (errors[label]) {
      errorCopy[label] = false;
      setErrors({ ...errorCopy });
    }
    data[label] = value;
    setFormData(data);
  };

  const handleErrors = () => {
    const fields = Object.keys(formData);
    const errorsCopy = { ...errors };
    fields.forEach((field) => {
      errorsCopy[field] = !formData[field];
    });
    setErrors(errorsCopy);
    return Object.values(errorsCopy);
  };

  const existField = (field) => {
    const fields = Object.keys(formData);
    return fields.includes(field);
  };

  const register = (value) => {
    const data = { ...formData };
    const errorsData = { ...errors };
    data[value] = "";
    errorsData[value] = false;

    if (!existField(value)) {
      setFormData({ ...data });
      setErrors({ ...errorsData });
    }

    return {
      name: value,
      onChange: (e) => handleValue(value, e.target.value),
    };
  };

  const handleSubmit = (onSubmit) => {
    if (handleErrors().some((error) => error)) {
      return;
    }
    onSubmit(formData);
  };

  return { register, handleSubmit, formData, errors };
}

export default useForm;
