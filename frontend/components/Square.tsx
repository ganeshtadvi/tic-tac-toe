import "./Square.css";

type SquareProps = {
  boxValue: string;
  onClick: () => void;
};

const Square = ({ boxValue, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      {boxValue}
    </button>
  );
};
export default Square;
