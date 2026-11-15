import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProject, projects } from '../data/projects';

const FeaturedProject = ({ project }) => (
  <article className="mb-12 rounded-xl bg-espresso text-sand p-8 md:p-12 shadow-lg border border-clay/20">
    <p className="font-serif italic text-lg text-gold mb-2">Latest project</p>
    <h3 className="font-serif text-3xl md:text-4xl font-semibold text-parchment mb-4">{project.title}</h3>
    <p className="text-lg text-sand/85 leading-relaxed max-w-3xl mb-6">{project.summary}</p>
    <ul className="flex flex-wrap gap-2 mb-8">
      {project.tags.map((tag) => (
        <li key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-gold/40 text-gold-light">
          {tag}
        </li>
      ))}
    </ul>
    <ul className="space-y-4 max-w-4xl">
      {project.highlights.map((item) => (
        <li key={item.label} className="flex gap-4 leading-relaxed text-sand/80">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>
            <span className="font-semibold text-parchment">{item.label}.</span> {item.text}
          </span>
        </li>
      ))}
    </ul>
    <Link
      to={project.link}
      className="inline-block mt-8 font-semibold text-gold hover:text-gold-light hover:underline underline-offset-4"
    >
      Read case study →
    </Link>
  </article>
);

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-20 bg-bark scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-parchment mb-12">Projects</h2>

        <FeaturedProject project={featuredProject} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-espresso rounded-xl overflow-hidden border border-clay/20 shadow-md hover:border-gold/40 hover:-translate-y-0.5 transition"
            >
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-semibold text-parchment mb-3">{project.title}</h3>
                <p className="text-sand/80 leading-relaxed mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-gold/40 text-gold-light">
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <Link
                    to={project.link}
                    className="font-semibold text-gold hover:text-gold-light hover:underline underline-offset-4"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
