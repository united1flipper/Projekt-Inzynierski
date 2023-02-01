import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri"
import {FaCoins} from "react-icons/fa"
import {MdOutlineSpeed} from "react-icons/md"

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start blue-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);


const Services = () => {
  return (
    <div className="flex w-full justify-center items-center">
       <div className="">

        <div className="">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Bezpieczeństwo"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Dzięki interakcji z wirtualnym portfelem użytkownik może w bezpieczny sposób dokonywać transakcji"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Niskie opłaty"
          icon={<FaCoins fontSize={21} className="text-white" />}
          subtitle="Użytkownik wykonujący transakcję na Ethereum pokrywa niskie koszty przeprowadzenia transakcji."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Szybkość"
          icon={<MdOutlineSpeed fontSize={21} className="text-white" />}
          subtitle="Token Wise zapewnia szybki czas przetwarzania transakcji w porównaniu do sieci"
        />
      </div>
      <br/>
       </div>
    
    </div>
  )
}

export default Services