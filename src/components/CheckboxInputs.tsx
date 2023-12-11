function CheckboxInputs({
   getCheckboxChange,
}: {
   getCheckboxChange: (label: string) => void;
}) {
   return (
      <div className="flex flex-col gap-3 font-medium">
         <div className="flex items-center justify-between">
            <label htmlFor="">Uppercase</label>
            <input
               type="checkbox"
               onChange={() => getCheckboxChange("uppercase")}
            />
         </div>
         <div className="flex items-center justify-between">
            <label htmlFor="">Lowercase</label>
            <input
               type="checkbox"
               onChange={() => getCheckboxChange("lowercase")}
            />
         </div>
         <div className="flex items-center justify-between">
            <label htmlFor="">Number</label>
            <input
               type="checkbox"
               onChange={() => getCheckboxChange("numbers")}
            />
         </div>
         <div className="flex items-center justify-between">
            <label htmlFor="">Special Characters</label>
            <input
               type="checkbox"
               onChange={() => getCheckboxChange("special")}
            />
         </div>
      </div>
   );
}

export default CheckboxInputs;
