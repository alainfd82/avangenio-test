import { createContext, useState } from "react";

export const MobileMenuContext = createContext({
  isOpen: false,
  setIsOpen: (_arg: boolean) => {},
});

export const MobileMenuProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //@ts-ignore
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
