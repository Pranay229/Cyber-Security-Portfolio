'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, CheckCircle, Clock, Target } from 'lucide-react';
import Section from '@/components/Section';
import { db, Certification } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';

const statusConfig = {
  obtained: { icon: CheckCircle, color: 'text-secondary', bgColor: 'bg-secondary/20', label: 'Obtained' },
  in_progress: { icon: Clock, color: 'text-primary', bgColor: 'bg-primary/20', label: 'In Progress' },
  planned: { icon: Target, color: 'text-muted-foreground', bgColor: 'bg-muted', label: 'Planned' },
};

const platforms = [
  { name: 'TryHackMe', rank: 'Top 1%', icon: '🎯' },
  { name: 'Hack The Box', rank: 'Pro Hacker', icon: '📦' },
  { name: 'Bug Bounty', platforms: 'HackerOne, Bugcrowd', icon: '🐛' },
  { name: 'CTF Player', achievements: '50+ Competitions', icon: '🚩' },
];

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const q = query(collection(db, 'certifications'), orderBy('created_at', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Certification));

        setCertifications(data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
      setLoading(false);
    }

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <Section
        id="certifications"
        title="Certifications & Learning"
        subtitle="Continuous professional development and industry recognition"
      >
        <div className="text-center text-muted-foreground">Loading certifications...</div>
      </Section>
    );
  }

  const groupedCerts = {
    obtained: certifications.filter(c => c.status === 'obtained'),
    in_progress: certifications.filter(c => c.status === 'in_progress'),
    planned: certifications.filter(c => c.status === 'planned'),
  };

  return (
    <Section
      id="certifications"
      title="Certifications & Learning"
      subtitle="Continuous professional development and industry recognition"
    >
      <div className="space-y-12">
        {Object.entries(groupedCerts).map(([status, certs], groupIndex) => {
          if (certs.length === 0) return null;
          const config = statusConfig[status as keyof typeof statusConfig];

          return (
            <div key={status}>
              <div className="flex items-center space-x-2 mb-6">
                <config.icon className={`h-6 w-6 ${config.color}`} />
                <h3 className="text-2xl font-bold">{config.label}</h3>
                <Badge className={config.bgColor}>{certs.length}</Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card-hover p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Award className={`h-8 w-8 ${config.color}`} />
                      <Badge className={config.bgColor}>
                        {config.label}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                    {cert.date_obtained && (
                      <p className="text-xs text-foreground/70 mb-2">
                        Obtained: {new Date(cert.date_obtained).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    )}

                    {cert.credential_id && (
                      <div className="mt-4 p-3 rounded bg-background/50 border border-primary/20">
                        <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                        <p className="text-xs font-mono text-foreground/90">{cert.credential_id}</p>
                      </div>
                    )}

                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-xs text-primary hover:underline"
                      >
                        Verify Credential →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Learning Platforms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="font-bold mb-2">{platform.name}</h4>
                <p className="text-sm text-primary">
                  {'rank' in platform && platform.rank}
                  {'platforms' in platform && platform.platforms}
                  {'achievements' in platform && platform.achievements}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
