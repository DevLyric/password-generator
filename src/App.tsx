import { ChangeEvent, useEffect, useState } from "react";
import Header from "./components/Header";
import GeneratePasswordSection from "./components/GeneratePassword";
import InputRange from "./components/InputRange";
import CheckboxInputs from "./components/CheckboxInputs";

const App = () => {
   const [password, setPassword] = useState("");
   const [rangeInputValue, setRangeInputValue] = useState("10");
   const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
   // const [passwordStatus, setPasswordStatus] = useState("weak");

   const getCheckboxChange = (label: string) => {
      setCheckboxValue(prevCheckboxValue => [...prevCheckboxValue, label]);
   };

   const getPasswordLenght = (event: ChangeEvent<HTMLInputElement>) => {
      setRangeInputValue(event.target.value);
   };
   const generatePassword = () => {
      const numbers = "0123456789";
      const characters = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const specialCharacters = "!@#$%^&*()_+";

      let combinedCharacters = numbers;

      if (checkboxValue.includes("lowercase")) {
         combinedCharacters += characters;
      }

      if (checkboxValue.includes("uppercase")) {
         combinedCharacters += uppercaseCharacters;
      }

      if (checkboxValue.includes("numbers")) {
         combinedCharacters += numbers;
      }

      if (checkboxValue.includes("special")) {
         combinedCharacters += specialCharacters;
      }

      const passwordLength = parseInt(rangeInputValue, 10);

      const password = Array.from({ length: passwordLength }, () => {
         const randomIndex = Math.floor(
            Math.random() * combinedCharacters.length,
         );
         return combinedCharacters.charAt(randomIndex);
      }).join("");

      setPassword(password);
   };

   useEffect(() => {
      generatePassword();
   }, []);

   return (
      <div className="w-full h-screen flex items-center justify-center px-3 bg-[#319795]">
         <div className="container mx-auto px-5 w-full max-w-xl bg-white rounded-xl p-8 flex flex-col gap-8">
            <Header />

            <GeneratePasswordSection
               password={password}
               copyToClipboard={() => {
                  navigator.clipboard.writeText(password);
               }}
            />

            <InputRange
               rangeInputValue={rangeInputValue}
               getPasswordLenght={getPasswordLenght}
            />

            <CheckboxInputs getCheckboxChange={getCheckboxChange} />

            <button
               onClick={generatePassword}
               className="bg-indigo-500 text-white font-medium rounded p-2 w-32">
               generate
            </button>
         </div>
      </div>
   );
};

export default App;
