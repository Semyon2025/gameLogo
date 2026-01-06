export interface News {
  id: string;
  img: string;
  name: string;
  time: string;
  comment: string;
}

export const NewsData: News[] = [
  {
    id: "1",
    img: "/src/images/news1.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "2",
    img: "/src/images/news2.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "3",
    img: "/src/images/news3.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "4",
    img: "/src/images/news4.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "5",
    img: "/src/images/news5.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "6",
    img: "/src/images/news6.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
  {
    id: "7",
    img: "/src/images/news7.svg",
    name: "John smash",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
  },
];

export const fetchCustomers = async (
  offset: number = 0,
  limit: number = 3
): Promise<News[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NewsData.slice(offset, offset + limit);
};
