'use client';

import { useState } from 'react';

export interface ArchitectureNode {
  id: string;
  label: string;
  tech: string;
  role: string;
  whyChosen: string;
  tradeOff: string;
}

interface InteractiveArchitectureProps {
  nodes?: ArchitectureNode[];
}

const defaultNodes: ArchitectureNode[] = [
  {
    id: 'ingestion',
    label: 'Async ingestion API',
    tech: 'FastAPI + Pydantic',
    role: 'Buffers and validates incoming high-velocity telemetry sensor records without thread contention.',
    whyChosen: 'Asynchronous event loop handles high-concurrency bursts with minimal memory footprint compared to sync frameworks.',
    tradeOff: 'Requires strict non-blocking async drivers across all downstream database connections.',
  },
  {
    id: 'inference',
    label: 'Anomaly engine',
    tech: 'XGBoost + TreeSHAP',
    role: 'Scores the probability of assembly scrap and calculates exact feature contributions for root-cause diagnosis.',
    whyChosen: 'Outperforms deep networks on tabular sensor signals and evaluates TreeSHAP feature attributions in under 8ms.',
    tradeOff: 'Requires periodic offline retraining as physical line tooling wears down over time.',
  },
  {
    id: 'database',
    label: 'Partitioned storage',
    tech: 'PostgreSQL 16',
    role: 'Persists raw telemetry, shift aggregations, and anomaly incidents with composite indexing.',
    whyChosen: 'Delivered a 55% reduction in query latency through composite B-tree indexing without the overhead of an extra time-series database.',
    tradeOff: 'Requires scheduled partition maintenance jobs to keep disk usage predictable.',
  },
  {
    id: 'dashboard',
    label: 'Operator supervision UI',
    tech: 'React + TypeScript',
    role: 'Visualizes live shift metrics, anomaly alerts, and root-cause breakdowns for factory supervisors.',
    whyChosen: 'Instant UI response with zero bloated libraries, letting line operators diagnose issues within seconds.',
    tradeOff: 'Maintained local client polling state to avoid unnecessary WebSocket server infrastructure.',
  },
];

// ponytail: Clean architecture diagram in plain sentence case with zero terminal micro-text
export default function InteractiveArchitecture({ nodes = defaultNodes }: InteractiveArchitectureProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>(nodes[0]?.id || '');
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="rounded-card border border-border bg-surface p-7 sm:p-9 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
        <div>
          <h4 className="text-xl font-semibold text-text">Pipeline dataflow &amp; node rationale</h4>
          <p className="text-sm text-text-muted mt-1">
            Click or hover any component to inspect engineering trade-offs.
          </p>
        </div>
      </div>

      {/* Node Selection Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {nodes.map((node) => {
          const isActive = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNodeId(node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
              className={`p-5 rounded-btn border text-left transition-all duration-150 ${
                isActive
                  ? 'border-accent bg-background ring-1 ring-accent'
                  : 'border-border bg-background/50 hover:border-text-muted'
              }`}
            >
              <div className="font-semibold text-base text-text mb-1">
                {node.label}
              </div>
              <div className="text-sm font-mono text-accent">
                {node.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Card */}
      {activeNode && (
        <div className="rounded-btn border border-border bg-background p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
            <h5 className="text-lg font-semibold text-text">
              {activeNode.label} <span className="text-accent font-mono text-base font-normal">({activeNode.tech})</span>
            </h5>
            <span className="text-sm text-text-muted font-mono">
              Production verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[15px]">
            <div className="space-y-1.5">
              <span className="text-sm font-semibold text-text">Primary function</span>
              <p className="text-text-muted leading-relaxed">{activeNode.role}</p>
            </div>

            <div className="space-y-1.5 md:border-l md:border-border md:pl-6">
              <span className="text-sm font-semibold text-accent">Why chosen</span>
              <p className="text-text-muted leading-relaxed">{activeNode.whyChosen}</p>
            </div>

            <div className="space-y-1.5 md:border-l md:border-border md:pl-6">
              <span className="text-sm font-semibold text-text">Trade-off</span>
              <p className="text-text-muted leading-relaxed">{activeNode.tradeOff}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
