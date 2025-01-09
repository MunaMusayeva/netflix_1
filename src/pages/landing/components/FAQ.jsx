import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const items = [
    {
      title: 'What is Netflix?',
      desc: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.[break] You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
      id: 1,
    },
    {
      title: 'How much does Netflix cost?',
      desc: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₺63.99 to ₺130.99 a month. No extra costs, no contracts.',
      id: 2,
    },
    {
      title: 'Where can I watch?',
      desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.[break] You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      id: 3,
    },
    {
      title: 'How do I cancel?',
      desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      id: 4,
    },
    {
      title: 'What can I watch on Netflix?',
      desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      id: 5,
    },
    {
      title: 'Is Netflix good for kids?',
      desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.[break] Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      id: 6,
    },
    {
      title: 'Why am I seeing this language?',
      desc: "Your browser preferences determine the language shown here.",
      id: 7,
    },
  ];

  return (
    <div className="w-full  mx-auto  px-[9rem] mt-8">
      <h2 className="text-[32px] text-white font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            openAccordion={openAccordion}
            setOpenAccordion={setOpenAccordion}
          />
        ))}
      </div>
      <div className='text-center mt-[70px] '>

        <h3 className="font-medium text-[17px] mt-[25px] text-white ">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='w-fit h-[56px] mt-[15px] px-[11.5rem]  rounded flex mb-[70px]'>
          <input placeholder="Email address" className='opacity-90 pl-4 w-[561px] h-[56px] rounded text-left border-[1px] border-zinc-400 focus:outline-white outline-2 outline-offset-2 text-white   relative bg-zinc-900 " ' type="text" />
          <button className='bg-[#e50914]  w-[218px] ml-2 flex gap-1 hover:bg-[#ce272ffb] transition duration-100 ease-in justify-center items-center text-white font-medium text-[30px] rounded '>Get Started  <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;