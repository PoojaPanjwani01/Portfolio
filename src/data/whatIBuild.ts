import { WhatIBuildItem } from "@/types";

export const whatIBuildItems: WhatIBuildItem[] = [
  {
    id: "data-engineering",
    number: "01",
    title: "DATA ENGINEERING",
    tagline: "Reliable, resilient pipelines and distributed processing.",
    description:
      "Build production-grade data pipelines, schema models, and transformation workflows that guarantee data freshness and structural integrity.",
    technologies: ["Python", "PySpark", "SQL", "AWS Glue", "S3", "PostgreSQL"],
    icon: "Database",
    metricsLabel: "PIPELINE ARCHITECTURE",
    flowSteps: ["Ingest Raw Data", "Schema Normalization", "Transform & Filter", "Target Store"],
  },
  {
    id: "genai",
    number: "02",
    title: "GENAI",
    tagline: "LLM-powered applications, RAG systems, and structured workflows.",
    description:
      "Build context-aware applications using retrieval-augmented generation, embeddings, prompt orchestration, and structured output validation.",
    technologies: ["LangChain", "Amazon Bedrock", "Embeddings", "RAG", "Transformers", "Python"],
    icon: "Sparkles",
    metricsLabel: "INTELLIGENCE ENGINE",
    flowSteps: ["Context Embeddings", "Vector Similarity", "LLM Reasoning", "Verified Response"],
  },
  {
    id: "ai-agents",
    number: "03",
    title: "AI AGENTS",
    tagline: "Tool-using agents with orchestration, memory, approval flows, and automation.",
    description:
      "Build durable multi-step agents that safely interact with external systems, enforce human sign-off gates, and preserve persistent state.",
    technologies: ["LangGraph", "FastAPI", "Tool Calling", "Checkpointing", "Bedrock", "Python"],
    icon: "Bot",
    metricsLabel: "STATEFUL ORCHESTRATION",
    flowSteps: ["User Intent", "Tool Reasoning", "Human Gate", "Safe Execution"],
  },
  {
    id: "cloud-automation",
    number: "04",
    title: "CLOUD & AUTOMATION",
    tagline: "Cloud-native workflows using AWS and modern backend services.",
    description:
      "Build serverless cloud architectures and event-driven automation that minimize operational overhead and scale seamlessly.",
    technologies: ["AWS Lambda", "Step Functions", "CloudWatch", "FastAPI", "Docker", "Git"],
    icon: "Cloud",
    metricsLabel: "SERVERLESS RUNTIME",
    flowSteps: ["Event Trigger", "Lambda Executor", "Step Functions Graph", "CloudWatch Telemetry"],
  },
];
