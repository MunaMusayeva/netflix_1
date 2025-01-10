import { motion } from "motion/react";
import MovieTvCard from "../../../common/MovieTvCard";

const Movies = ({data}) => {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <div className="grid grid-cols-5 px-[90px] pt-[120px] gap-10">
        {data.map((item) => (
          <MovieTvCard item={item} />
        ))}
      </div>
     </motion.div>

    
  );
};

export default Movies;