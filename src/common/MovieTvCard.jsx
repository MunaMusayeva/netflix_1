
import { useNavigate } from "react-router";

const MovieTvCard= ({ item, type }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {
      navigate("/details", {
        state: {
          id: item.id,
          type: type ? type : item.media_type,
        },
      });
    }} className="relative  m-5 w-[150px] rounded-lg  hover:scale-110 transition duration-150 ease-in group">
      <img
        className=" min-w-[240px] h-[300px] hover:scale-110 rounded-lg transition duration-150 ease-in-out"
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
      />
    </button>
  );
};

export default MovieTvCard;



