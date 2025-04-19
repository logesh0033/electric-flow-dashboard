
import { Home, FileText, Users, BarChart2, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Sidebar = () => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-8">
        <div className="h-8 w-8 rounded-full bg-blue-600 mr-2 flex items-center justify-center">
          <span className="text-white font-bold">E</span>
        </div>
        <h2 className="text-xl font-bold">ElectricFlow</h2>
      </div>
      
      <nav className="space-y-1">
        <SidebarItem icon={<Home className="h-5 w-5" />} label="Dashboard" active />
        <SidebarItem icon={<FileText className="h-5 w-5" />} label="Billing" />
        <SidebarItem icon={<Users className="h-5 w-5" />} label="Customers" />
        <SidebarItem icon={<BarChart2 className="h-5 w-5" />} label="Reports" />
        <SidebarItem icon={<Settings className="h-5 w-5" />} label="Settings" />
      </nav>
      
      <div className="absolute bottom-4">
        <button 
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, active = false }: SidebarItemProps) => {
  return (
    <a
      href="#"
      className={`flex items-center p-2 rounded-md ${
        active 
          ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200" 
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

export default Sidebar;
