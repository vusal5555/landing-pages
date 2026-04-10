"use client";

export default function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-surface">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-light border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-4">
          <div className="max-w-xs mx-auto h-5 rounded bg-background/50 border border-border/50 flex items-center px-3">
            <span className="text-[10px] text-muted/50 font-mono truncate">localhost:3000</span>
          </div>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden bg-background">
        {children}
      </div>
    </div>
  );
}
