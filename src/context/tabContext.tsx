import {
  Dispatch,
  SetStateAction,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from 'react';
import { usePathname } from 'next/navigation';

type Tabs = {
  Tab: Props[];
  setTab: Dispatch<SetStateAction<Props[]>>;
};

interface Props {
  children: string;
  href: string;
}

export const Context = createContext<Tabs>({
  Tab: [],
  setTab: () => {},
} as Tabs);

export const TabContext = ({ children }: PropsWithChildren<{}>) => {
  const pathname = usePathname();
  const [Tab, setTab] = useState<Props[]>([]);

  return (
    <Context.Provider value={{ Tab, setTab }}>{children}</Context.Provider>
  );
};

export const useTabs = () => useContext(Context);
