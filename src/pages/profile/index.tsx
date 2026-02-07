import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plug, AlertTriangle } from "lucide-react";

export function UserProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Profile</h1>
        <p className="text-muted-foreground mt-1">
          Account management and connected apps
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription>jane@acme.com</CardDescription>
              <Button variant="outline" size="sm" className="mt-2">
                Change avatar
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="preferences">
        <TabsList>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="connected">Connected apps</TabsTrigger>
          <TabsTrigger value="danger">Danger zone</TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Theme, notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <select className="h-10 rounded-input border border-border px-3 w-full max-w-xs">
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <Button>Save preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connected" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected apps</CardTitle>
              <CardDescription>Manage connected applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Plug className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No connected apps</p>
                <Button variant="outline">Connect app</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="danger" className="mt-6">
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Danger zone
              </CardTitle>
              <CardDescription>
                Account deletion, export data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-card border border-destructive/50 bg-destructive/5">
                <p className="text-sm font-medium mb-2">Export your data</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Download a copy of all your data before deleting your account.
                </p>
                <Button variant="outline" size="sm">Export data</Button>
              </div>
              <div className="p-4 rounded-card border border-destructive/50 bg-destructive/5">
                <p className="text-sm font-medium mb-2">Delete account</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive" size="sm">Delete account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
