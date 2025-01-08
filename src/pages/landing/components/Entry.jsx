import { useState } from "react";
import CustomSelect from "./CustomSelect";

const Entry = () => {
    const [selectedLanguage, setSelectedLanguage]=useState("English")
    const languages=["English","Russian"]
    return (
        <div className="max-w-[1440px] mx-auto max-h-[740px] w-full h-screen px-[9rem] bg-cover bg-no-repeat bg-center  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')] bg-black/75 bg-blend-overlay ">
            <div className="flex items-center justify-between pt-5">
                <img className="w-[150px]" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <div className='flex items-center gap-2 h-[35px]  '>

                    <CustomSelect  options={languages} selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} logo={ <svg xmlns="http://www.w3.org/2000/svg" className="text-white  absolute top-2 left-3" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>}/>
                    <button className='bg-[#e50914] hover:bg-[#ce272ffb] transition duration-100 ease-in px-4 h-full text-white font-semibold rounded'><a href="/login">Sign In</a></button>

                </div>
            </div>
            <div className="w-[620px] h-fit mx-auto pt-[90px] text-center text-white">
                <h1 className="text-[67px] font-bold leading-[80px]">Unlimited movies, TV shows, and more</h1>
                <p className="font-bold text-[20px]   ">Starts at EUR 7.99. Cancel anytime.</p>
                <h3 className="font-medium text-[17px] mt-[25px] ">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='w-fit h-[56px] mt-[15px]  rounded flex '>
                    <input placeholder="Email address" className='opacity-90 pl-4 w-[366px] h-[56px] rounded text-left border-[1px] border-zinc-400 focus:outline-white outline-2 outline-offset-2 text-white   relative bg-zinc-900 " ' type="text" />
                    <button className='bg-[#e50914]  w-[218px] ml-2 flex gap-1 hover:bg-[#ce272ffb] transition duration-100 ease-in justify-center items-center text-white font-medium text-[30px] rounded '>Get Started  <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
                </div>



            </div>

        </div>
    )
}
export default Entry