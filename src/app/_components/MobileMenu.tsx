import {
  Dialog,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../consts";
import { classNames } from "../helpers";
import { Fragment, useContext, useState } from "react";
import { MobileMenuContext } from "@/store/providers/MobileMenuProvider";

const MobileMenu = () => {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext);

  return (
    <Transition show={isOpen}>
      <Dialog className='relative z-40 lg:hidden' onClose={setIsOpen}>
        <TransitionChild
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 z-40 flex justify-end'>
          <TransitionChild
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='-translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='-translate-x-0'
            leaveTo='translate-x-full'>
            <DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <div className='flex px-4 pb-2 pt-5 justify-end'>
                <button
                  type='button'
                  className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                  onClick={() => setIsOpen(false)}>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <TabGroup className='mt-2'>
                <div className='border-b border-gray-200'>
                  <TabList className='-mb-px flex space-x-8 px-4'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-black text-gray-600"
                              : "border-transparent text-gray-900",
                            "flex-1 flex-r whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          )
                        }>
                        {category.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <TabPanels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <TabPanel
                      key={category.name}
                      className='space-y-12 px-4 py-6'>
                      <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        {category.teams.map((item) => (
                          <div key={item.name} className='group relative'>
                            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='object-cover object-center'
                              />
                            </div>
                            <a
                              href={item.href}
                              className='mt-6 block text-xs font-medium text-gray-900'>
                              <span
                                className='absolute inset-0 z-10'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden='true'
                              className='mt-1 text-xs text-gray-500'>
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 block p-2 font-medium text-gray-900'>
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='-m-2 block p-2 font-medium text-gray-900'>
                    Contact
                  </a>
                </div>
                <div className='flow-root'>
                  <button className='w-full text-xs font-medium text-white bg-black px-4 py-2 rounded-full block'>
                    Get Started
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
