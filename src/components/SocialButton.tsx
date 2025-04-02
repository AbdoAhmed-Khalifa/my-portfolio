import { ReactNode } from 'react';

export default function SocialButton({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      {children}
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-1 rounded-lg border border-gray-300 bg-gray-300 py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {title}
        <span></span>
      </span>
    </div>
  );
}
