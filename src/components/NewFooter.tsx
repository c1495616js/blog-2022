import React from 'react';

import { useRouter } from 'next/navigation';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { IoGitBranchOutline } from '@react-icons/all-files/io5/IoGitBranchOutline';
import { VscError } from '@react-icons/all-files/vsc/VscError';
import { VscWarning } from '@react-icons/all-files/vsc/VscWarning';
import { FaRegClock } from '@react-icons/all-files/fa/FaRegClock';
import { BiRefresh } from '@react-icons/all-files/bi/BiRefresh';

const NewFooter = () => {
  const router = useRouter();
  return (
    <footer className="flex h-7 select-none items-center justify-between divide-x divide-main border-t border-main text-xs text-white-faded">
      <div className="flex h-full items-center">
        <a
          href="https://github.com/c1495616js/blog-2022"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repository link"
          className="flex h-full items-center gap-1.5 px-1.5 transition-colors hover:text-white"
        >
          <IoGitBranchOutline className="text-sm" />
          <span>main*</span>
        </a>
        <button
          aria-label="refresh"
          className="group flex h-full w-8 items-center justify-center transition-colors hover:text-white"
          onClick={() => router.refresh()}
        >
          <BiRefresh className="text-lg transition-transform group-active:rotate-180" />
        </button>
        <a
          href="https://github.com/c1495616js/blog-2022"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repository link"
          className="hidden h-full items-center gap-1.5 px-1.5 transition-colors hover:text-white lg:flex"
        >
          <FaRegClock className="text-sm" />
          <span>{`${new Date().getHours()} hrs ${new Date().getMinutes()} mins`}</span>
        </a>
        <div className="hidden h-full items-center justify-center gap-1 px-1.5 lg:flex">
          <VscError className="text-sm" />
          <span className="font-sans">0</span>
          <VscWarning className="text-sm" />
          <span className="font-sans">0</span>
        </div>
        <div className="flex h-full items-center justify-center">
          <span className="px-1.5">--NORMAL--</span>
        </div>
      </div>
      <div className="flex h-full items-center divide-x divide-main">
        <a
          href="https://twitter.com/c1495616"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on twitter"
          className="flex h-7 w-7 items-center justify-center transition-colors hover:text-white"
        >
          <AiOutlineTwitter className="text-base" />
        </a>

        <a
          href="https://github.com/c1495616js"
          className="flex h-full items-center gap-1.5 px-2.5 transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on github"
        >
          <span>@c1495616js</span>
          <AiOutlineGithub className="text-base" />
        </a>
      </div>
    </footer>
  );
};

export default NewFooter;
