export interface Customer {
  id: string;
  img: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export const CustomersData: Customer[] = [
  {
    id: "1",
    img: "/src/images/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "2",
    img: "/src/images/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: ", Seoul, South Korea",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "3",
    img: "/src/images/Ellipse 175 (2).svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "4",
    img: "/src/images/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "5",
    img: "/src/images/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: ", Seoul, South Korea",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "6",
    img: "/src/images/Ellipse 175 (2).svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "7",
    img: "/src/images/Ellipse 175 (2).svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "8",
    img: "/src/images/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Shanxi, China",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
  {
    id: "9",
    img: "/src/images/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: ", Seoul, South Korea",
    rating: 4.5,
    comment: "Lorem Ipsum is simply dummy text of the printing and",
  },
];

export const fetchCustomers = async (
  offset: number = 0,
  limit: number = 3
): Promise<Customer[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return CustomersData.slice(offset, offset + limit);
};
