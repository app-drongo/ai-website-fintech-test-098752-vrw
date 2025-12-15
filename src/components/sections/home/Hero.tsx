'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Transform Your Financial Future',
  subtitle:
    'Intelligent financial management powered by AI. Make smarter decisions, grow your wealth, and secure your future with our comprehensive platform.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  trustBadge: 'Trusted by 50,000+ businesses',
  features: [
    {
      icon: 'TrendingUp',
      title: 'Smart Analytics',
      description:
        'AI-powered insights that help you understand your financial patterns and optimize spending',
    },
    {
      icon: 'Shield',
      title: 'Bank-Level Security',
      description:
        '256-bit encryption and multi-factor authentication keep your data safe and secure',
    },
    {
      icon: 'Zap',
      title: 'Real-Time Tracking',
      description:
        'Monitor your investments, expenses, and goals with live updates and instant notifications',
    },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      TrendingUp: TrendingUp,
      Shield: Shield,
      Zap: Zap,
      BarChart3: BarChart3,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || BarChart3;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid gap-6">
              {config.features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {getIcon(feature.icon)}
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-lg">
                          <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          <span data-editable={`features[${idx}].description`}>
                            {feature.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
