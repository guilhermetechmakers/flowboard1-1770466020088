import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutGrid,
  FileUp,
  LayoutGridIcon,
  Plus,
  MessageSquare,
  Bot,
} from "lucide-react";

const mockProjects = [
  { id: "1", name: "Product Roadmap Q1", lastActivity: "2 hours ago", collaborators: 3 },
  { id: "2", name: "Research Synthesis", lastActivity: "1 day ago", collaborators: 2 },
  { id: "3", name: "Design System Flow", lastActivity: "3 days ago", collaborators: 5 },
];

const mockActivity = [
  { id: "1", type: "comment", text: "Sarah commented on Product Roadmap", time: "2h ago" },
  { id: "2", type: "ai", text: "AI suggested 3 new nodes for Research Synthesis", time: "5h ago" },
  { id: "3", type: "comment", text: "Mike shared Design System Flow", time: "1d ago" },
];

export function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Your projects and recent activity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>Get started quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/dashboard/board/new">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col gap-2">
                  <Plus className="h-6 w-6" />
                  <span>New Board</span>
                </Button>
              </Link>
              <Link to="/dashboard/import-export">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col gap-2">
                  <FileUp className="h-6 w-6" />
                  <span>Import</span>
                </Button>
              </Link>
              <Link to="/dashboard/templates">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col gap-2">
                  <LayoutGridIcon className="h-6 w-6" />
                  <span>Templates</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Org switcher placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Organization</CardTitle>
            <CardDescription>Acme Inc</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" className="w-full">
              Switch organization
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Project grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h3 font-semibold">Projects</h2>
          <Link to="/dashboard/board/new">
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New project
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Link key={project.id} to={`/dashboard/board/${project.id}`}>
              <Card className="h-full transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer">
                <CardHeader>
                  <div className="h-32 rounded-card bg-muted flex items-center justify-center mb-4">
                    <LayoutGrid className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    Last activity {project.lastActivity} · {project.collaborators} collaborators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(project.collaborators, 4) }).map((_, i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-card">
                        <AvatarFallback className="text-xs">
                          {["S", "M", "J", "A"][i]}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>Comments and AI suggestions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-3 rounded-card hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                    item.type === "ai" ? "bg-primary/10" : "bg-muted"
                  }`}
                >
                  {item.type === "ai" ? (
                    <Bot className="h-5 w-5 text-primary" />
                  ) : (
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
