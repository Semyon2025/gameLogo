import { useEffect, useState } from "react";
import "./styles.css";
import { CustomersData, Customer } from "../../../../mocks/customersData";
import { PaginationCust } from "../../../features/pagination/paginationCust/paginationCust";
import { useCustomersSlider } from "../../../features/pagination/paginationCust/CustomersSliderLogic";
import star from "../../../../images/star.svg";

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setCustomers(CustomersData);
  }, []);

  const {
    visibleCustomers,
    direction,
    isTransitioning,
    currentPage,
    totalPages,
    nextSlide,
    prevSlide,
  } = useCustomersSlider(customers);

  if (!customers.length) return <div>Loading...</div>;

  return (
    <div className="customers-slider-container">
      <div className="customers-slider">
        <div className="customer-slide">
          <div
            className={`customers-wrapper ${
              isTransitioning ? `slide-${direction}` : ""
            }`}
          >
            {visibleCustomers.map((customer) => (
              <div className="customers" key={customer.id}>
                <div className="customer-block">
                  <div className="customer-name">
                    <img src={customer.img} alt={customer.name} />
                    <div className="customer-info">
                      <h3>{customer.name}</h3>
                      <p>{customer.location}</p>
                    </div>
                  </div>

                  <div className="customer-rating">
                    <p>{customer.rating}</p>
                    <img src={star} alt="star" />
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
            onIncrement={nextSlide}
            onDecrement={prevSlide}
          />
        </div>
      </div>
    </div>
  );
}
