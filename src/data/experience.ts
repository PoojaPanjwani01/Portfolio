import { ExperienceRole } from "@/types";

export const experience: ExperienceRole[] = [
  {
    company: "Go Digital Technology Consulting (GDTC)",
    role: "Associate Data Engineer",
    isCurrent: true,
    summary:
      "Designing and operating end-to-end data pipelines, automated data quality validation systems, and intelligent GenAI workflows in cloud environments.",
    focusAreas: [
      "Data Engineering",
      "GenAI",
      "AI Applications",
      "AWS",
      "Backend Development",
      "Data Processing",
      "Automation",
    ],
    systemHighlights: [
      {
        title: "Data Pipelines & Cloud Architecture",
        tags: ["AWS", "Glue", "PySpark", "Lambda", "S3", "Step Functions"],
      },
      {
        title: "GenAI & AI Application Development",
        tags: ["GenAI", "Python", "FastAPI", "Prompt Engineering", "AWS"],
      },
      {
        title: "Data Processing & Reliability",
        tags: ["Data Processing", "Validation", "CloudWatch", "Python", "SQL"],
      },
      {
        title: "Backend Development & Workflow Automation",
        tags: ["FastAPI", "Python", "Automation", "Docker", "SQL"],
      },
    ],
  },
];
