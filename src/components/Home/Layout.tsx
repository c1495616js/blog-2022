import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function Layout({ children, setIsNavbar, isNavbar }: any) {
  // For toggle navbar on mobile
  const [navbar, setNavbar] = useState(false);

  const [windowDimenion, detectHW] = useState({
    winWidth: 300,
    winHeight: 500,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    if (windowDimenion.winHeight > 768) {
      setNavbar(false);
    }

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);
  // bg-[#010c15]
  return (
    <div
      className="flex h-screen items-center justify-center bg-[#010c15] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("tower-nord.webp")` }}
    >
      <div className="custom-size flex flex-col justify-between overflow-hidden rounded-lg border border-[#1E2D3D] bg-[#011627]/[85%] backdrop-blur-md">
        <header className="grid grid-cols-12  items-center border-b border-[#1E2D3D] text-[#607B96]">
          <div className="col-span-11 border-[#1E2D3D] py-4 pl-4 lg:col-span-2 lg:border-r">
            <span>Jerry Wang</span>
          </div>

          {/* Navbar  Desktop*/}
          <div className="col-span-10 hidden lg:block">
            <nav className="flex items-center justify-between">
              <div>
                <button
                  className={`h-full border-r border-b-2 border-r-[#1E2D3D] px-5 py-4 transition-all hover:text-white ${
                    isNavbar === '/'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-transparent'
                  }`}
                  onClick={() => {
                    setIsNavbar('/');
                  }}
                >
                  _hello
                </button>
                <button
                  className={`h-full border-r border-b-2 border-r-[#1E2D3D] px-5 py-4 transition-all hover:text-white ${
                    isNavbar === '/posts'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-transparent'
                  }`}
                  onClick={() => {
                    setIsNavbar('/posts');
                  }}
                >
                  <Link href="/posts">_posts</Link>
                </button>
                <button
                  className={`h-full border-r border-b-2 border-r-[#1E2D3D] px-5 py-4 transition-all hover:text-white ${
                    isNavbar === 'about-me'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-transparent'
                  }`}
                  onClick={() => {
                    setIsNavbar('about-me');
                  }}
                >
                  _about-me
                </button>
                <button
                  className={`h-full border-r border-b-2 border-r-[#1E2D3D] px-5 py-4 transition-all hover:text-white ${
                    isNavbar === 'projects'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-transparent'
                  }`}
                  onClick={() => {
                    setIsNavbar('projects');
                  }}
                >
                  _projects
                </button>
              </div>

              <button
                id="border-b"
                className={`h-full border-l border-b-2 border-l-[#1E2D3D] px-5 py-4 transition-all hover:text-white ${
                  isNavbar === 'contact-me'
                    ? 'border-b-2 border-[#FEA55F] text-white'
                    : 'border-b-transparent'
                }`}
                onClick={() => {
                  setIsNavbar('contact-me');
                }}
              >
                _contact-me
              </button>
            </nav>
          </div>

          {/* Navbar Mobile */}
          {navbar ? (
            <button
              className="block justify-self-center text-xl lg:hidden"
              onClick={() => setNavbar((setNavbar) => !setNavbar)}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="block justify-self-center text-xl lg:hidden"
              onClick={() => setNavbar((setNavbar) => !setNavbar)}
            >
              <FiMenu />
            </button>
          )}
        </header>

        {/* Navbar mobile */}
        <AnimatePresence>
          {navbar ? (
            <motion.div
              className="flex h-full flex-col"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="flex h-full flex-col text-white">
                <button
                  className={`w-full border-b px-5  py-4 text-left transition-all ${
                    isNavbar === '/'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-[#1E2D3D]'
                  }`}
                  onClick={() => {
                    setIsNavbar('/');
                    setNavbar(false);
                  }}
                >
                  _hello
                </button>
                <button
                  className={`w-full border-b px-5  py-4 text-left transition-all ${
                    isNavbar === 'about-me'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-[#1E2D3D]'
                  }`}
                  onClick={() => {
                    setIsNavbar('about-me');
                    setNavbar(false);
                  }}
                >
                  _about-me
                </button>
                <button
                  className={`w-full border-b px-5  py-4 text-left transition-all ${
                    isNavbar === 'projects'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-[#1E2D3D]'
                  }`}
                  onClick={() => {
                    setIsNavbar('projects');
                    setNavbar(false);
                  }}
                >
                  _projects
                </button>
                <button
                  className={`w-full border-b px-5  py-4 text-left transition-all ${
                    isNavbar === 'contact-me'
                      ? 'border-b-2 border-[#FEA55F] text-white'
                      : 'border-b-[#1E2D3D]'
                  }`}
                  onClick={() => {
                    setIsNavbar('contact-me');
                    setNavbar(false);
                  }}
                >
                  _contact-me
                </button>
              </div>

              <footer className="block lg:hidden">
                <div className="grid grid-cols-12 border-t border-[#1E2D3D] px-5 text-[#607B96]">
                  <div className="col-span-11 flex items-center">
                    <p className="py-1.5 pr-4">find me in:</p>
                    <a
                      href="https://twitter.com/c1495616"
                      target="_blank"
                      rel="noreferrer"
                      className="border-x border-[#1E2D3D] px-2.5 py-2.5 transition-colors hover:text-white"
                      aria-label="Follow me on twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <a
                      href="https://github.com/c1495616js"
                      className="flex items-center justify-center gap-1.5 border-l border-[#1E2D3D] py-1.5 pl-4 transition-colors hover:text-white"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Follow me on github"
                    >
                      <span className="hidden">Jerry Wang</span>
                      <AiOutlineGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </footer>
            </motion.div>
          ) : (
            <main className="h-full w-full self-center overflow-hidden">
              {children}
            </main>
          )}
        </AnimatePresence>
        <footer className="hidden grid-cols-12 border-t border-[#1E2D3D] text-[#607B96] lg:grid">
          <div className="col-span-2 flex items-center">
            <p className="truncate px-4 py-1.5">find me in:</p>
            <a
              href="https://twitter.com/c1495616"
              target="_blank"
              rel="noreferrer"
              className="border-x border-[#1E2D3D] px-2.5 py-2.5 transition-colors hover:text-white"
              aria-label="Follow me on twitter"
            >
              <AiOutlineTwitter />
            </a>
          </div>
          <div className="col-span-10 flex items-center justify-end ">
            <a
              href="https://github.com/c1495616js"
              className="flex items-center justify-center gap-1.5 border-l border-[#1E2D3D] py-1.5 pl-4 pr-4 transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on github"
            >
              <span>Jerry Wang</span>
              <AiOutlineGithub className="text-xl" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
