import { useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const { id } = useParams();

  return <div>This is {id}</div>;
};

export default MovieDetails;
