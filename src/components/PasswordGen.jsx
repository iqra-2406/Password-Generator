import React, { useRef, useCallback } from 'react';

const PasswordGen = ({
  length,
  setLength,
  numberAllowed,
  setNumberAllowed,
  charAllowed,
  setCharAllowed,
  password,
  setPassword,
  passwordGenerator
}) => {
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
<div className="w-full flex justify-center">
  <h1 className="text-3xl font-bold text-center my-5 text-white bg-gradient-to-r from-purple-400 to-indigo-500 p-3 rounded-lg shadow-lg max-w-3xl">
    Password Generator
  </h1>
</div>





      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
        <h2 className="text-2xl font-semibold text-center my-3 text-white">Authenticator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-accent-orange-500 bg-white"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-gradient-to-r from-purple-400 to-indigo-500 hover:bg-blue-700 text-white px-3 py-2 transition-colors duration-200 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <label className="text-white">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="numberInput" className="text-white">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="characterInput" className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGen;
