// Generated using "yarn build-templates"

export const meta = {
  name: "Change Detection",
  description:
    "The best and simplest self-hosted free open source website change detection tracking, monitoring, and notification service. An alternative to Visualping, Watchtower etc. Designed for simplicity - the main goal is to simply monitor which websites had a text change for free.",
  instructions: null,
  changeLog: [{ date: "2022-08-15", description: "first release" }],
  links: [
    { label: "Website", url: "https://changedetection.io" },
    { label: "Github", url: "https://github.com/dgtlmoon/changedetection.io" },
  ],
  contributors: [
    { name: "Bedeoan Raul", url: "https://github.com/bedeoan" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "serviceName", "domain"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      serviceName: {
        type: "string",
        title: "Service Name",
        default: "Changedetection",
      },
      domain: { type: "string", title: "Domain" },
    },
  },
};

export type ProjectName = string;
export type ServiceName = string;
export type Domain = string;

export interface Input {
  projectName: ProjectName;
  serviceName: ServiceName;
  domain: Domain;
}
