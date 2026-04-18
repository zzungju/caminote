'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DiaryIcon from '@/assets/icons/Book_Open.svg?react';
import HomeIcon from '@/assets/icons/House_01.svg?react';
import InfoIcon from '@/assets/icons/Circle_Help.svg?react';
import SettingsIcon from '@/assets/icons/Settings.svg?react';

type NavItem = {
  href: string;
  icon: typeof HomeIcon;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/', icon: HomeIcon, label: '홈' },
  { href: '/diary', icon: DiaryIcon, label: '일기' },
  { href: '/info', icon: InfoIcon, label: '정보' },
  { href: '/settings', icon: SettingsIcon, label: '설정' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 z-50 flex w-full h-22 items-start justify-between border-t border-gray-200 bg-white px-[38px] py-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex w-6 flex-col items-center gap-1 ${
              active ? 'text-primary-500' : 'text-gray-400'
            }`}
          >
            <Icon className="size-6 shrink-0" aria-hidden />
            <span className="text-12 text-700 leading-none">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default BottomNav;