import { useEffect, useState } from "react";
import "./styles.css";
import { fetchCustomers, Customer } from "../../../../mocks/customersData";

export default function Customers() {
  const [Customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers().then(setCustomers);
  }, []);

  return (
    <div className="">
      <h2 className="teams-title"></h2>
      <div className="teams">
        {Customers.map((Customer) => (
          <div className="team" key={Customer.id}>
            <img src={Customer.img} alt={`Game ${Customer.id}`} />
            <p> {Customer.name}</p>
            <p> {Customer.location}</p>
            <p> {Customer.rating}</p>
            <p> {Customer.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
