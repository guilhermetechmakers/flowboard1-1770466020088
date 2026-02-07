import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, FileDown, History } from "lucide-react";

export function ImportExportPage() {
  const [importFile, setImportFile] = useState<File | null>(null);
  const [exportFormat, setExportFormat] = useState<"png" | "pdf" | "csv" | "json">("png");

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Import & Export</h1>
        <p className="text-muted-foreground mt-1">
          Data ingestion and content export
        </p>
      </div>

      <Tabs defaultValue="import">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="import">Import</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="import" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Import data</CardTitle>
              <CardDescription>
                Upload CSV or JSON files. Map columns to node fields.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed border-border rounded-card p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const f = e.dataTransfer.files[0];
                  if (f) setImportFile(f);
                }}
              >
                <FileUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop CSV or JSON, or click to browse
                </p>
                <input
                  type="file"
                  accept=".csv,.json"
                  className="hidden"
                  id="import-file"
                  onChange={(e) => setImportFile(e.target.files?.[0] ?? null)}
                />
                <Button variant="outline" onClick={() => document.getElementById("import-file")?.click()}>
                  Select file
                </Button>
                {importFile && (
                  <p className="mt-4 text-sm font-medium">{importFile.name}</p>
                )}
              </div>
              <Button disabled={!importFile}>Import & map columns</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Export options</CardTitle>
              <CardDescription>
                Select area or nodes, choose format and resolution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-2">Export format</p>
                <div className="flex flex-wrap gap-2">
                  {(["png", "pdf", "csv", "json"] as const).map((fmt) => (
                    <Button
                      key={fmt}
                      variant={exportFormat === fmt ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => setExportFormat(fmt)}
                    >
                      {fmt.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
              {(exportFormat === "png" || exportFormat === "pdf") && (
                <div>
                  <p className="text-sm font-medium mb-2">Resolution</p>
                  <select className="h-10 rounded-input border border-border px-3 w-full max-w-xs">
                    <option>1x (72 DPI)</option>
                    <option>2x (144 DPI)</option>
                    <option>3x (216 DPI)</option>
                  </select>
                </div>
              )}
              <Button>
                <FileDown className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Import/Export history</CardTitle>
              <CardDescription>
                Recent imports and exports with download links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <History className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No import or export history yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
