
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "@/components/Dashboard";
import BillingSection from "@/components/BillingSection";
import CustomersSection from "@/components/CustomersSection";
import ReportsSection from "@/components/ReportsSection";
import Sidebar from "@/components/Sidebar";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Electric Flow Dashboard",
      description: "Your one-stop solution for electricity billing management",
    });
  }, [toast]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Electric Flow Dashboard</h1>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="billing">
            <BillingSection />
          </TabsContent>
          
          <TabsContent value="customers">
            <CustomersSection />
          </TabsContent>
          
          <TabsContent value="reports">
            <ReportsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
