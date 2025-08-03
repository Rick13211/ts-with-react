import { create } from "zustand";

type PasswordState = {
  length: number;
  includeNumbers: boolean;
  includeSymbols:boolean;
  includeUppercase:boolean;
  includeLowercase:boolean;
  generatedPassword:string;
  
  setLength:(length:number)=>void;
  toggleNumbers:()=>void;
  toggleSymbols:()=>void;
  toggleUpperCase:()=>void;
  toggleLowerCase:()=>void;
  generatePassword:()=>void;

}

const usePasswordStore = create<PasswordState>((set)=>({
  length: 12,
  includeNumbers: true,
  includeSymbols:true,
  includeUppercase:true,
  includeLowercase:true,
  generatedPassword:'',
  setLength:(length:number)=>set({length}),
  toggleNumbers:()=>set(state=>({includeNumbers:!state.includeNumbers})),
  toggleSymbols:()=>set(state=>({includeSymbols:!state.includeSymbols})),
  toggleUpperCase:()=>set(state=>({includeUppercase:!state.includeUppercase})),
  toggleLowerCase:()=>set(state=>({includeLowercase:!state.includeLowercase})),
  generatePassword:()=>set(state=>{
    const numbers = '0123456789';
    const symbols = '!@#$%^&*(){}[]';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    if(state.includeNumbers) characters += numbers;
    if(state.includeSymbols) characters += symbols;
    if(state.includeUppercase) characters += upperCaseLetters;
    if(state.includeLowercase) characters += lowerCaseLetters;

    let password ='';
    for(let i =0; i<state.length;i++){
      password += characters[Math.floor(Math.random()*characters.length)];

    }
    return {generatedPassword: password}
  }),

}))

export default usePasswordStore;