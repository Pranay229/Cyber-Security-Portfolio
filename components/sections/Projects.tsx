'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from '@/components/Section';
import { supabase, Project } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

      if (data && !error) {
        setProjects(data);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <Section id="projects" title="Featured Projects" subtitle="Real-world security solutions and research">
        <div className="text-center text-muted-foreground">Loading projects...</div>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Real-world security solutions and research"
    >
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={selectedCategory === category ? 'cyber-button' : 'border-primary/30'}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card-hover p-6 flex flex-col h-full"
          >
            <div className="mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                {project.category}
              </Badge>
            </div>

            <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>

            <p className="text-sm text-muted-foreground mb-4 flex-grow">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-secondary mb-2">Problem Statement</h4>
              <p className="text-xs text-foreground/80">{project.problem_statement}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-secondary mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {project.tools.map((tool: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-secondary mb-2">Security Concepts</h4>
              <div className="flex flex-wrap gap-1">
                {project.security_concepts.map((concept: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {concept}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              {project.github_url && (
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.live_url && (
                <Button size="sm" className="flex-1 cyber-button" asChild>
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
