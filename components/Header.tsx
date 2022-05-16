import Image from "next/image";
import React from "react";
import _ from "lodash";

import Search from "../assets/svg/search";
import { ConnectButton } from "web3uikit";

const Header = () => {
  const menus = [
    { title: "Cryptocurrencies", route: "", badge: true },
    { title: "Exchanges", route: "", badge: false },
    { title: "NFT", route: "", badge: true },
    { title: "Cryptown", route: "", badge: true },
    { title: "Portfolio", route: "", badge: false },
    { title: "Watchlist", route: "", badge: false },
    { title: "Products", route: "", badge: true },
    { title: "Learn", route: "", badge: false },
  ];

  return (
    <div className="bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]">
      <Image
        alt=""
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        width={220}
        height={220}
      />
      <div className="flex justify-center h-full max-w-screen-xl px-4 mx-auto">
        <nav className="flex justify-center items-center gap-[20px]">
          {_.map(menus, (menu, index) => (
            <div
              className="relative mr-1 cursor-pointer hover:opacity-60"
              key={`menu_${index}`}
            >
              <div className="text-white flex mx-[10px]">{menu.title}</div>
              {menu.badge && (
                <div className="absolute right-0 w-1 h-1 bg-blue-600 rounded-full bottom-5 top-1 ring-4" />
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center">
          <ConnectButton />
          <div className="flex items-center justify-center p-2 rounded bg-[#171924]">
            <Search />
            <input
              className="ml-3 text-white bg-transparent outline-none w-70"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
