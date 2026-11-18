import React, { useEffect, useMemo, useState } from 'react';
import { workItems } from '../data/work';

const ALL = 'All';

const WorkSection = () => {
  const [category, setCategory] = useState(ALL);
  // The piece open in the full-size view, and which of its pages is showing.
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);

  const categories = useMemo(
    () => [ALL, ...new Set(workItems.map((item) => item.category))],
    []
  );
  const visible = category === ALL ? workItems : workItems.filter((item) => item.category === category);
  const pageCount = open ? open.images.length : 0;

  const show = (item) => {
    setOpen(item);
    setPage(0);
  };
  const close = () => setOpen(null);

  // Escape closes the full-size view; arrow keys flip through a multi-page piece.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(null);
      if (event.key === 'ArrowRight') setPage((p) => (p + 1) % pageCount);
      if (event.key === 'ArrowLeft') setPage((p) => (p - 1 + pageCount) % pageCount);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, pageCount]);

  if (workItems.length === 0) return null;

  return (
    <section id="work" className="py-20 bg-bark scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-parchment mb-4">Design Work</h2>
        <p className="text-sand/75 max-w-2xl mb-10">
          Flyers and brochures I designed for regattas, recruiting, and fundraising.
        </p>

        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setCategory(name)}
                aria-pressed={category === name}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  category === name
                    ? 'bg-gold text-espresso border-gold'
                    : 'border-clay/40 text-sand/80 hover:border-gold/60 hover:text-gold'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col h-full bg-espresso rounded-xl overflow-hidden border border-clay/20 hover:border-gold/40 transition-colors"
            >
              {item.images?.length > 0 && (
                <button
                  type="button"
                  onClick={() => show(item)}
                  aria-label={`View ${item.title} full size`}
                  className="relative block aspect-[4/5] overflow-hidden bg-espresso p-4"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {item.images.length > 1 && (
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-espresso/85 text-xs font-medium text-sand">
                      {item.images.length} pages
                    </span>
                  )}
                </button>
              )}
              <div className="p-5 flex flex-col flex-1">
                <p className="font-serif italic text-gold text-sm">{item.category}</p>
                <h3 className="font-serif text-xl font-semibold text-parchment mt-1">{item.title}</h3>
                {item.description && <p className="text-sand/75 text-sm mt-2 leading-relaxed">{item.description}</p>}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 font-semibold text-gold hover:text-gold-light hover:underline underline-offset-4"
                  >
                    View in Canva →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={close}
          className="fixed inset-0 z-[60] bg-espresso/95 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-sand/80 hover:text-gold text-sm font-semibold"
          >
            Close ✕
          </button>
          <img
            src={open.images[page]}
            alt={pageCount > 1 ? `${open.title}, page ${page + 1} of ${pageCount}` : open.title}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
          />
          <div className="mt-4 flex items-center gap-6 text-parchment" onClick={(event) => event.stopPropagation()}>
            {pageCount > 1 && (
              <button
                type="button"
                onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                className="text-gold hover:text-gold-light font-semibold"
              >
                ← Prev
              </button>
            )}
            <p className="font-serif text-lg text-center">
              {open.title}
              {pageCount > 1 && <span className="text-sand/70 text-sm"> · page {page + 1} of {pageCount}</span>}
            </p>
            {pageCount > 1 && (
              <button
                type="button"
                onClick={() => setPage((p) => (p + 1) % pageCount)}
                className="text-gold hover:text-gold-light font-semibold"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
