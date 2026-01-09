'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Bug, Brain, Download } from 'lucide-react';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const interests = [
  {
    icon: Shield,
    title: 'SOC Operations',
    description: 'Real-time threat monitoring and incident response using advanced SIEM platforms',
  },
  {
    icon: Target,
    title: 'Threat Detection',
    description: 'Proactive threat hunting and anomaly detection using behavioral analysis',
  },
  {
    icon: Bug,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments and vulnerability research',
  },
  {
    icon: Brain,
    title: 'AI Security',
    description: 'Machine learning-powered security automation and intelligent threat analysis',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about securing the digital frontier"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                With over 5 years of experience in cybersecurity, I have evolved from a passionate security enthusiast to a seasoned professional specializing in AI-driven security solutions and SOC operations.
              </p>
              <p>
                My journey began with traditional penetration testing and has expanded to include cutting-edge AI/ML applications in threat detection and automated incident response. I thrive on solving complex security challenges and staying ahead of emerging threats.
              </p>
              <p>
                I believe in continuous learning and regularly participate in bug bounty programs, CTF competitions, and security research to sharpen my skills and contribute to the security community.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
              <div className="space-y-4 text-foreground/90">
                <div>
                  <h4 className="font-semibold">Diploma electrical and electronics engineering</h4>
                  <p className="text-sm text-muted-foreground">Discontinued 2020-2023</p>
                </div>
                <div>
                  <h4 className="font-semibold">10th class</h4>
                  <p className="text-sm text-muted-foreground">2019-2020</p>
                </div>
              </div>
            </div>

            <Button className="cyber-button w-full">
              <Download className="mr-2 h-5 w-5" />
              Download Full Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Core Interests</h3>
          <div className="grid gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
