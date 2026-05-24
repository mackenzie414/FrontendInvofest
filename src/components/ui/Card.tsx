import { type ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-zinc-50 rounded-xl shadow-gray-100 relative overflow-hidden flex flex-col border">
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#8b2551]"></div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#8b2551] mb-3">{title}</h3>
        <p className={`text-slate-600 text-sm leading-relaxed ${children ? 'mb-6' : ''}`}>
          {description}
        </p>
        {children && (
          <div className="mt-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}