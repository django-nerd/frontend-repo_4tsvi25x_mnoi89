import React from 'react';
import { Home, LogIn, FilePlus2, LayoutGrid, ReceiptText, FileChartColumn } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </a>
);

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2 flex-wrap">
        <NavItem icon={Home} label="Home" href="/" />
        <NavItem icon={LogIn} label="Login" href="/login" />
        <NavItem icon={LayoutGrid} label="Dashboard" href="/dashboard" />
        <NavItem icon={FilePlus2} label="Add Material" href="/add-material" />
        <NavItem icon={FileChartColumn} label="Reports" href="/reports" />
        <NavItem icon={ReceiptText} label="Receipts" href="/receipts" />
      </div>
    </nav>
  );
}
