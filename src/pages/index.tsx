import ThemeSwitch from '@components/ThemeSwitch';

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-7xl font-bold text-black dark:text-white">
        Next JS and Tailwind CSS Template
      </p>
      <div className="my-4">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default index;
