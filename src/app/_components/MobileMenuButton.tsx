import { MobileMenuContext } from "@/store/providers/MobileMenuProvider";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";

const MobileMenuButton = () => {
  const { setIsOpen } = useContext(MobileMenuContext);

  return (
    <div className='flex flex-1 items-center lg:hidden order-2 justify-end'>
      <button
        type='button'
        className='-ml-2 p-2 text-black'
        onClick={() => setIsOpen(true)}>
        <span className='sr-only'>Open menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default MobileMenuButton;
