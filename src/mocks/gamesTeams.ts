export interface Team {
  id: string;
  img: string;
  name: string;
  rang: string;
}
export const teamsData: Team[] = [
  { id: "1", img: "/src/images/Bill 1.png", name: "John peter", rang: "COO" },
  {
    id: "2",
    img: "/src/images/Beverly 1.png",
    name: "John peter",
    rang: "COO",
  },
  {
    id: "3",
    img: "/src/images/Claudia 1.png",
    name: "John peter",
    rang: "COO",
  },
  { id: "4", img: "", name: "John peter", rang: "COO" },
];
export const fetchTeams = async (
  offset: number = 0,
  limit: number = 4
): Promise<Team[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return teamsData.slice(offset, offset + limit);
};
