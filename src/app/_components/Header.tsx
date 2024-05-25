"use client";
import MobileMenu from "./MobileMenu";
import FlyOutMenus from "./FlyOutMenus";
import MobileMenuButton from "./MobileMenuButton";
import { MobileMenuProvider } from "@/store/providers/MobileMenuProvider";
import Link from "next/link";

const Header = () => {
  return (
    <MobileMenuProvider>
      <MobileMenu />

      <div className='relative'>
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Navigation */}
            <div className='bg-white'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div>
                  <div className='flex h-16 items-center justify-between'>
                    {/* Logo (lg+) */}
                    <div className='hidden lg:flex lg:flex-1 lg:items-center'>
                      <Link href='/'>
                        <div className='flex space-x-1 items-center hover:cursor-pointer'>
                          <span className='sr-only'>Your Company</span>
                          <img
                            className='h-6 w-auto'
                            src='https://tailwindui.com/img/logos/mark.svg?color=black'
                            alt=''
                          />
                          <span className='text-black'>/ Business Finance</span>
                        </div>
                      </Link>
                    </div>

                    <FlyOutMenus />

                    <MobileMenuButton />

                    {/* Logo (lg-) */}
                    <div className='lg:hidden order-1 justify-start w-full hover:cursor-pointer'>
                      <Link href='/'>
                        <div className='flex space-x-1 items-center'>
                          <span className='sr-only'>Your Company</span>
                          <img
                            src='https://tailwindui.com/img/logos/mark.svg?color=black'
                            alt=''
                            className='h-8 w-auto'
                          />
                          <span className='text-black text-lg'>
                            / Business Finance
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className='flex flex-1 items-center justify-end'>
                      <a
                        href='#'
                        className='hidden text-xs font-medium text-black lg:block'>
                        Contact
                      </a>

                      <button className='ml-2 hidden text-xs font-medium text-white bg-black px-4 py-2 rounded-full lg:block'>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </MobileMenuProvider>
  );
};

export default Header;
