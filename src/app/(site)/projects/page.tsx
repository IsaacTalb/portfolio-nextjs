export default async function ProjectsPage() {
  // const projects = await strapiFetch<StrapiResponse<Project>>("projects", { populate: ["cover"], sort: ["rank:asc"] });
  return (
    <section className="py-16">
      <h1 className="h2 mb-6">Work</h1>
      <p className="lead">Case studies and builds coming from Strapi soon.</p>
    </section>
  );
}
