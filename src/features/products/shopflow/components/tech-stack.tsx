import Image from "next/image";

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Modern UI library for building interactive interfaces",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description: "State management for complex application logic",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for building scalable backend",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Powerful, open-source relational database",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    description: "Next-generation ORM for type-safe database access",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Type-safe JavaScript for robust applications",
  },
  {
    name: "JWT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    description: "Secure authentication and authorization system",
  },
];

export function ShopFlowTechStack() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built with Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by industry-leading technologies for reliability and
              performance
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center rounded-xl border bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 dark:invert-[0.9]"
                  />
                </div>
                <h3 className="mb-2 font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border bg-background p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Key Technical Features
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">RESTful APIs</div>
                  <div className="text-sm text-muted-foreground">
                    Well-structured API endpoints
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Type Safety</div>
                  <div className="text-sm text-muted-foreground">
                    End-to-end TypeScript
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Real-time Updates</div>
                  <div className="text-sm text-muted-foreground">
                    Live data synchronization
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Secure Authentication</div>
                  <div className="text-sm text-muted-foreground">
                    JWT-based auth system
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Database Migrations</div>
                  <div className="text-sm text-muted-foreground">
                    Prisma ORM management
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Excel Integration</div>
                  <div className="text-sm text-muted-foreground">
                    Handontable data grids
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
