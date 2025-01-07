
const MovieCard = ({ item, index, setModalOpen, setItem }) => {
    return (
        <div onClick={() => {
            setItem(item)
        }} className='relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in'>
            <p className='absolute -left-7 bottom-4 text-[100px]  hower:outline-white  fon bold '>{index+1}</p>
            <img className='w-full h-full object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
        </div>
    )
}

export default MovieCard



// const MovieCard = ({ item, index, setModalOpen, setItem }) => {
//     return (
//         <div
//             onClick={() => {
//                 setItem(item);
//                 setModalOpen(true);
//             }}
//             className="relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in"
//         >
//             <p className="absolute -left-7 bottom-4 text-[100px]">{index + 1}</p>
//             <img
//                 className="w-full h-full object-cover rounded-lg"
//                 src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
//                 alt=""
//             />
//         </div>

//     )
// }

// export default MovieCard