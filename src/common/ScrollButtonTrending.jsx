import chevronRight from "icons/chevron-right.svg"
import chevronLeft from "icons/chevron-left.svg"


const ScrollButtonTrending = ({ direction }) => {
    const toRight = direction === "right"

    return (
        <button
            onClick={() =>
                document
                    .querySelector("#movie-card-container")
                    .scrollBy({ left: toRight ? 220 : -220, behavior: "smooth" })
            }
            className={`z-10 absolute ${toRight ? "-right-[-200px]" : "-left-[-200px]"} top-[1000px] hidden md:flex items-center justify-center bg-zinc-900 h-28
            hover:bg-zinc-800  duration-200 p-2 rounded-full`}
        >
            <img src={toRight ? chevronRight : chevronLeft} alt="" />
        </button>
    )
}

export default ScrollButtonTrending