import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { Newsletter } from "@/components/newsletter";

export default async function Page() {
  return (
    <>
      <Hero />
      <section className="py-16">
        <h2 className="h2 mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.slug} {...s} />)}
        </div>
      </section>

      <section className="py-16">
        <h2 className="h2 mb-6">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0,4).map(p => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </section>
    </>
  );
}
