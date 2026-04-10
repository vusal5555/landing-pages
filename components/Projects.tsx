"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./projects/BrowserFrame";
import LegalEngineMockup from "./projects/LegalEngineMockup";
import LeadEnricherMockup from "./projects/LeadEnricherMockup";
import BlogGeneratorMockup from "./projects/BlogGeneratorMockup";
import LeadScraperMockup from "./projects/LeadScraperMockup";

const projects = [
  {
    title: "Heuristiq AI Legal Engine",
    description:
      "RAG-powered legal chatbot that helps lawyers analyze contracts and case documents in seconds.",
    tags: ["RAG", "PDF Processing", "OpenAI", "FastAPI"],
    mockup: <LegalEngineMockup />,
  },
  {
    title: "AI Lead Enricher",
    description:
      "Automated lead enrichment pipeline that pulls company data, social profiles, and scores leads for priority outreach.",
    tags: ["Web Scraping", "Data Enrichment", "Apify", "Supabase"],
    mockup: <LeadEnricherMockup />,
  },
  {
    title: "AI Blog Post Generator",
    description:
      "Content generation system that produces SEO-optimized, brand-voice-aligned blog posts from a single topic prompt.",
    tags: ["OpenAI", "Content Automation", "SEO", "Next.js"],
    mockup: <BlogGeneratorMockup />,
  },
  {
    title: "AI Lead Scraper",
    description:
      "Targeted lead scraping tool that finds and exports verified business leads from any niche and location.",
    tags: ["Apify", "Web Scraping", "Data Pipelines", "Celery"],
    mockup: <LeadScraperMockup />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We&apos;ve <span className="text-accent">Built</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Real tools, real results. Every project ships with production-grade
            code and clear documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <BrowserFrame>{project.mockup}</BrowserFrame>

              <div className="mt-4 px-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-surface-light border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
