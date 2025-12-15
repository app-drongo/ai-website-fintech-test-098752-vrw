'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  Lock,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Financial Tools',
  subtitle: 'Everything you need to manage your finances with confidence',
  description:
    'Our comprehensive suite of financial tools helps you track, analyze, and optimize your money management with enterprise-grade security.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      icon: 'Shield',
      title: 'Bank-Level Security',
      description: '256-bit encryption and multi-factor authentication protect your financial data',
      highlight: 'SOC 2 Compliant',
    },
    {
      icon: 'TrendingUp',
      title: 'Smart Analytics',
      description:
        'AI-powered insights help you understand spending patterns and optimize investments',
      highlight: 'Real-time Data',
    },
    {
      icon: 'Zap',
      title: 'Instant Transactions',
      description:
        'Lightning-fast payments and transfers with real-time processing and notifications',
      highlight: '24/7 Processing',
    },
    {
      icon: 'BarChart3',
      title: 'Advanced Reporting',
      description:
        'Comprehensive financial reports with customizable dashboards and export options',
      highlight: 'Custom Reports',
    },
    {
      icon: 'Lock',
      title: 'Privacy First',
      description: 'Your data stays private with zero-knowledge architecture and local encryption',
      highlight: 'GDPR Compliant',
    },
    {
      icon: 'Globe',
      title: 'Global Access',
      description:
        'Multi-currency support with real-time exchange rates and international transfers',
      highlight: '150+ Countries',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

const iconMap = {
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  Lock,
  Globe,
};

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      <span data-editable={`features[${idx}].highlight`}>{feature.highlight}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                  <div className="flex items-center mt-4 text-primary">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Enterprise Ready</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 border border-border rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to transform your financial management?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to streamline their financial
            operations.
          </p>
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
