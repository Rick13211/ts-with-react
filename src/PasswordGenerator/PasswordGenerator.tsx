import React from 'react'
import usePasswordStore from './Store'

const PasswordGenerator = () => {
  const {
    length,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  includeLowercase,
  generatedPassword,
  setLength,
  toggleNumbers,
  toggleSymbols,
  toggleUpperCase,
  toggleLowerCase,
  generatePassword,
  } = usePasswordStore();

  const handleGenerate = ()=>{
    generatePassword();
  }
  return (
    <div className='p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg'>
      <h1 className="text-2xl font-bold mb-4">
        Password Generator
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="length" className='block text-sm font-medium text-gray-700'>
            Password Length 
          </label>
          <input type="number" name="" id="length" value={length} onChange={(e)=>setLength(+e.target.value)} min={4} max={44} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-mb shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'/>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={includeNumbers} onChange={toggleNumbers} />
          <label htmlFor="" className='ml-2 text-sm'>Include Numbers</label>
        </div>

        <div className="flex items-center">
          <input type="checkbox" checked={includeSymbols} onChange={toggleSymbols} />
          <label htmlFor="" className='ml-2 text-sm'>Include Symbols</label>
        </div>

        <div className="flex items-center">
          <input type="checkbox" checked={includeUppercase} onChange={toggleUpperCase} />
          <label htmlFor="" className='ml-2 text-sm'>Include Uppercase</label>
        </div>

        <div className="flex items-center">
          <input type="checkbox" checked={includeLowercase} onChange={toggleLowerCase} />
          <label htmlFor="" className='ml-2 text-sm'>Include Lowercase</label>
        </div>

        <button
         onClick={handleGenerate}
         className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
         >Generate Password</button>

        {generatedPassword&&(
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">
              {generatedPassword}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PasswordGenerator
