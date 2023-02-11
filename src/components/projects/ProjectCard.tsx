import { Project } from '@/configs/projectConfigs';
import { Dialog, Transition } from '@headlessui/react';
import { GrReactjs } from '@react-icons/all-files/gr/GrReactjs';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: Project;
};

const ProjectCard = ({ data }: Props) => {
  const technology = data.stacks.join(', ');
  const [isOpen, setIsOpen] = useState(false);

  function generateIcon(value: string) {
    if (value.includes('NextJS')) {
      return <SiNextDotJs />;
    }
    if (value.includes('ReactJS')) {
      return <GrReactjs />;
    }
  }

  return (
    <>
      <motion.div
        className="flex h-[400px] flex-col items-center overflow-hidden rounded-2xl border border-[#1E2D3D] bg-[#001221]/50 transition-colors hover:shadow-sm hover:shadow-[#607B96]"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="relative h-[80%] w-full overflow-hidden ">
          <Image
            width={150}
            height={150}
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover"
          />

          <div>
            <div className="absolute top-5 right-5 flex gap-2.5 rounded-[2px] text-lg">
              <div className="rounded-md bg-[#86E1F9] p-1 text-primary2">
                {generateIcon(technology)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[80%] w-full flex-col items-center justify-between py-6 px-8 text-[#607B96]">
          <div>
            <h6 className="mb-2.5 text-white">{data.title}</h6>
            <p className="mb-5 line-clamp-2">{data.description}</p>
          </div>
          <motion.button
            className="w-max rounded-lg bg-[#1b2b3a] py-2.5 px-3.5  text-white"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            view-project
          </motion.button>
        </div>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 backdrop-blur-0"
            enterTo="opacity-100 backdrop-blur-sm"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 backdrop-blur-sm"
            leaveTo="opacity-0 backdrop-blur-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#1d2a3a] text-left align-middle shadow-xl transition-all">
                  <div className="h-96">
                    <Image
                      width={700}
                      height={400}
                      src={data.image}
                      alt={data.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <article className="p-5 ">
                    <Dialog.Title
                      as="h3"
                      className="mb-2.5 text-xl font-semibold leading-6 text-white"
                    >
                      {data.title}
                    </Dialog.Title>
                    <p className="mb-2.5 text-white/80">{data.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Link
                          href={data.link}
                          target="_blank"
                          className="rounded-md border border-primary2 bg-primary2 p-2 text-white/80 hover:bg-transparent"
                          rel="noreferrer"
                        >
                          Demo
                        </Link>

                        <Link
                          href={data.github}
                          target="_blank"
                          className="rounded-md border border-primary2 p-2 text-white/80  hover:bg-primary2"
                          rel="noreferrer"
                        >
                          Github
                        </Link>
                      </div>
                      <p className="text-white/80">Tech Stack: {technology}</p>
                    </div>
                  </article>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;
