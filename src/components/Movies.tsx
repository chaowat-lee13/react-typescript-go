import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../models/models";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "The Shawshank Redemption", runtime: 142 },
      { id: 2, title: "The Godfaether", runtime: 175 },
      { id: 3, title: "The Dark Knight", runtime: 153 },
    ]);
  }, []);

  return (
    <div>
      <h2>Choose a movie</h2>
      <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
        {movies.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`${m.id}`}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
