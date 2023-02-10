import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';
import CommandPaletteToggle from '@/components/CommandPaletteToggle';
import ButtonNav from './ButtonNav';

export default function NewHeader() {
  return (
    <header className="sticky top-0 z-10  py-3 backdrop-blur transition-colors  dark:bg-primary2 dark:bg-gray-900/60">
      <nav className="grid select-none grid-cols-12 divide-x divide-main border-b border-main text-[#999]  dark:text-white-faded">
        <h1 className="col-span-8 py-4 pl-4.5 hover:text-primary2 dark:hover:text-white sm:col-span-10 lg:col-span-2">
          <CustomLink href="/" aria-label={headerConfigs.title}>
            {headerConfigs.title}
          </CustomLink>
        </h1>
        <div className="col-span-4 flex items-center justify-between text-base leading-5 sm:col-span-2 sm:gap-1 lg:col-span-10">
          <ul className="hidden items-center lg:flex">
            {headerConfigs.navLinks.map((link) => (
              <li key={link.title}>
                <ButtonNav href={link.href}>{link.title}</ButtonNav>
              </li>
            ))}
          </ul>
          <aside className="flex">
            <ThemeSwitch />
            <CommandPaletteToggle />
            <MobileNav />
          </aside>
        </div>
      </nav>
    </header>
  );
}
