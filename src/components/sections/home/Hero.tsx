'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Revolutionize Your Financial Future',
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
      title: 'Bank-Grade Security',
      description:
        '256-bit encryption and multi-factor authentication keep your data safe and secure',
    },
    {
      icon: 'Zap',
      title: 'Real-Time Monitoring',
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
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop')",
      }}
    >
      {/* Innovative gradient overlay with fintech colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-blue-900/85 to-cyan-900/90" />

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-violet-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-100 border-cyan-400/30 backdrop-blur-sm"
              >
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl text-cyan-100/90 leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group shadow-lg shadow-cyan-500/25"
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
                className="border-violet-400/50 text-violet-100 hover:bg-violet-500/20 hover:border-violet-300 backdrop-blur-sm transition-all duration-300"
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
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300 p-3 rounded-lg group-hover:from-cyan-400/30 group-hover:to-violet-500/30 transition-all duration-300 backdrop-blur-sm">
                        {getIcon(feature.icon)}
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-lg text-white">
                          <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                        </h3>
                        <p className="text-cyan-100/80 leading-relaxed">
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
