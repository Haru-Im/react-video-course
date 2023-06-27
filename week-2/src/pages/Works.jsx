import { Link, useLocation, useNavigate } from "react-router-dom";

export const Works = () => {
  //   const location = useLocation();

  //   console.log("location", location);

  return (
    <div>
      works <br />
      <button>Home으로 이동</button>
      <Link to="/contact">contact 페이지로 이동</Link>
    </div>
  );
};
