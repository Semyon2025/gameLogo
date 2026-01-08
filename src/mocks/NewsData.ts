export interface News {
  id: string;
  img: string;
  name: string;
  color: string;
  time: string;
  comment: string;
  text: string;
}

export const NewsData: News[] = [
  {
    id: "1",
    img: "/src/images/news1.svg",
    name: "John smash",
    color: "#FF8484",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "2",
    img: "/src/images/news2.svg",
    name: "John smash",
    color: "#2351F5",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "3",
    img: "/src/images/news3.svg",
    name: "John smash",
    color: "#FF7C32",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "4",
    img: "/src/images/news4.svg",
    name: "John smash",
    color: "#2351F5",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "5",
    img: "/src/images/news5.svg",
    name: "John smash",
    color: "#23A54F",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "6",
    img: "/src/images/news6.svg",
    name: "John smash",
    color: "#2351F5",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "7",
    img: "/src/images/news7.svg",
    name: "John smash",
    color: "#9921C3",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:""
  },
  {
    id: "8",
    img: "/src/images/news8.svg",
    name: "John smash",
    color: "#2351F5",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
  {
    id: "9",
    img: "/src/images/news9.svg",
    name: "John smash",
    color: "#2351F5",
    time: "5 min.",
    comment: "Lorem Ipsum is simply dummy text dummy text ? ",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
];

export const fetchWews = async (
  offset: number = 0,
  limit: number = 15,
): Promise<News[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));


  return NewsData.slice(offset, offset + limit);

};
