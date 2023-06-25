import HeadMenu from "./HeadMenu";

import Link from "next/link";

const Menu = ({ toggleMenu, user, isAdmin }) => {
  const menuOptions = [
    {
      name: "Hombres",
      path: "/hombres",
    },
    {
      name: "Mujeres",
      path: "/mujeres",
    },
  ];

  return (
    <div className="h-auto w-64 absolute my-14 bg-gray-800 p-2 flex flex-col z-10">
      <HeadMenu toggleMenu={toggleMenu} user={user} />
      {isAdmin && (
        <Link href="/dashboard" className="p-1 my-1">
          Dashboard
        </Link>
      )}
      {menuOptions.map((menuOption, index) => (
        <Link
          key={menuOption.name + index}
          href={menuOption.path}
          className="p-1 my-1"
        >
          {menuOption.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
