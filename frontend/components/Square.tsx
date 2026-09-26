import "./Square.css";

type SquareProps = {
  boxValue: string;
  btnIndex: number;
  onClick: (index: number) => void;
};

const Square = ({ boxValue, btnIndex, onClick }: SquareProps) => {
  const handleBtnClick = () => {
    if (boxValue !== "") {
      return;
    }

    onClick(btnIndex);
  };

  return (
    <button className="square" onClick={handleBtnClick}>
      {boxValue}
    </button>
  );
};

export default Square;
