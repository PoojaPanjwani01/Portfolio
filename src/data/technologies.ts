import { TechItem } from "@/types";

export const technologies: TechItem[] = [
  // LANGUAGES
  {
    name: "Python",
    category: "LANGUAGES",
    description: "Primary language for data pipelines, AI agent development, and backend APIs.",
    relatedTech: ["PySpark", "Pandas", "FastAPI", "LangGraph", "LangChain", "SQLAlchemy"],
  },
  {
    name: "SQL",
    category: "LANGUAGES",
    description: "Complex analytical queries, schema design, and CTE performance tuning.",
    relatedTech: ["PostgreSQL", "PySpark", "Pandas", "Python"],
  },
  {
    name: "JavaScript",
    category: "LANGUAGES",
    description: "Modern web APIs, Node.js automation scripts, and interactive tooling.",
    relatedTech: ["Node.js", "Git", "GitHub"],
  },

  // DATA
  {
    name: "PySpark",
    category: "DATA",
    description: "Distributed large-scale data transformation and Glue job authoring.",
    relatedTech: ["Python", "AWS", "Glue", "S3", "SQL"],
  },
  {
    name: "Pandas",
    category: "DATA",
    description: "In-memory data manipulation, exploratory analysis, and quality validation.",
    relatedTech: ["Python", "SQL", "PostgreSQL"],
  },
  {
    name: "PostgreSQL",
    category: "DATA",
    description: "Relational database modeling, indexing, and transactional data integrity.",
    relatedTech: ["SQL", "Python", "FastAPI", "Docker"],
  },
  {
    name: "MongoDB",
    category: "DATA",
    description: "Document-based storage for semi-structured payloads and agent trace state.",
    relatedTech: ["Python", "FastAPI", "Node.js"],
  },

  // AI
  {
    name: "GenAI",
    category: "AI",
    description: "Generative AI applications, structured outputs, and LLM reasoning loops.",
    relatedTech: ["LangGraph", "LangChain", "Bedrock", "RAG", "Embeddings", "Transformers"],
  },
  {
    name: "LangGraph",
    category: "AI",
    description: "Stateful multi-agent orchestration, cyclical graphs, and human-in-the-loop checkpoints.",
    relatedTech: ["Python", "Bedrock", "FastAPI", "GenAI", "LangChain"],
  },
  {
    name: "LangChain",
    category: "AI",
    description: "Chains, prompt templates, output parsers, and tool abstraction interfaces.",
    relatedTech: ["Python", "GenAI", "LangGraph", "Embeddings"],
  },
  {
    name: "RAG",
    category: "AI",
    description: "Retrieval-Augmented Generation across enterprise documentation and schemas.",
    relatedTech: ["Embeddings", "Transformers", "GenAI", "Python"],
  },
  {
    name: "Embeddings",
    category: "AI",
    description: "Vector representations for semantic search and document retrieval.",
    relatedTech: ["RAG", "Transformers", "GenAI", "Python"],
  },
  {
    name: "Transformers",
    category: "AI",
    description: "Underlying architecture powering modern foundational models and NLP pipelines.",
    relatedTech: ["GenAI", "Embeddings", "RAG"],
  },

  // CLOUD
  {
    name: "AWS",
    category: "CLOUD",
    description: "Primary cloud infrastructure for serverless pipelines and data processing.",
    relatedTech: ["Lambda", "S3", "Glue", "Step Functions", "CloudWatch", "Bedrock"],
  },
  {
    name: "Bedrock",
    category: "CLOUD",
    description: "Managed foundational models with enterprise security and low-latency inference.",
    relatedTech: ["AWS", "GenAI", "LangGraph", "Python"],
  },
  {
    name: "Lambda",
    category: "CLOUD",
    description: "Serverless compute triggers for event-driven data validation and webhooks.",
    relatedTech: ["AWS", "Python", "Step Functions", "S3", "CloudWatch"],
  },
  {
    name: "S3",
    category: "CLOUD",
    description: "Scalable object storage for raw data lakes, parquet files, and checkpoints.",
    relatedTech: ["AWS", "Glue", "Lambda", "PySpark"],
  },
  {
    name: "Glue",
    category: "CLOUD",
    description: "Managed ETL service for distributed cataloging and serverless PySpark execution.",
    relatedTech: ["AWS", "PySpark", "S3", "Step Functions"],
  },
  {
    name: "Step Functions",
    category: "CLOUD",
    description: "Visual state machine orchestration for multi-stage data processing workflows.",
    relatedTech: ["AWS", "Lambda", "Glue", "CloudWatch"],
  },
  {
    name: "CloudWatch",
    category: "CLOUD",
    description: "Real-time pipeline monitoring, custom metrics, and automated alarm alerts.",
    relatedTech: ["AWS", "Lambda", "Step Functions", "Glue"],
  },

  // BACKEND
  {
    name: "FastAPI",
    category: "BACKEND",
    description: "High-performance asynchronous Python REST APIs and agent control endpoints.",
    relatedTech: ["Python", "PostgreSQL", "Docker", "LangGraph"],
  },
  {
    name: "Flask",
    category: "BACKEND",
    description: "Lightweight microservice architecture and quick prototyping.",
    relatedTech: ["Python", "SQL", "Docker"],
  },
  {
    name: "Node.js",
    category: "BACKEND",
    description: "Asynchronous server-side scripting and developer workflow extensions.",
    relatedTech: ["JavaScript", "Git", "Docker"],
  },

  // TOOLS
  {
    name: "Git",
    category: "TOOLS",
    description: "Version control, trunk-based branching, and commit discipline.",
    relatedTech: ["GitHub", "Python", "JavaScript"],
  },
  {
    name: "GitHub",
    category: "TOOLS",
    description: "Collaborative code reviews, issue tracking, and automated CI/CD actions.",
    relatedTech: ["Git", "Docker"],
  },
  {
    name: "Docker",
    category: "TOOLS",
    description: "Containerization for reproducible local environments and deployable microservices.",
    relatedTech: ["FastAPI", "PostgreSQL", "Python"],
  },
  {
    name: "Power BI",
    category: "TOOLS",
    description: "Business intelligence reporting and executive analytical dashboards.",
    relatedTech: ["SQL", "Data", "PostgreSQL"],
  },
];

export const techCategories: {
  key: "LANGUAGES" | "DATA" | "AI" | "CLOUD" | "BACKEND" | "TOOLS";
  label: string;
  badgeCount: number;
}[] = [
  { key: "LANGUAGES", label: "Languages", badgeCount: 3 },
  { key: "DATA", label: "Data Engineering", badgeCount: 4 },
  { key: "AI", label: "AI & GenAI", badgeCount: 6 },
  { key: "CLOUD", label: "Cloud & AWS", badgeCount: 7 },
  { key: "BACKEND", label: "Backend", badgeCount: 3 },
  { key: "TOOLS", label: "Developer Tools", badgeCount: 4 },
];
