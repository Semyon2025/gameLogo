import vector from "../../../images/Vector (1).svg";
type PaginationProps = {
  currentIndex: number;
  total: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Pagination = ({
  currentIndex,
  onDecrement,
  onIncrement,
  total,
}: PaginationProps) => {
  return (
    <div className="pagination-container">
      <button onClick={onDecrement}>
        <img src={vector} />
      </button>
      <span className="pagination-text">
        {currentIndex} of {total}
      </span>
      <button onClick={onIncrement}>
        <img src={vector} style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
};
