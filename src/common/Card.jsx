import { useNavigate } from "react-router";

const Card = ({ item, type }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {
      navigate("/Details", {
        state: {
          id: item.id,
          type: type ? type : item.media_type,
        },
      });
    }}>
      <img
        className=" min-w-[150px] h-[200px] hover:scale-110 transition duration-150 ease-in-out"
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
      />
    </button>
  );
};

export default Card;
