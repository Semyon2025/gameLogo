import { useEffect, useState } from "react";
import "./styles.css";
import { CustomersData, Customer } from "../../../../mocks/customersData";
import { PaginationCust } from "../../../features/pagination/paginationCust/paginationCust";

export default function Customers() {
  const [Customers, setCustomers] = useState<Customer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCustomers(CustomersData);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("right");
    setCurrentIndex((prev) => {
      const total = Customers.length;
      if (total <= 3) return prev;
      const maxIndex = total - 3;
      return prev + 3 > maxIndex ? 0 : prev + 3;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("left");
    setCurrentIndex((prev) => {
      const total = Customers.length;
      if (total <= 3) return prev;
      const maxIndex = total - 3;
      return prev - 3 < 0 ? maxIndex : prev - 3;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  if (Customers.length === 0) {
    return <div>Loading...</div>;
  }
  const getVisibleCustomers = () => {
    const total = Customers.length;
    if (total <= 3) {
      return Customers.slice(0, 3);
    }

    const visible: Customer[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % total;
      visible.push(Customers[index]);
    }
    return visible;
  };

  const visibleCustomers = getVisibleCustomers();
  const totalPages = Customers.length <= 3 ? 1 : Customers.length - 2;
  const currentPage = currentIndex + 1;

  return (
    <div className="customers-slider-container">
      <h2 className="teams-title"></h2>
      <div className="customers-slider">
        <div className="customer-slide">
          <div
            className={`customers-wrapper ${
              isTransitioning ? `slide-${direction}` : ""
            }`}
            key={currentIndex}
          >
            {visibleCustomers.map((customer) => (
              <div className="customers" key={customer.id}>
                <div className="customer-block">
                <div className="customer-name">
                <img src={customer.img} alt={`Customer ${customer.id}`} />
                
                  <div className="customer-info">
                    <h3>{customer.name}</h3>
                    <p>{customer.location}</p>
                  </div>
                  </div>
                  <div className="customer-rating">
                    <p>{customer.rating}</p>
                  </div>
                  </div>
                <div className="customer-comment">
                  <p>{customer.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="customers-slider-controls">
          <PaginationCust
            currentIndex={currentPage}
            total={totalPages}
            onDecrement={prevSlide}
            onIncrement={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}
