import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Smt. Kamala and Shri Venkappa M. Agadi College of Engineering and technology Laxmeshwar-582116. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
