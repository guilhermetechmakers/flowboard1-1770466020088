import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, LayoutGrid, Bot, CreditCard } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockUsers = [
  { id: "1", name: "Jane Doe", email: "jane@acme.com", role: "Admin", status: "active" },
  { id: "2", name: "John Smith", email: "john@acme.com", role: "Editor", status: "active" },
  { id: "3", name: "Sarah Lee", email: "sarah@acme.com", role: "Viewer", status: "pending" },
];

const mockUsage = [
  { month: "Jan", users: 12, boards: 8, credits: 1200 },
  { month: "Feb", users: 15, boards: 12, credits: 1800 },
  { month: "Mar", users: 18, boards: 15, credits: 2200 },
  { month: "Apr", users: 20, boards: 18, credits: 2500 },
];

export function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Org admin controls, billing, compliance, analytics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">20</p>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Boards</CardTitle>
            <LayoutGrid className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI credits</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2,500</p>
            <p className="text-xs text-muted-foreground">of 5,000 used</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Plan</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Pro</p>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="p-0 h-auto text-xs">Upgrade</Button>
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usage over time</CardTitle>
          <CardDescription>AI credits and active users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockUsage}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="credits" stroke="rgb(11, 99, 255)" fill="rgb(11, 99, 255)" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User management</TabsTrigger>
          <TabsTrigger value="billing">Billing & plans</TabsTrigger>
          <TabsTrigger value="security">Security & audit</TabsTrigger>
          <TabsTrigger value="flags">Feature flags</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User management</CardTitle>
              <CardDescription>Invite, roles, deactivate</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="mb-4">Invite user</Button>
              <div className="rounded-card border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium">Name</th>
                      <th className="text-left p-4 font-medium">Email</th>
                      <th className="text-left p-4 font-medium">Role</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((u) => (
                      <tr key={u.id} className="border-t border-border hover:bg-muted/30">
                        <td className="p-4">{u.name}</td>
                        <td className="p-4 text-muted-foreground">{u.email}</td>
                        <td className="p-4">{u.role}</td>
                        <td className="p-4">
                          <Badge variant={u.status === "active" ? "success" : "secondary"}>
                            {u.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing & plans</CardTitle>
              <CardDescription>Invoices, upgrade</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/dashboard/checkout">Upgrade plan</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security & audit logs</CardTitle>
              <CardDescription>Immutable audit logs for compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Download audit logs</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flags" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature flags</CardTitle>
              <CardDescription>Toggle AI features and integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-card border border-border">
                <div>
                  <p className="font-medium">AI features</p>
                  <p className="text-sm text-muted-foreground">Enable AI agent and suggestions</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-card border border-border">
                <div>
                  <p className="font-medium">Integrations</p>
                  <p className="text-sm text-muted-foreground">Third-party integrations</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
