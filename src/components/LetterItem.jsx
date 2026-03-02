import { useEffect } from "react";

function LetterItem({ letter }) {
  useEffect(() => {
    console.log("Mounted:", letter.id);
    return () => console.log("Unmounted:", letter.id);
  }, [letter.id]);

  return (
    <div className="letter-item">
      {letter.content}
    </div>
  );
}

export default LetterItem;