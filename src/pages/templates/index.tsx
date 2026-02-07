import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Search } from "lucide-react";

const mockTemplates = [
  { id: "1", name: "Product Roadmap", category: "Product", description: "Plan features and milestones" },
  { id: "2", name: "Research Synthesis", category: "Research", description: "Organize and connect research findings" },
  { id: "3", name: "Design System", category: "Design", description: "Map design tokens and components" },
  { id: "4", name: "Sprint Planning", category: "Agile", description: "Backlog and sprint breakdown" },
  { id: "5", name: "Customer Journey", category: "UX", description: "Map user flows and touchpoints" },
  { id: "6", name: "API Architecture", category: "Engineering", description: "Document endpoints and dependencies" },
];

export function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Product", "Research", "Design", "Agile", "UX", "Engineering"];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Templates & Examples</h1>
        <p className="text-muted-foreground mt-1">
          Starter boards and onboarding examples
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat || (cat === "All" && !selectedCategory) ? "secondary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates
          .filter(
            (t) =>
              (!search || t.name.toLowerCase().includes(search.toLowerCase())) &&
              (!selectedCategory || selectedCategory === "All" || t.category === selectedCategory)
          )
          .map((template) => (
            <Card
              key={template.id}
              className="transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="h-40 bg-muted flex items-center justify-center">
                <LayoutGrid className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Apply template</Button>
              </CardContent>
            </Card>
          ))}
      </div>

      {mockTemplates.filter(
        (t) =>
          (!search || t.name.toLowerCase().includes(search.toLowerCase())) &&
          (!selectedCategory || selectedCategory === "All" || t.category === selectedCategory)
      ).length === 0 && (
        <div className="text-center py-16">
          <LayoutGrid className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No templates found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filters
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearch("");
              setSelectedCategory(null);
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
