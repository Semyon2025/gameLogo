
export interface Game {
  id: string;
  img: string;
  followers: number;
}


export const gamesData: Game[] = [
  { id: '1', img: '/src/images/Rectangle 23.png', followers: 40 },
  { id: '2', img: '/src/images/Rectangle 24.png', followers: 40 },
  { id: '3', img: '/src/images/Rectangle 25.png', followers: 40 },
  { id: '4', img: '/src/images/Rectangle 26.png', followers: 40 },
  { id: '5', img: '/src/images/Rectangle 23.png', followers: 40 },
  { id: '6', img: '/src/images/Rectangle 24.png', followers: 40 },
  { id: '7', img: '/src/images/Rectangle 25.png', followers: 40 },
  { id: '8', img: '/src/images/Rectangle 26.png', followers: 40 },
];



export const fetchGames = async (offset: number = 0, limit: number = 4): Promise<Game[]> => {

  await new Promise(resolve => setTimeout(resolve, 300));
  
  return gamesData.slice(offset, offset + limit);
};