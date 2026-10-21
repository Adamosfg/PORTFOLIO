// ponytail: Zero-bloat, high-fidelity 16:10 SVG/CSS synthetic telemetry & interface mockups (anonymized data)

interface ProjectVisualProps {
  slug: string;
  title: string;
}

export default function ProjectVisual({ slug, title }: ProjectVisualProps) {
  if (slug === 'leoni-telemetry-ai') {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[11px] bg-[#0E1117] border-b border-border p-4 sm:p-6 text-xs font-mono select-none flex flex-col justify-between">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#212631] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[#E8EAED] font-semibold text-[11px] tracking-wide">
              SYNTHETIC TELEMETRY // LINE 04 (ANONYMIZED)
            </span>
          </div>
          <span className="text-[10px] text-accent border border-accent/40 rounded px-1.5 py-0.5 bg-accent/10">
            XGBoost Ingestion: 52.4k/day
          </span>
        </div>

        {/* Center: SHAP Feature Importance & Sparkline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-2">
          {/* Telemetry Anomaly Waveform */}
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-3">
            <div className="flex justify-between text-[10px] text-text-muted mb-2">
              <span>CRIMP PRESSURE SENSOR</span>
              <span className="text-[#3FB950]">85.5% CONF</span>
            </div>
            {/* SVG Waveform */}
            <svg className="w-full h-12" viewBox="0 0 200 40" fill="none">
              <path
                d="M0 24 L20 22 L40 25 L60 21 L80 23 L100 8 L110 34 L120 12 L140 22 L160 20 L180 24 L200 23"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="100" cy="8" r="3" fill="#F87171" />
              <circle cx="110" cy="34" r="3" fill="#F87171" />
            </svg>
            <div className="flex justify-between text-[9px] text-text-muted mt-1">
              <span>T-60s</span>
              <span className="text-red-400 font-bold">Anomaly Peak [0.91]</span>
              <span>NOW</span>
            </div>
          </div>

          {/* Real-time SHAP Root Cause Breakdown */}
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-3 space-y-2">
            <div className="text-[10px] text-text-muted flex justify-between">
              <span>LOCAL SHAP ROOT-CAUSES</span>
              <span className="text-text">Impact (Δ)</span>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-text mb-1">
                <span>Crimp Pressure Delta</span>
                <span className="text-red-400">+0.42</span>
              </div>
              <div className="w-full h-1.5 bg-[#212631] rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: '84%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-text mb-1">
                <span>Wire Gauge Variance</span>
                <span className="text-amber-400">+0.28</span>
              </div>
              <div className="w-full h-1.5 bg-[#212631] rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '56%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-text mb-1">
                <span>Terminal Feed Speed</span>
                <span className="text-accent">-0.15</span>
              </div>
              <div className="w-full h-1.5 bg-[#212631] rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="flex items-center justify-between pt-2 border-t border-[#212631] text-[10px] text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            Auto-Scrap Flag: Active (Volvo MEP1)
          </span>
          <span className="font-mono text-text">Postgres Query: 14ms (-55%)</span>
        </div>
      </div>
    );
  }

  if (slug === 'healthcare-rbac-platform') {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[11px] bg-[#0E1117] border-b border-border p-4 sm:p-6 text-xs font-mono select-none flex flex-col justify-between">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#212631] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3FB950]" />
            <span className="text-[#E8EAED] font-semibold text-[11px] tracking-wide">
              CLINICAL HUB // MULTI-PRACTITIONER SCHEDULER
            </span>
          </div>
          <span className="text-[10px] text-[#3FB950] border border-[#3FB950]/40 rounded px-1.5 py-0.5 bg-[#3FB950]/10">
            Lock Isolation: 100% Conflict Free
          </span>
        </div>

        {/* Center: Schedule Grid with Pessimistic Lock */}
        <div className="grid grid-cols-3 gap-2 my-auto py-2">
          {/* Column 1: Dr. Benali */}
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-2.5 space-y-1.5">
            <div className="text-[10px] font-semibold text-text">Dr. Benali (Cardio)</div>
            <div className="bg-[#1E232B] p-1.5 rounded text-[10px] text-text-muted">
              09:00 · Patient #104
            </div>
            <div className="bg-accent/15 border border-accent/40 p-1.5 rounded text-[10px] text-accent font-semibold">
              09:30 · Confirmed
            </div>
            <div className="bg-[#1E232B] p-1.5 rounded text-[10px] text-text-muted">
              10:00 · Consultation
            </div>
          </div>

          {/* Column 2: Dr. Tazi with Mutex Lock */}
          <div className="bg-[#141822] border border-amber-500/40 rounded-btn p-2.5 space-y-1.5 relative">
            <div className="flex justify-between items-center text-[10px] font-semibold text-text">
              <span>Dr. Tazi (General)</span>
              <span className="text-[9px] text-amber-400">MUTEX</span>
            </div>
            <div className="bg-[#1E232B] p-1.5 rounded text-[10px] text-text-muted">
              09:00 · Routine Check
            </div>
            <div className="bg-amber-500/10 border border-amber-500/50 p-1.5 rounded text-[10px] text-amber-300 font-semibold animate-pulse">
              🔒 09:30 · In Checkout...
            </div>
            <div className="bg-[#1E232B] p-1.5 rounded text-[10px] text-text-muted">
              10:00 · Available
            </div>
          </div>

          {/* Column 3: Audit & Access Security */}
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-2.5 space-y-2">
            <div className="text-[10px] font-semibold text-text">RBAC POLICIES</div>
            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between text-text-muted">
                <span>Auth Provider</span>
                <span className="text-text">JWT / Bearer</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Isolation Level</span>
                <span className="text-accent">SERIALIZABLE</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>P95 Response</span>
                <span className="text-[#3FB950]">118ms</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Test Suite</span>
                <span className="text-text">JUnit 5 (Pass)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-2 border-t border-[#212631] text-[10px] text-text-muted">
          <span>Concurrency Control: DB Row Locks</span>
          <span className="text-text font-mono">0 Double Bookings</span>
        </div>
      </div>
    );
  }

  // Default / snrt-realtime-broadcast
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[11px] bg-[#0E1117] border-b border-border p-4 sm:p-6 text-xs font-mono select-none flex flex-col justify-between">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#212631] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[#E8EAED] font-semibold text-[11px] tracking-wide">
            SNRT LIVE DISPATCH // WEBSOCKET BROADCAST
          </span>
        </div>
        <span className="text-[10px] text-accent border border-accent/40 rounded px-1.5 py-0.5 bg-accent/10">
          Latency: &lt;180ms
        </span>
      </div>

      {/* Center: Live stream messages */}
      <div className="my-auto py-2 space-y-2">
        <div className="bg-[#141822] border border-[#212631] rounded-btn p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-accent">●</span>
            <span className="text-text text-[11px]">DISPATCH #4081 · Breaking News Bulletin Released</span>
          </div>
          <span className="text-text-muted text-[10px]">142ms ack</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-2.5">
            <div className="text-[10px] text-text-muted">REDIS CACHE OFFLOAD</div>
            <div className="text-base font-bold text-text mt-0.5">-30% DB load</div>
            <div className="text-[9px] text-[#3FB950] mt-0.5">High-traffic buffer OK</div>
          </div>
          <div className="bg-[#141822] border border-[#212631] rounded-btn p-2.5">
            <div className="text-[10px] text-text-muted">CONCURRENT CLIENTS</div>
            <div className="text-base font-bold text-accent mt-0.5">12,500 active</div>
            <div className="text-[9px] text-text-muted mt-0.5">Dual-channel WebSocket</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-2 border-t border-[#212631] text-[10px] text-text-muted">
        <span>Channel: wss://stream.snrt.ma/live</span>
        <span className="text-text font-mono">Uptime: 99.9%</span>
      </div>
    </div>
  );
}
