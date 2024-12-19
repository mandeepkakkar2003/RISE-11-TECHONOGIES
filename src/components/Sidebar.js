import { useState } from 'react';
import { FaHome, FaFolderOpen, FaCalendarAlt, FaFileAlt, FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, link: '/' },
    { name: 'My Cases', icon: <FaFolderOpen />, link: '/my-cases' },
    { name: 'Activities', icon: <FaCalendarAlt />, link: '/activities' },
    { name: 'Calendar', icon: <FaCalendarAlt />, link: '/calendar' },
    { name: 'Files', icon: <FaFileAlt />, link: '/files' },
    { name: 'Open a Dispute', icon: <FaBalanceScale />, link: '/open-dispute' },
  ];

  return (
    <aside className="bg-white w-64 border-r border-gray-200 flex flex-col">


      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b">
        <div className="text-indigo-600 font-bold text-4xl">Jur</div>
      </div>
      

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.link} 
                className={`flex items-center px-6 py-2 w text-sm font-medium hover:bg-indigo-50 transition 
                  ${active === item.name ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'}`}
                onClick={() => setActive(item.name)}
              >
                
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>



          {/* Footer */}
      <div className="p-0 border-t border-gray-200">
        <div className="bg-blue-50  rounded-md text-center">
          <img 
            src="/a.webp"
            alt="Judge Illustration"
            className="mx-auto mb-2 h-auto w-full object-cover"
          />
          <p className="text-sm font-medium mb-6 font-extrabold ">Get Justice on every Claims</p>
        </div>
      </div>


      
    </aside>
  );
}
