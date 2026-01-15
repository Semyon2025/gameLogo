import { useState } from "react";
import { Customer } from "../../../../mocks/customersData";

const ITEMS_PER_PAGE = 3;
export function useCustomersSlider(customers: Customer[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection("right");

    setCurrentIndex((prev) => {
      const total = customers.length;
      if (total <= ITEMS_PER_PAGE) return prev;

      const maxIndex = total - ITEMS_PER_PAGE;
      return prev + ITEMS_PER_PAGE > maxIndex ? 0 : prev + ITEMS_PER_PAGE;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection("left");

    setCurrentIndex((prev) => {
      const total = customers.length;
      if (total <= ITEMS_PER_PAGE) return prev;

      const maxIndex = total - ITEMS_PER_PAGE;
      return prev - ITEMS_PER_PAGE < 0 ? maxIndex : prev - ITEMS_PER_PAGE;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getVisibleCustomers = () => {
    if (customers.length <= ITEMS_PER_PAGE) {
      return customers.slice(0, ITEMS_PER_PAGE);
    }

    return Array.from({ length: ITEMS_PER_PAGE }, (_, i) => {
      return customers[(currentIndex + i) % customers.length];
    });
  };

  const totalPages =
    customers.length <= ITEMS_PER_PAGE
      ? 1
      : Math.ceil(customers.length / ITEMS_PER_PAGE);

  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE) + 1;

  return {
    direction,
    isTransitioning,
    visibleCustomers: getVisibleCustomers(),
    currentPage,
    totalPages,
    nextSlide,
    prevSlide,
  };
}
