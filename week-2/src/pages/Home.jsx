import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      home
      <br />
      <button
        onClick={() => {
          navigate("/works");
        }}
      >
        works로 이동
      </button>
    </div>
  );
};
