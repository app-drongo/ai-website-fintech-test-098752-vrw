'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Next-Generation Financial Infrastructure for Modern Businesses',
  subheadline:
    'Streamline payments, automate compliance, and scale your financial operations with our cutting-edge fintech platform built for the future of finance.',
  description:
    'Join thousands of forward-thinking companies who trust our AI-powered financial solutions to reduce operational costs by 40% while ensuring 99.9% uptime and bank-level security.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  features: [
    'Real-time transaction processing',
    'Advanced fraud detection',
    'Regulatory compliance automation',
  ],
  trustBadge: 'SOC 2 Type II Certified',
  statsLabel: 'Trusted by 10,000+ businesses worldwide',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-background via-accent/5 to-primary/10 text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                <span data-editable="headline">{config.headline}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
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
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span data-editable="statsLabel">{config.statsLabel}</span>
              </p>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Main Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">Financial Dashboard</span>
                      </div>
                      <Badge className="bg-primary/10 text-primary">Live</Badge>
                    </div>

                    {/* Mock Chart */}
                    <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end justify-between p-4">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, idx) => (
                        <div
                          key={idx}
                          className="bg-primary rounded-sm transition-all duration-500 delay-[var(--delay)]"
                          style={
                            {
                              height: `${height}%`,
                              width: '12%',
                              '--delay': `${idx * 100}ms`,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/30 rounded-lg p-4 text-center">
                      <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">99.9% Uptime</div>
                    </div>
                    <div className="bg-accent/30 rounded-lg p-4 text-center">
                      <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">Bank-Level Security</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
