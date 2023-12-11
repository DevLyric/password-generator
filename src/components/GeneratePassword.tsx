interface Props {
   password: any;
   copyToClipboard: () => void;
}

function GeneratePasswordSection({ password, copyToClipboard }: Props) {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="p-2 rounder rounded border flex items-center justify-between w-full">
               <span>{password}</span>
            </span>
            <button
               onClick={copyToClipboard}
               className="p-2 rounded border self-start">
               Copy
            </button>
         </div>
      </div>
   );
}

export default GeneratePasswordSection;
