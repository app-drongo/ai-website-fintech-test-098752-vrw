'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Shield,
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
  subtitle: 'Everything you need to manage, analyze, and grow your wealth',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  features: [
    {
      icon: 'TrendingUp',
      title: 'Advanced Analytics',
      description:
        'Real-time market insights and portfolio performance tracking with AI-powered predictions',
      highlight: '99.9% Accuracy',
    },
    {
      icon: 'Shield',
      title: 'Bank-Grade Security',
      description:
        'Enterprise-level encryption and multi-factor authentication to protect your financial data',
      highlight: 'SOC 2 Certified',
    },
    {
      icon: 'Zap',
      title: 'Lightning Fast Execution',
      description: 'Execute trades and transfers in milliseconds with our optimized infrastructure',
      highlight: '< 50ms Latency',
    },
    {
      icon: 'BarChart3',
      title: 'Smart Reporting',
      description: 'Automated tax reporting and compliance tracking with customizable dashboards',
      highlight: 'Auto-Generated',
    },
    {
      icon: 'Lock',
      title: 'Privacy First',
      description: 'Your data stays yours. Zero-knowledge architecture ensures complete privacy',
      highlight: 'Zero-Knowledge',
    },
    {
      icon: 'Globe',
      title: 'Global Markets',
      description: 'Access to 50+ international markets and 10,000+ financial instruments',
      highlight: '50+ Markets',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

const iconMap = {
  TrendingUp,
  Shield,
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      <span data-editable={`features[${idx}].highlight`}>{feature.highlight}</span>
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-primary">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Enterprise Ready</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Financial Management?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Join thousands of professionals who trust our platform
            </p>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
