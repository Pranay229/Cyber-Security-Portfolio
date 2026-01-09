'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Shield, Bug, AlertTriangle } from 'lucide-react';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const reports = [
  {
    title: 'Web Application Penetration Test Report',
    type: 'Pentest Report',
    date: '2024-12',
    severity: 'Critical',
    findings: 12,
    icon: Bug,
    description: 'Comprehensive security assessment of e-commerce platform identifying SQL injection, XSS, and authentication bypass vulnerabilities.',
  },
  {
    title: 'Bug Bounty Submission: OAuth Bypass',
    type: 'Bug Bounty',
    date: '2024-11',
    severity: 'High',
    findings: 1,
    icon: Shield,
    description: 'Critical authentication bypass in OAuth implementation allowing unauthorized account access. Awarded $5,000 bounty.',
  },
  {
    title: 'Network Infrastructure Security Audit',
    type: 'Security Audit',
    date: '2024-10',
    severity: 'Medium',
    findings: 8,
    icon: AlertTriangle,
    description: 'Network segmentation analysis and firewall rule review identifying misconfigurations and potential lateral movement paths.',
  },
  {
    title: 'API Security Assessment Report',
    type: 'Pentest Report',
    date: '2024-09',
    severity: 'High',
    findings: 15,
    icon: Bug,
    description: 'REST API security testing uncovering IDOR, broken authentication, and excessive data exposure vulnerabilities.',
  },
];

const severityColors: Record<string, string> = {
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  High: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function Reports() {
  return (
    <Section
      id="reports"
      title="Reports & Write-ups"
      subtitle="Professional security assessments and research documentation"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <report.icon className="h-6 w-6 text-primary" />
              </div>
              <Badge className={severityColors[report.severity]}>
                {report.severity}
              </Badge>
            </div>

            <h3 className="text-xl font-bold mb-2">{report.title}</h3>

            <div className="flex items-center gap-3 mb-3">
              <Badge variant="outline" className="text-xs">
                {report.type}
              </Badge>
              <span className="text-xs text-muted-foreground">{report.date}</span>
              <span className="text-xs text-secondary">{report.findings} findings</span>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {report.description}
            </p>

            <div className="pt-4 border-t border-border">
              <h4 className="text-xs font-semibold text-secondary mb-2">Report Includes:</h4>
              <ul className="space-y-1 text-xs text-foreground/80">
                <li>• Executive Summary</li>
                <li>• Detailed Vulnerability Analysis</li>
                <li>• CVSS v3.1 Scoring</li>
                <li>• Proof of Concept</li>
                <li>• Remediation Recommendations</li>
              </ul>
            </div>

            <Button className="w-full mt-6 cyber-button" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Sample Report (PDF)
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 glass-card p-8"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 gradient-text">CVSS Scoring Framework</h3>
            <p className="text-muted-foreground">
              All vulnerabilities are assessed using industry-standard CVSS v3.1 methodology
            </p>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">9.0-10.0 Critical</Badge>
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">7.0-8.9 High</Badge>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">4.0-6.9 Medium</Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">0.1-3.9 Low</Badge>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
