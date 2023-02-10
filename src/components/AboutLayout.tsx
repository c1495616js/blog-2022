import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import { GoTriangleRight } from '@react-icons/all-files/go/GoTriangleRight';
import { VscCollapseAll } from '@react-icons/all-files/vsc/VscCollapseAll';
import { HiChevronRight } from '@react-icons/all-files/hi/HiChevronRight';
import { RiFolder3Fill } from '@react-icons/all-files/ri/RiFolder3Fill';
import { IoLogoJavascript } from '@react-icons/all-files/io5/IoLogoJavascript';
import { SiMarkdown } from '@react-icons/all-files/si/SiMarkdown';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { useTabs } from '@/context/tabContext';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Tab, setTab } = useTabs();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="grid h-full grid-cols-12 divide-x divide-main">
      <Aside />
      <div className="col-span-10 overflow-hidden">
        <div className="h-full">
          {Tab.length > 0 && (
            <nav className="grid select-none grid-cols-12 border-b border-main">
              {Tab.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => router.push(tab.href)}
                  className={`relative col-span-2 flex items-center justify-between border-r border-main py-2.5 px-4 text-left transition-colors hover:text-white ${
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

          {children}
        </div>
      </div>
    </div>
  );
}

const Aside = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="col-span-2 h-full select-none">
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
          <span>personal info</span>
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
              <Folder />
            </Popover.Group>
          </Popover.Panel>
        </Transition>
      </Popover>
    </aside>
  );
};

const Folder = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname?.startsWith('/about/') && true);
  return (
    <>
      <button
        className={`
      mb-2 flex w-full items-center gap-2.5 transition-colors 
      ${open ? 'text-white' : 'text-white-faded'}
      `}
        onClick={() => setOpen(!open)}
      >
        <HiChevronRight
          className={`${open && 'rotate-90'} transition-transform`}
        />
        <RiFolder3Fill
          className={`${open ? 'text-[#E99287]' : 'text-[#b36d64]'}`}
        />
        <span className="truncate pr-5">bio</span>
      </button>
      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-linear duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        className={`flex flex-col gap-2 text-white-faded`}
      >
        <FolderItemButton icon={<IoLogoJavascript />} href="/about/work">
          work.js
        </FolderItemButton>
        <FolderItemButton icon={<IoLogoJavascript />} href="/about/personal">
          personal.js
        </FolderItemButton>
      </Transition>
    </>
  );
};

const FolderItemButton = ({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href: string;
  children: string;
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
