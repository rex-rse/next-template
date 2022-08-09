import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex justify-center ">
      <Image className="h-screen max-w-4xl" src="/404.svg" alt="noEncontrado" />
    </div>
  );
};

export default NotFound;
