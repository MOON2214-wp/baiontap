import LetterItem from "./LetterItem";

function LetterList({ letters }) {
  return (
    <div className="letter-list">
      {letters.length === 0 ? (
        <p className="empty-state">Chưa có letter nào được gửi</p>
      ) : (
        letters.map((letter) => (
          <LetterItem key={letter.id} letter={letter} />
        ))
      )}
    </div>
  );
}

export default LetterList;