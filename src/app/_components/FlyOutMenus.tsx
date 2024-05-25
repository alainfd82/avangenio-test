"use client";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { navigation } from "../consts";
import { classNames } from "../helpers";
import Link from "next/link";

const FlyOutMenus = () => {
  return (
    <div className='hidden h-full lg:flex'>
      {/* Flyout menus */}
      <PopoverGroup className='inset-x-0 bottom-0 px-4'>
        <div className='flex h-full justify-center space-x-4'>
          {navigation.categories.map((category) => (
            <Popover key={category.name} className='flex'>
              {({ open }) => (
                <>
                  <div className='relative flex'>
                    <PopoverButton className='relative z-10 flex items-center justify-center text-xs font-medium text-black transition-colors duration-200 ease-out'>
                      {category.name}{" "}
                      {category.teams.length > 0 && open ? (
                        <ChevronUpIcon
                          className='h-5 w-5 text-black'
                          aria-hidden='true'
                        />
                      ) : (
                        <ChevronDownIcon
                          className='h-5 w-5 text-black'
                          aria-hidden='true'
                        />
                      )}
                      <span
                        className={classNames(
                          open ? "bg-black" : "",
                          "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                        )}
                        aria-hidden='true'
                      />
                    </PopoverButton>
                  </div>

                  <Transition
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <PopoverPanel className='absolute inset-x-0 top-full text-xs text-gray-500'>
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        className='absolute inset-0 top-1/2 bg-white shadow'
                        aria-hidden='true'
                      />

                      <div className='relative bg-gray-50'>
                        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                          <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                            {category.teams.map((item) => (
                              <div key={item.name} className='group relative'>
                                <div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className='object-cover object-center'
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className='mt-4 block font-medium text-gray-900'>
                                  <span
                                    className='absolute inset-0 z-10'
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </a>
                                <p aria-hidden='true' className='mt-1'>
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}

          {navigation.pages.map((page) => (
            <Link
              href={page.href}
              key={page.name}
              className='flex items-center text-xs font-medium text-black hover:cursor-pointer'>
              <div>{page.name}</div>
            </Link>
          ))}
        </div>
      </PopoverGroup>
    </div>
  );
};

export default FlyOutMenus;
