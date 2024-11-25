"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

// Function to evaluate password strength
const getPasswordStrength = (password) => {
  let strength = 0;

  // Increase strength score based on the presence of these character types
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

  // Return the strength level (0 to 5)
  return strength;
};

const CreatePassword = () => {
  const router = useRouter();
  
  // Password states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Password strength states
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);
  
  // Handle changes to the password input
  const handlePasswordChange = (event) => {
    const pass = event.target.value;
    setPassword(pass);
    setPasswordStrength(getPasswordStrength(pass));
  };
  
  // Handle changes to the confirm password input
  const handleConfirmPasswordChange = (event) => {
    const pass = event.target.value;
    setConfirmPassword(pass);
    setConfirmPasswordStrength(getPasswordStrength(pass));
  };

  // Set password strength color based on strength level
  const getStrengthColor = (strength) => {
    if (strength <= 2) return 'bg-red-500';  // Weak
    if (strength === 3) return 'bg-orange-500'; // Medium
    return 'bg-green-500';  // Strong
  };

  // Check if passwords match and are strong
  const isFormValid = password === confirmPassword && passwordStrength >= 3 && confirmPasswordStrength >= 3;

  // Handle continue action when both conditions are satisfied
  const handleContinue = () => {
    if (isFormValid) {
      router.push(`/lecturer/getstarted/welcome/123`);
    }
  };

  return (
    <section className="flex h-screen bg-[#F9F9F9]">
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#F9F9F9]">
        <img src="/assets/logo.png" alt="vconnet" className="mb-6" />
        <h1 className="text-3xl font-bold text-[#B22222] mb-2">You are Welcome!</h1>
        <p className="text-sm text-primary mb-8">Please login/Signup to your account.</p>
        
        <form className="w-full max-w-md">
          <p className="block text-gray-700 text-sm font-bold mb-2 text-center text-[18px]">
            Please create your password
          </p>

          {/* Password Input */}
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          {/* Password Strength Bar */}
          <div className="w-full h-1 bg-gray-300 mb-4">
            <div className={`h-full ${getStrengthColor(passwordStrength)} rounded-full`} style={{ width: `${(passwordStrength / 5) * 100}%` }}></div>
          </div>

          {/* Confirm Password Input */}
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          {/* Confirm Password Strength Bar */}
          <div className="w-full h-1 bg-gray-300 mb-4">
            <div className={`h-full ${getStrengthColor(confirmPasswordStrength)} rounded-full`} style={{ width: `${(confirmPasswordStrength / 5) * 100}%` }}></div>
          </div>

          {/* Continue Button */}
          <div className="flex items-center justify-center mt-5">
            <button
              className={`font-normal py-3 px-10 w-[150px] focus:outline-none focus:shadow-outline rounded-full ${
                isFormValid ? 'bg-primary text-white' : 'bg-gray-300 text-[#A0A0A0]'
              }`}
              type="button"
              onClick={handleContinue}
              disabled={!isFormValid} // Button is only enabled when passwords match and are strong
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Right Side with Image */}
      <div className="w-1/2 flex justify-center items-center p-10 bg-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/diploma.png" alt="Diploma" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default CreatePassword;
