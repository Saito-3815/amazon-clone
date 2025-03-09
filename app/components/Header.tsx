"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={`link ${className || ""}`}>
      {children}
    </Link>
  );
}

function SearchBar() {
  "use client";

  return (
    <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
      <input
        type="text"
        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
      />
      <Search className="h-12 p-4" />
    </div>
  );
}

function CartButton() {
  return (
    <div className="relative link flex items-center">
      <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
        0
      </span>
      <ShoppingCart className="h-10" />
      <p className="hidden md:inline font-extrabold md:text-sm mt-2">カート</p>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#131921] text-white">
      {/* Top Nav */}
      <div className="flex items-center p-2 flex-grow">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href="/">
            <Image
              src="https://links.papareact.com/f90"
              alt="Amazon Logo"
              width={150}
              height={40}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        <SearchBar />

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>アカウント</p>
            <p className="font-extrabold md:text-sm">サインイン</p>
          </div>

          <div className="link">
            <p>返品も</p>
            <p className="font-extrabold md:text-sm">注文履歴</p>
          </div>

          <CartButton />
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="flex items-center space-x-3 p-2 pl-6 bg-[#232F3E] text-white text-sm">
        <p className="link flex items-center">
          <Menu className="h-6 mr-1" />
          すべて
        </p>
        <NavLink href="/prime">プライム</NavLink>
        <NavLink href="/books">本</NavLink>
        <NavLink href="/fashion">ファッション</NavLink>
        <NavLink href="/food">食品・飲料</NavLink>
        <NavLink href="/electronics">家電・カメラ</NavLink>
        <NavLink href="/pc" className="hidden lg:inline-flex">
          パソコン・オフィス
        </NavLink>
        <NavLink href="/home" className="hidden lg:inline-flex">
          ホーム＆キッチン
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
