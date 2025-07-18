import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+=-{}~`";

    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randIndex);
    }

    setPassword(pass);
  }, [length, number, char]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-4xl text-center text-white mb-6">Password Generator</h1>

        <div className="flex mb-4 bg-white rounded overflow-hidden">
          <input
            type='text'
            value={password}
            className='w-full px-3 py-2 outline-none text-black'
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className='bg-blue-500 text-white px-4 hover:bg-blue-600 transition'
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 text-white">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label htmlFor="length">Length: {length}</label>
            <input
              id="length"
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='w-1/2'
            />
          </div>

          {/* Include Numbers */}
          <div className="flex items-center justify-between">
            <label htmlFor="numbers">Include Numbers</label>
            <input
              id="numbers"
              type="checkbox"
              checked={number}
              onChange={() => setNumber(prev => !prev)}
            />
          </div>

          {/* Include Special Characters */}
          <div className="flex items-center justify-between">
            <label htmlFor="special">Include Special Characters</label>
            <input
              id="special"
              type="checkbox"
              checked={char}
              onChange={() => setChar(prev => !prev)}
            />
          </div>

          <button
            onClick={passwordGenerator}
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 transition"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
