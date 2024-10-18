import React, { useState } from 'react'; // Make sure to import useState
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false); // Initialize state for password visibility

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value} // Controlled input using value prop
        onChange={onChange} // Handle input change via prop
        type={isShowPassword ? "text" : "password"} // Toggle input type based on state
        placeholder={placeholder || "Password"} // Provide default placeholder
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />
        {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-[#2B85FF] cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
