import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MousePointer2,
  Hand,
  Link2,
  Square,
  Layout,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Grid3X3,
  Minimize2,
  Type,
  Link as LinkIcon,
  FileText,
  Image,
  CheckSquare,
  Table,
  Code,
  StickyNote,
  Bot,
  Users,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nodeTypes = [
  { type: "text", icon: Type, label: "Text" },
  { type: "link", icon: LinkIcon, label: "Research link" },
  { type: "file", icon: FileText, label: "File" },
  { type: "image", icon: Image, label: "Image" },
  { type: "task", icon: CheckSquare, label: "Task" },
  { type: "table", icon: Table, label: "Table" },
  { type: "code", icon: Code, label: "Code" },
  { type: "note", icon: StickyNote, label: "Note" },
];

const mockNodes = [
  { id: "1", type: "text", x: 100, y: 100, title: "Start", content: "Project kickoff" },
  { id: "2", type: "task", x: 350, y: 100, title: "Research", content: "Gather requirements" },
  { id: "3", type: "text", x: 600, y: 100, title: "Design", content: "Create mockups" },
];

export function BoardPage() {
  const { boardId: _boardId } = useParams<{ boardId: string }>();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [tool, setTool] = useState<"select" | "pan" | "connect">("select");
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-fade-in">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b border-border bg-card rounded-t-card">
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button
            variant={tool === "select" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => setTool("select")}
          >
            <MousePointer2 className="h-4 w-4" />
          </Button>
          <Button
            variant={tool === "pan" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => setTool("pan")}
          >
            <Hand className="h-4 w-4" />
          </Button>
          <Button
            variant={tool === "connect" ? "secondary" : "ghost"}
            size="icon"
            onClick={() => setTool("connect")}
          >
            <Link2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button variant="ghost" size="icon">
            <Square className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Layout className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button variant="ghost" size="icon">
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 border-r border-border pr-2">
          <Button variant="ghost" size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground w-12 text-center">100%</span>
          <Button variant="ghost" size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant={showGrid ? "secondary" : "ghost"}
          size="icon"
          onClick={() => setShowGrid(!showGrid)}
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden bg-muted/30">
          <div
            className={cn(
              "absolute inset-0",
              showGrid &&
                "bg-[linear-gradient(rgba(230,233,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(230,233,238,0.5)_1px,transparent_1px)] bg-[size:20px_20px]"
            )}
          >
            {mockNodes.map((node) => (
              <Card
                key={node.id}
                className={cn(
                  "absolute w-56 cursor-pointer transition-all duration-200",
                  selectedNode === node.id
                    ? "ring-2 ring-primary shadow-glow"
                    : "hover:shadow-card-hover"
                )}
                style={{ left: node.x, top: node.y }}
                onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
              >
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm truncate">{node.title}</span>
                    <span className="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                      {node.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{node.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Node types palette */}
        <div className="w-14 border-l border-border bg-card flex flex-col items-center py-2 gap-1">
          {nodeTypes.map((nt) => (
            <Button
              key={nt.type}
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              title={nt.label}
            >
              <nt.icon className="h-4 w-4" />
            </Button>
          ))}
        </div>

        {/* AI Agent panel */}
        <div className="w-80 border-l border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">AI Agent</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Summarize, suggest next steps, or generate content.
            </p>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-3">
              <Card className="p-3 bg-muted/50">
                <p className="text-sm">Suggest next steps for selected nodes</p>
                <Button size="sm" className="mt-2 w-full">
                  Apply
                </Button>
              </Card>
              <Card className="p-3 bg-muted/50">
                <p className="text-sm">Summarize this section</p>
                <Button size="sm" variant="outline" className="mt-2 w-full">
                  Dismiss
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: collaboration + timeline */}
      <div className="flex items-center justify-between p-2 border-t border-border bg-card">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">3 collaborators</span>
          </div>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Minimize2 className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Version history</span>
        </div>
      </div>
    </div>
  );
}
