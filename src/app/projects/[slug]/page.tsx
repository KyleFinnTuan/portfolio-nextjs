import { Card } from "@/components/ui/card";
import { projects } from "@/lib/db/ProjectDB";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import ProjectWebsiteButton from "@/components/atoms/ProjectWebsiteButton";
import ReactMarkdown from "react-markdown";

export  default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();


  return (
    <main className="bg-white">
      <section className="px-6 py-20 display container mx-auto">
        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="flex flex-col justify-center order-1 max-lg:order-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:underline text-lg" href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="scale-150" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:underline text-lg"
                    href="/projects"
                  >
                    Projects
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="scale-150" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:underline text-lg"
                    href={`/projects/${project.slug}`}
                  >
                    {project.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-10 max-w-2xl">
              <div className="flex flex-wrap gap-2">
                {project.work_scope.map((work_scope, index) => (
                  <Badge key={index} className="text-sm text-white">
                    {work_scope}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 font-bold mb-8 text-3xl sm:text-7xl">
                {project.title}
              </h1>
              <p className="text-xl mb-8 font-base">{project.overview}</p>
              <ProjectWebsiteButton
                website_link={project.website_link ?? "#"}
              />
            </div>
          </div>
          <Card className="py-0 overflow-hidden order-2 max-lg:order-1">
            <img
              className="h-full object-cover"
              src={project.imgSrc}
              alt={project.title}
            />
          </Card>
        </div>
      </section>
      <section className="bg-white px-6 py-20 flex justify-center container mx-auto">
        <div className="max-w-2xl markdown-content">
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
