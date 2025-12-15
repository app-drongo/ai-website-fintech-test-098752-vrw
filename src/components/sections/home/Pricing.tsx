'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, TrendingUp, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Revolutionary Fintech Pricing',
  subtitle: 'Experience the future of financial technology with our innovative solutions',
  billingToggleText: 'Annual billing (Save 20%)',
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for individuals starting their financial journey',
      monthlyPrice: 9,
      yearlyPrice: 86,
      features: [
        'AI-powered budget tracking',
        'Smart expense categorization',
        'Real-time financial insights',
        'Mobile app access',
        'Email support',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup/starter',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Advanced AI tools for serious financial planning',
      monthlyPrice: 29,
      yearlyPrice: 278,
      features: [
        'Everything in Starter',
        'Investment portfolio tracking',
        'Tax optimization insights',
        'Custom financial goals',
        'Priority support',
        'Advanced analytics',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup/professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for businesses and advisors',
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        'Everything in Professional',
        'Multi-client management',
        'White-label reporting',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact/enterprise',
      popular: false,
    },
  ],
  guaranteeText: '30-day money-back guarantee',
  trustText: 'Trusted by 50,000+ users worldwide',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section
      id="pricing"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop')",
      }}
    >
      {/* Innovative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90" />

      {/* Content with z-10 to appear above overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">Innovative Fintech</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-primary-foreground">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8 bg-background/10 backdrop-blur-sm rounded-full p-2 max-w-xs mx-auto">
            <span
              className={`text-sm px-3 py-1 rounded-full transition-all ${!isYearly ? 'bg-primary text-primary-foreground' : 'text-primary-foreground/70'}`}
            >
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-background/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm px-3 py-1 rounded-full transition-all ${isYearly ? 'bg-primary text-primary-foreground' : 'text-primary-foreground/70'}`}
            >
              <span data-editable="billingToggleText">{config.billingToggleText}</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-card/95 border-primary shadow-2xl shadow-primary/20 scale-105'
                  : 'bg-card/80 border-border/50 hover:bg-card/90'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-card-foreground">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  className={`w-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg'
                  }`}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80 bg-background/10 backdrop-blur-sm rounded-full px-6 py-3 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span data-editable="guaranteeText">{config.guaranteeText}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span data-editable="trustText">{config.trustText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
