import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-10 p-8">
      <div className="w-full lg:w-1/2">
        <div className="mb-20">
          <p className="text-lg text-white">Hi all. I am</p>
          <h1 className="text-5xl text-white md:text-5xl lg:text-6xl">
            Jerry Wang
          </h1>
          <h2 className=" flex items-center gap-3 text-xl text-[#E99287] md:text-2xl lg:text-3xl">
            <span className="animate-pulse">&#62;</span>
            <Typewriter
              options={{
                loop: true,
                wrapperClassName:
                  'text-[#E99287] lg:text-3xl md:text-2xl text-xl gap-3',
                cursorClassName:
                  'text-[#E99287] lg:text-3xl md:text-2xl text-xl gap-3',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('front-end.web(developer)_')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('react-enthusiast_')
                  .pauseFor(500)
                  .start();
              }}
            />
          </h2>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-white-faded">
            you can also see it on my Github page
          </p>
          <p>
            <span className="text-white-faded">const</span>{' '}
            <span className="text-[#43D9AD]">githubLink</span>{' '}
            <span className="text-white">=</span>{' '}
            <a
              href="https://github.com/c1495616js"
              className="text-[#E99287]"
              target="_blank"
              rel="noreferrer noopener"
            >
              &quot;https://github.com/c1495616js&quot;
            </a>
          </p>
        </div>
      </div>
      <div className="text-white-faded hidden lg:block lg:w-1/2">
        Hello! I am a passionate frontend software developer with a focus on
        React. I have a strong understanding of JavaScript, including the latest
        features and best practices, as well as experience with CSS-in-JS and
        TypeScript. I am always exploring new technologies and staying
        up-to-date with industry trends. I am dedicated to building accessible
        and user-friendly interfaces that provide the best possible experience
        for users. I am confident in my ability to create scalable,
        maintainable, and efficient applications, and I am excited to contribute
        my skills to new and challenging projects.
      </div>
    </div>
  );
}
