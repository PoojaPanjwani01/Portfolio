import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "datapilot",
    number: "01",
    title: "DATAPILOT",
    subtitle: "AI SQL Agent",
    category: "AI SQL AGENT",
    summary:
      "A natural language interface that converts conversational analytical questions into verified, read-only SQL queries executed strictly over safe database replicas.",
    detailedOverview:
      "Designed with enterprise safety controls, restricting generated queries strictly to SELECT statements, validating schema constraints before execution, and rendering interactive tabular and visual summaries for non-technical stakeholders.",
    keyConcepts: [
      "Natural language schema grounding and contextual table discovery",
      "Strict read-only safety validation (SELECT only, mutating statements rejected)",
      "Automated query syntax verification & SQL explain-plan checks",
      "Interactive DataFrame visualization and result caching",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "LangChain",
      "Google Gemini",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
    ],
    architecture: {
      flowDescription:
        "NATURAL LANGUAGE → SQL → READ-ONLY DATABASE → RESULTS",
      nodes: [
        { id: "user_q", label: "User Question", sublabel: "Natural Language", type: "user" },
        { id: "llm_engine", label: "Gemini / LLM", sublabel: "Intent Parser", type: "llm" },
        { id: "schema", label: "Schema Catalog", sublabel: "DDL & Table Metadata", type: "orchestrator" },
        { id: "sql_gen", label: "SQL Generator & Guard", sublabel: "Read-Only Validator (SELECT)", type: "checkpoint", highlight: true },
        { id: "db", label: "Read-Only Database", sublabel: "PostgreSQL Replica", type: "data" },
        { id: "result", label: "Engine Result", sublabel: "Row Buffer & Types", type: "gateway" },
        { id: "viz", label: "DataFrame & Chart", sublabel: "Streamlit / UI View", type: "action" },
      ],
      edges: [
        { from: "user_q", to: "llm_engine", label: "Natural Prompt" },
        { from: "llm_engine", to: "schema", label: "Inspect DDL" },
        { from: "schema", to: "sql_gen", label: "Build SELECT Query" },
        { from: "sql_gen", to: "db", label: "Safe Execute" },
        { from: "db", to: "result", label: "Recordset" },
        { from: "result", to: "viz", label: "Render Matrix" },
      ],
    },
    interactiveType: "sql-agent",
  },
  {
    id: "dataops-assistant",
    number: "02",
    title: "DATAOPS AI ASSISTANT",
    subtitle: "AI-Powered Data Pipeline & Quality Assistant",
    category: "DATA PLATFORMS & AUTOMATION",
    summary:
      "An intelligent data operations assistant providing automated ETL validation, schema drift monitoring, and telemetry classification for data platforms.",
    detailedOverview:
      "Combines automated pipeline validation checks with telemetry reasoning. Automatically inspects incoming batches for null spikes, type mismatches, and range anomalies while providing clear diagnostics and CloudWatch metric tracking.",
    keyConcepts: [
      "Continuous schema drift & anomaly detection in active data pipelines",
      "Multi-level validation gates (blocking vs warning severity)",
      "Automated telemetry classification and CloudWatch alarm dispatching",
      "Serverless orchestration using AWS Step Functions and Lambda",
    ],
    technologies: [
      "Python",
      "AWS Lambda",
      "AWS Glue",
      "AWS Step Functions",
      "Amazon CloudWatch",
      "Amazon S3",
      "PySpark",
      "SQL",
    ],
    architecture: {
      flowDescription:
        "SOURCE / S3 → ETL PROCESSING → QUALITY CHECKS → VALIDATION ENGINE → ANOMALY ISOLATION → TELEMETRY → CLOUDWATCH DISPATCH",
      nodes: [
        { id: "source", label: "Data Source (S3)", sublabel: "Raw Ingestion Layer", type: "data" },
        { id: "etl", label: "ETL Processing", sublabel: "AWS Glue / PySpark", type: "etl" },
        { id: "dq_checks", label: "Data Quality Checks", sublabel: "Schema & Range Assertions", type: "validation", highlight: true },
        { id: "validation", label: "Validation Engine", sublabel: "Pass / Fail Evaluation", type: "validation" },
        { id: "issue_detection", label: "Anomaly Detector", sublabel: "Nulls, Dups & Outliers", type: "alert" },
        { id: "rca", label: "Telemetry Classifier", sublabel: "Telemetry & Lineage Tagging", type: "orchestrator" },
        { id: "alert", label: "Alert & Notification", sublabel: "CloudWatch & SNS Dispatch", type: "action" },
      ],
      edges: [
        { from: "source", to: "etl", label: "Raw Stream" },
        { from: "etl", to: "dq_checks", label: "Staged Data" },
        { from: "dq_checks", to: "validation", label: "Rule Metrics" },
        { from: "validation", to: "issue_detection", label: "Violation Event" },
        { from: "issue_detection", to: "rca", label: "Isolate Segment" },
        { from: "rca", to: "alert", label: "Trigger Dispatch" },
      ],
    },
    interactiveType: "dataops-assistant",
  },
];
