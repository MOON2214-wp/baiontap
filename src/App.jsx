import { useState, useEffect } from "react";
import LetterForm from "./components/LetterForm";
import LetterList from "./components/LetterList";
import "./App.css"; // Đã thêm import CSS

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted");
  }, []);

  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      { id: Date.now(), content },
      ...letters, // Đưa letter mới lên đầu danh sách
    ]);
  };

  return (
    <div className="app-container">
      <h1>My Letters</h1>
      <LetterForm onAdd={addLetter} />
      <LetterList letters={letters} />
    </div>
  );
}

export default App;