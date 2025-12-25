import { useState, useEffect } from "react";
import "./styles.css";
import fire from "../../../images/fire 1.png";
import { fetchGames, Game } from "../../../mocks/gamesData";

export default function GameBlock() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadInitialGames = async () => {
      setIsLoading(true);
      const initialGames = await fetchGames(0, 4);
      setGames(initialGames);
      setIsLoading(false);
    };
    loadInitialGames();
  }, []);

  const handleSeeAll = async () => {
    setIsLoading(true);
    const newGames = await fetchGames(games.length, 4);
    setGames([...games, ...newGames]);
    setIsLoading(false);
  };

  return (
    <div className="containerTranding">
      <div className="headLine">
        <h3>Currently Trending games</h3>
        <button className="seeAll" onClick={handleSeeAll} disabled={isLoading}>
          See all
        </button>
      </div>
      <div className="games">
        <div className="block">
          {games.map((game) => (
            <div className="games" key={game.id}>
              <img src={game.img} alt={`Game ${game.id}`} />
              <div className="fire">
                <img src={fire} alt="fire" />
                {game.followers} followers
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
