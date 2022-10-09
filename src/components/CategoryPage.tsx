import { Link } from "react-router-dom";

const CategoryPage: React.FC = () => {
  return (
    <div>
      <h2>Category</h2>

      <ul>
        <li>
          <Link to={`drama`}>Drama</Link>
        </li>
        <li>
          <Link to={`action`}>Action</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryPage;
