import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ButtonNav = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <button type="button">
      <Link
        href={href}
        className={`border-b-2 border-r border-r-main py-4.5 px-4 transition-colors hover:text-primary2 dark:hover:text-white ${
          (pathname === '/' && href === '/') ||
          (href !== '/' && pathname?.includes(href))
            ? ' border-b-custom-orange text-primary2 dark:text-white'
            : 'border-b-transparent'
        }`}
      >
        {children}
      </Link>
    </button>
  );
};

export default ButtonNav;
