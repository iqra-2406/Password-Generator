import React, { useState, useCallback, useEffect } from 'react';
import PasswordGen from './components/PasswordGen';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div>
      <PasswordGen
        length={length}
        setLength={setLength}
        numberAllowed={numberAllowed}
        setNumberAllowed={setNumberAllowed}
        charAllowed={charAllowed}
        setCharAllowed={setCharAllowed}
        password={password}
        setPassword={setPassword}
        passwordGenerator={passwordGenerator}
      />
    </div>
  );
};

export default App;
