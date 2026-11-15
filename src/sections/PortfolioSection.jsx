import React from 'react';
import { featuredProject, projects } from '../data/projects';

const FeaturedProject = ({ project }) => (
  <article className="mb-12 rounded-xl bg-espresso text-sand p-8 md:p-12 shadow-lg">
    <p className="font-serif italic text-lg text-gold mb-2">Latest project</p>
    <h3 className="font-serif text-3xl md:text-4xl font-semibold text-parchment mb-5">{project.title}</h3>
    <ul className="flex flex-wrap gap-2 mb-8">
      {project.tags.map((tag) => (
        <li key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-gold/40 text-gold-light">
          {tag}
        </li>
      ))}
    </ul>
    <ul className="space-y-4 max-w-4xl">
      {project.highlights.map((item) => (
        <li key={item} className="flex gap-4 leading-relaxed text-sand/85">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-20 bg-parchment scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-ink mb-12">Projects</h2>

        <FeaturedProject project={featuredProject} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-espresso rounded-xl overflow-hidden border border-bark shadow-md hover:border-gold/40 hover:-translate-y-0.5 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover border-b border-bark" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-semibold text-parchment mb-3">{project.title}</h3>
                <p className="text-sand/80 leading-relaxed mb-6 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  className="font-semibold text-gold hover:text-gold-light hover:underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
