'use client';

import { motion } from 'framer-motion';
import { Brain, Search, Shield, Zap } from 'lucide-react';
import Section from '@/components/Section';
import Terminal from '@/components/Terminal';

const features = [
  {
    icon: Brain,
    title: 'AI Threat Detection',
    description: 'Machine learning models trained on millions of security events to detect anomalies and zero-day threats',
  },
  {
    icon: Search,
    title: 'Log Analysis',
    description: 'Automated parsing and correlation of security logs using NLP and pattern recognition',
  },
  {
    icon: Shield,
    title: 'Automated Response',
    description: 'Intelligent incident response workflows that adapt based on threat severity and context',
  },
  {
    icon: Zap,
    title: 'Real-time Detection',
    description: 'Sub-second threat detection with minimal false positives using ensemble learning',
  },
];

const terminalLogs = [
  'Initializing AI Security Analysis Engine...',
  'Loading threat intelligence database [98.5% complete]',
  'Analyzing network traffic patterns...',
  'ALERT: Suspicious outbound connection detected',
  'Source: 192.168.1.45 | Destination: 45.142.212.61',
  'AI Confidence Score: 94%',
  'Threat Classification: C2 Beacon Activity',
  'Recommended Action: Block and Isolate',
  'Automated response initiated...',
  'Host successfully quarantined. Incident logged.',
];

export default function AISecurityShowcase() {
  return (
    <Section
      id="ai-security"
      title="AI Security Innovation"
      subtitle="Leveraging artificial intelligence for next-generation threat detection"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              AI-Powered Security Operations
            </h3>
            <p className="text-foreground/90 mb-6">
              By integrating machine learning and artificial intelligence into security operations, I have developed systems that can process thousands of security events per second, identify patterns invisible to traditional SIEM tools, and respond to threats with minimal human intervention.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 mt-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">98.5% Detection Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    Achieved through ensemble models combining supervised and unsupervised learning
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 mt-1">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">0.3% False Positive Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    Reducing alert fatigue while maintaining high sensitivity to threats
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 mt-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sub-Second Response</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated containment actions executed within milliseconds of detection
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4"
              >
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Live Demo: AI Threat Analysis</h3>
            <Terminal lines={terminalLogs} />
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Mitigation Steps</h3>
            <div className="space-y-3">
              {[
                { step: 1, action: 'Isolate affected host from network', status: 'Completed' },
                { step: 2, action: 'Block malicious IP at firewall', status: 'Completed' },
                { step: 3, action: 'Collect forensic artifacts', status: 'In Progress' },
                { step: 4, action: 'Update threat intelligence feeds', status: 'Queued' },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                      {item.step}
                    </div>
                    <span className="text-sm">{item.action}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.status === 'Completed'
                        ? 'bg-secondary/20 text-secondary'
                        : item.status === 'In Progress'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
