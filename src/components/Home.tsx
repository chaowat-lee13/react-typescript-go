import { Link, Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="text-black text-3xl font-bold m-3">Go Watch a Movie!</div>
      <hr className="mt-1 mb-3" />
      <div className="flex">
        <div className="flex flex-col w-72 h-screen px-4 overflow-y-auto border-r">
          <div className="flex flex-col justify-between">
            <aside>
              <ul>
                <li>
                  <Link
                    className="flex items-center py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    to="/"
                  >
                    <span className="mx-4 font-medium">Home</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    to="movies"
                  >
                    <span className="mx-4 font-medium">Movies</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    to="by-category"
                  >
                    <span className="mx-4 font-medium">Categories</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    to="admin"
                  >
                    <span className="mx-4 font-medium">Manage Catalogue</span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full mx-3 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
