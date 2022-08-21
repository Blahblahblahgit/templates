// Generated using "yarn build-templates"

export const meta = {
  name: "n8n",
  description:
    "n8n helps you to connect any app with an API with any other, and manipulate its data with little or no code.Has highly flexible workflows and the option to build custom nodes.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://n8n.io/" },
    { label: "Documentation", url: "https://docs.n8n.io/" },
    { label: "Github", url: "https://github.com/n8n-io/n8n" },
  ],
  contributors: [
    { name: "Ponky", url: "https://github.com/Ponkhy" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "serviceName", "domain"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      serviceName: { type: "string", title: "Service Name", default: "n8n" },
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
