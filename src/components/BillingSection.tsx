
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter, Plus, Search } from "lucide-react";

const BillingSection = () => {
  const bills = [
    { id: "INV-001", customer: "John Doe", amount: "$124.50", date: "2025-04-01", status: "Paid" },
    { id: "INV-002", customer: "Jane Smith", amount: "$98.25", date: "2025-04-02", status: "Pending" },
    { id: "INV-003", customer: "Robert Johnson", amount: "$145.75", date: "2025-04-03", status: "Paid" },
    { id: "INV-004", customer: "Emily Davis", amount: "$110.80", date: "2025-04-04", status: "Overdue" },
    { id: "INV-005", customer: "Michael Wilson", amount: "$132.40", date: "2025-04-05", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Bills Overview</CardTitle>
              <CardDescription>Manage and generate customer bills</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Generate Bill
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search bills..." className="pl-8" />
            </div>
            <Button variant="outline" className="ml-2">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="font-medium">{bill.id}</TableCell>
                  <TableCell>{bill.customer}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      bill.status === 'Paid' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : bill.status === 'Pending' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {bill.status}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingSection;
