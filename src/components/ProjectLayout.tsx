import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import { GoTriangleRight } from '@react-icons/all-files/go/GoTriangleRight';
import { VscCollapseAll } from '@react-icons/all-files/vsc/VscCollapseAll';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { useTabs } from '@/context/tabContext';
import { GrReactjs } from '@react-icons/all-files/gr/GrReactjs';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import SlideIn from './animation/SlideIn';
import { Stack } from '@/configs/projectConfigs';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const [filter, setFilter] = React.useState<Stack | 'all'>('all');
  const { Tab, setTab } = useTabs();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SlideIn>
      <div className="grid h-full grid-cols-12 divide-x divide-main">
        <Aside filter={filter} setFilter={setFilter} />
        <div className="col-span-12 overflow-hidden sm:col-span-10">
          <div className="h-full">
            {Tab.length > 0 && (
              <nav className="grid select-none grid-cols-12 border-b border-main">
                {Tab.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => router.push(tab.href)}
                    className={`relative col-span-4 flex items-center justify-between border-r border-main py-2.5 px-4 text-left transition-colors hover:text-white sm:col-span-2 ${
                      tab.href === pathname ? 'text-white' : 'text-white-faded'
                    }`}
                  >
                    <span>{tab.children}</span>
                    <button
                      className="text-white-faded hover:text-white"
                      onClick={() => {
                        setTab((prev) => prev.filter((t) => t !== tab));
                        router.push(Tab[0].href); //NEED TO FIX IT LATER
                      }}
                    >
                      <IoClose />
                    </button>
                  </button>
                ))}
              </nav>
            )}

            {React.cloneElement(children, { filter })}
          </div>
        </div>
      </div>
    </SlideIn>
  );
}

const Aside = ({ filter, setFilter }: any) => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="col-span-12 h-full select-none sm:col-span-2">
      <Popover>
        <Popover.Button
          className={`
              ${open ? 'text-white' : 'text-white-faded'}
              relative flex w-full items-center gap-2.5 border-b border-main py-2.5 px-4 focus-visible:outline-none`}
          onClick={() => setOpen(!open)}
        >
          <GoTriangleRight
            className={`
                ${open && 'rotate-90'} 
                transition-transform`}
          />
          <span>project info</span>
          <VscCollapseAll className="absolute top-1/2 right-4 -translate-y-1/2" />
        </Popover.Button>
        <Transition
          as={Fragment}
          show={open}
          enter="transition ease-in duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel>
            <Popover.Group className="p-4">
              <Folder filter={filter} setFilter={setFilter} />
            </Popover.Group>
          </Popover.Panel>
        </Transition>
      </Popover>
    </aside>
  );
};

const Folder = ({ filter, setFilter }: any) => {
  const pathname = usePathname();
  // const [open, setOpen] = useState(pathname?.startsWith('/projects/') && true);
  return (
    <>
      <Transition
        show
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-linear duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        className={`flex flex-col gap-2 text-white-faded`}
      >
        <FolderItemButton
          icon={<SiNextDotJs />}
          href="/projects/nextjs"
          setFilter={() => setFilter('NextJS')}
        >
          Next.js
        </FolderItemButton>
        <FolderItemButton
          icon={<GrReactjs />}
          href="/projects/reactjs"
          setFilter={() => setFilter('ReactJS')}
        >
          React.js
        </FolderItemButton>
      </Transition>
    </>
  );
};

const FolderItemButton = ({
  icon,
  href,
  children,
  setFilter,
}: {
  icon: React.ReactNode;
  href: string;
  children: string;
  setFilter: any;
}) => {
  const pathname = usePathname();
  const { setTab } = useTabs();

  return (
    <Link
      href={href}
      onClick={() => {
        setTab((prev) => {
          if (prev.find((tab) => tab.href === href)) return prev;
          return [...prev, { children, href }];
        });
        setFilter();
      }}
      className={`flex items-center gap-2.5 pl-6.5 transition-colors ${
        pathname === href && 'text-white'
      }`}
    >
      {icon}
      <span className="truncate">{children}</span>
    </Link>
  );
};
