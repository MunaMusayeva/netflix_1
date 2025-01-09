import television from "images/SVG.svg"
import download from "images/SVG1.svg"
import watch from "images/SVG2.svg"
import profiles from "images/SVG3.svg"
import ReasonCard from "./ReasonCard"
const ReasonsToJoin = () => {
    const items=[
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:television
        },
        {
            title:"Download your showsto watch offline",
            desc:"Save your favorites easily and always have something to watch.",
            img:download 
        },
        {
            title:"Watch everywhere",
            desc:"Stream unlimited movies and TV shows on your phone, tablet,laptop, and TV.",
            img:watch
        },
        {
            title:"Create profiles for kids",
            desc:"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img:profiles
        },
    ]
  return (
    <>
    <h2 className="  px-[9rem] text-white text-[24px] font-medium mb-4  mx-auto">More Reasons to Join</h2>
    <div className="flex gap-4  mx-auto  px-[9rem] ">
        
        {items.map(item=> <ReasonCard item={item}/>)}
    </div>
    </>
  )
}

export default ReasonsToJoin