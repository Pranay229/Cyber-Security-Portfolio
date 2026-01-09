'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Section from '@/components/Section';
import { supabase, Skill } from '@/lib/supabase';
import * as Icons from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Blue Team': 'from-blue-500 to-cyan-500',
  'Red Team': 'from-red-500 to-orange-500',
  'AI & Automation': 'from-purple-500 to-pink-500',
  'Cloud & Tools': 'from-green-500 to-emerald-500',
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

      if (data && !error) {
        setSkills(data);
      }
      setLoading(false);
    }

    fetchSkills();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (loading) {
    return (
      <Section id="skills" title="Skills Dashboard" subtitle="Technical expertise across security domains">
        <div className="text-center text-muted-foreground">Loading skills...</div>
      </Section>
    );
  }

  return (
    <Section
      id="skills"
      title="Skills Dashboard"
      subtitle="Technical expertise across security domains"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => {
                const IconComponent = skill.icon && (Icons as any)[skill.icon] ? (Icons as any)[skill.icon] : Icons.Code;

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${categoryColors[category] || 'from-primary to-secondary'} rounded-full`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
