import { ChangeEvent } from "react";

interface Props {
   rangeInputValue: string;
   getPasswordLenght: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputRange({ rangeInputValue, getPasswordLenght }: Props) {
   return (
      <div>
         <p>Password lenght: {rangeInputValue}</p>
         <input
            type="range"
            className="w-full"
            min={10}
            max={30}
            value={rangeInputValue}
            onChange={getPasswordLenght}
         />
      </div>
   );
}

export default InputRange;
