
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Users, LightbulbIcon, CreditCard, TrendingUp, FileText } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedCustomer, setSelectedCustomer] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex flex-wrap gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Customers</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard 
          title="Total Customers" 
          value="2,348" 
          change="+12.5%" 
          description="From last month" 
          icon={<Users className="h-6 w-6" />}
        />
        <MetricCard 
          title="Energy Consumption" 
          value="145.8 kWh" 
          change="+8.2%" 
          description="Average per customer" 
          icon={<LightbulbIcon className="h-6 w-6" />}
        />
        <MetricCard 
          title="Total Revenue" 
          value="$89,562" 
          change="+23.1%" 
          description="From last month" 
          icon={<CreditCard className="h-6 w-6" />}
        />
        <MetricCard 
          title="Bills Generated" 
          value="1,857" 
          change="+10.3%" 
          description="This month" 
          icon={<FileText className="h-6 w-6" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Usage Trends</CardTitle>
            <CardDescription>Monthly electricity consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
              <p className="text-muted-foreground">Usage chart goes here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
            <CardDescription>Current billing cycle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Paid</div>
                  <div className="text-sm font-medium">68%</div>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Pending</div>
                  <div className="text-sm font-medium">24%</div>
                </div>
                <Progress value={24} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Overdue</div>
                  <div className="text-sm font-medium">8%</div>
                </div>
                <Progress value={8} className="h-2" />
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Recent Payments</h4>
              {["John Doe", "Jane Smith", "Robert Williams"].map((name, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{name}</span>
                  <span className="text-sm font-medium">${(Math.random() * 100).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, description, icon }: MetricCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-200">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs">
          <span className="text-green-500 flex items-center">
            {change} <ArrowUpRight className="h-3 w-3 ml-1" />
          </span>
          <span className="text-muted-foreground ml-1">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
