import { useRouter } from 'next/router';
import React from 'react';

interface TCardProps {
  title: string;
  data: string;
  icon: React.ReactNode;
  href: string;
}

const Card = ({ title, data, icon, href }: TCardProps) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(href);
  };
  return (
    <button
      onClick={handleClick}
      className="flex aspect-[7/3] w-full rounded-lg  text-black shadow-lg hover:shadow-xl bg-gradient-to-l from-emerald-700 to-emerald-600 transition-all delay-100 duration-200 hover:from-emerald-600 hover:to-emerald-600"
    >
      <div className="flex w-1/3 items-center self-center justify-center p-2 text-white">
        {icon}
      </div>
      <div className="flex w-2/3 flex-col text-left h-full p-2">
        <h1 className="lg:text-3xl text-2xl font-bold text-white">{title}</h1>
        <h2 className="text-4xl lg:text-5xl text-white">{data}</h2>
      </div>
    </button>
  );
};

export default Card;
