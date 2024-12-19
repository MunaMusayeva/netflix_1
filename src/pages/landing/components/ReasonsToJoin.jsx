import television from "../../../assets/SVG.svg"
import ReasonCard from "./ReasonCard"
const ReasonsToJoin = () => {
    const items=[
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:television
        },
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:television
        },
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:television
        },
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:television
        },
    ]
  return (
    <>
    <h2 className="  px-[9rem] text-white text-[24px] font-medium mb-4 max-w-[1440px] mx-auto">More Reasons to Join</h2>
    <div className="flex gap-4 max-w-[1440px] mx-auto  px-[9rem] ">
        
        {items.map(item=> <ReasonCard item={item}/>)}
    </div>
    </>
  )
}

export default ReasonsToJoin