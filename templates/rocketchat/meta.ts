// Generated using "yarn build-templates"

export const meta = {
  name: "Rocket.Chat",
  description:
    "Rocket.Chat is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection. Real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with you. The result is an increase in productivity and customer satisfaction rates.Every day, tens of millions of users in over 150 countries and in organizations such as Deutsche Bahn, The US Navy, and Credit Suisse trust Rocket.Chat to keep their communications completely private and secure.",
  instructions: null,
  changeLog: [{ date: "2022-08-10", description: "first release" }],
  links: [
    { label: "Website", url: "https://rocket.chat/" },
    { label: "Documentation", url: "https://docs.rocket.chat/" },
    { label: "Github", url: "https://github.com/RocketChat/Rocket.Chat" },
  ],
  contributors: [
    { name: "Bedeoan Raul", url: "https://github.com/bedeoan" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "serviceName", "dbServiceName", "domain"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      serviceName: {
        type: "string",
        title: "Service Name",
        default: "rocketchat",
      },
      dbServiceName: {
        type: "string",
        title: "DB Service Name",
        default: "rocketchatdb",
      },
      domain: { type: "string", title: "Domain" },
    },
  },
};

export type ProjectName = string;
export type ServiceName = string;
export type DBServiceName = string;
export type Domain = string;

export interface Input {
  projectName: ProjectName;
  serviceName: ServiceName;
  dbServiceName: DBServiceName;
  domain: Domain;
}
