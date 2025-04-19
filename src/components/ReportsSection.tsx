
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, LineChart, PieChart, BarChart } from "lucide-react";

const ReportsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analytics & Reports</h2>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Reports
        </Button>
      </div>
      
      <Tabs defaultValue="usage">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Reports</TabsTrigger>
          <TabsTrigger value="customers">Customer Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usage" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard 
              title="Total Consumption" 
              value="342,856 kWh" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+12.5%"
              period="vs last month"
            />
            <MetricCard 
              title="Peak Usage Time" 
              value="6-8 PM" 
              icon={<BarChart className="h-4 w-4" />}
              trend="No change"
              period="vs last month"
            />
            <MetricCard 
              title="Avg. Daily Consumption" 
              value="11,428 kWh" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+8.2%"
              period="vs last month"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Usage Trends</CardTitle>
              <CardDescription>Year to date consumption data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                <p className="text-muted-foreground">Usage chart goes here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="revenue" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard 
              title="Total Revenue" 
              value="$1,245,856" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+18.3%"
              period="vs last month"
            />
            <MetricCard 
              title="Avg. Bill Amount" 
              value="$122.45" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+5.7%"
              period="vs last month"
            />
            <MetricCard 
              title="Collection Rate" 
              value="92%" 
              icon={<PieChart className="h-4 w-4" />}
              trend="+2.1%"
              period="vs last month"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Revenue Distribution</CardTitle>
              <CardDescription>By customer segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                <p className="text-muted-foreground">Revenue distribution chart goes here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard 
              title="Total Customers" 
              value="10,248" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+5.2%"
              period="vs last month"
            />
            <MetricCard 
              title="New Customers" 
              value="243" 
              icon={<LineChart className="h-4 w-4" />}
              trend="+12.8%"
              period="vs last month"
            />
            <MetricCard 
              title="Customer Retention" 
              value="97.8%" 
              icon={<PieChart className="h-4 w-4" />}
              trend="+0.5%"
              period="vs last month"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Distribution</CardTitle>
              <CardDescription>By location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                <p className="text-muted-foreground">Customer distribution chart goes here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  period: string;
}

const MetricCard = ({ title, value, icon, trend, period }: MetricCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span className={trend.includes("+") ? "text-green-500" : trend.includes("-") ? "text-red-500" : ""}>
            {trend}
          </span> {period}
        </p>
      </CardContent>
    </Card>
  );
};

export default ReportsSection;
