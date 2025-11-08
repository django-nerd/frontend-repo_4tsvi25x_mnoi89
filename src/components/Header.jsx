import React from 'react';

const collegeName = "Smt. Kamala and Shri Venkappa M. Agadi College of Engineering and technology Laxmeshwar-582116";

export default function Header() {
  const [imgOk, setImgOk] = React.useState(true);
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        {imgOk ? (
          <img
            src="/mnt/data/82385ade-f848-401c-a2c1-d1cb86d9b2d9.png"
            alt="College Logo"
            className="h-12 w-12 object-contain shrink-0"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="h-12 w-12 shrink-0 rounded bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">
            <span className="text-sm">SKV</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h1 className="text-sm md:text-base font-semibold leading-tight text-gray-900">
            {collegeName}
          </h1>
          <p className="text-xs text-gray-500">Material Inward Management System</p>
        </div>
      </div>
    </header>
  );
}
