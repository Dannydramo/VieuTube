import React, { Fragment } from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const contents = [
    { name: "New" },
    { name: "Music" },
    { name: "JsMastery" },
    { name: "ReactJs" },
    { name: "NextJs" },
    { name: "Movies" },
    { name: "Python" },
    { name: "Coding" },
    { name: "React Native" },
    { name: "Football" },
    { name: "Cooking" },
    { name: "Frontend" },
    {name: 'News'},
    {name: 'Jenifa'},
    {name: 'Computers'},
    {name: 'Manchester United F.C.'}
  ];

  return (
    <Fragment>
      <div className="w-full items-center text-center justify-between flex overflow-x-auto">
        {contents.map((category) => (
          <button
            className={`px-2 mr-2 min-w-[20%] text-center flex justify-between xl:min-w-0 rounded hover:text-black ${
              category.name === selectedCategory && "bg-[#d4d1d1]"
            } hover:bg-[#d4d1d1]`}
            onClick={() => setSelectedCategory(category.name)}
            key={category.name}
          >
            <span className="text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default Sidebar;
