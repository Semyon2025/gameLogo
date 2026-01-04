import vector from "../../../../images/Vector (1).svg";
type PaginationProps = {
  currentIndex: number;
  total: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const PaginationCust = ({
  currentIndex,
  onDecrement,
  onIncrement,
  total,
}: PaginationProps) => {
  return (
    <div className="pagination-container">
        <div className="pagination-dots">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index + 1 === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <button onClick={onDecrement}>
        <img src={vector} />
      </button>
      
      <button onClick={onIncrement}>
        <img src={vector} style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
};