export interface ProjectArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  type?: "user" | "gateway" | "orchestrator" | "llm" | "tool" | "checkpoint" | "action" | "audit" | "data" | "etl" | "validation" | "alert";
  highlight?: boolean;
}

export interface ProjectArchitectureEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  animated?: boolean;
}

export interface ProjectArchitecture {
  nodes: ProjectArchitectureNode[];
  edges: ProjectArchitectureEdge[];
  flowDescription?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  detailedOverview: string;
  keyConcepts: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  interactiveType: "sql-agent" | "dataops-assistant";
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  liveSimulationState?: Record<string, unknown>;
  githubUrl?: string;
  demoUrl?: string;
}

export interface TechItem {
  name: string;
  category: "LANGUAGES" | "DATA" | "AI" | "CLOUD" | "BACKEND" | "TOOLS";
  iconName?: string;
  description?: string;
  relatedTech?: string[];
  level?: string;
}

export interface ExperienceRole {
  company: string;
  role: string;
  location?: string;
  isCurrent: boolean;
  summary: string;
  focusAreas: string[];
  systemHighlights: {
    title: string;
    description?: string;
    tags: string[];
  }[];
}

export interface WhatIBuildItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  icon: string;
  metricsLabel: string;
  flowSteps: string[];
}
