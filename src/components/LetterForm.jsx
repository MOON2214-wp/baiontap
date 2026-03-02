import { useState } from "react";

function LetterForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="letter-form" onSubmit={handleSubmit}>
      <input
        className="letter-input"
        type="text"
        placeholder="Viết nội dung thư..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-send" type="submit">Gửi thư</button>
    </form>
  );
}

export default LetterForm;