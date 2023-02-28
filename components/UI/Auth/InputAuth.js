import { forwardRef } from "react";

const InputAuth = forwardRef(function InputAuth(props, ref) {
  const { comparePassword, name, placeholder, type } = props;

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        ref={ref}
        className="bg-neutral-50 mt-1 px-3.5 py-3 rounded shadow-inner text-sm w-full"
        onChange={comparePassword && comparePassword}
        required
      />
    </div>
  );
});

export default InputAuth;
