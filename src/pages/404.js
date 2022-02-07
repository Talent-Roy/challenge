import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>
        You seem to be lost 😰 <br /> <Link to="/">Go back home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
