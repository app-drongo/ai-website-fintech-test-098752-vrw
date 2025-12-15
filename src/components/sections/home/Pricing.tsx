'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Building2, Crown } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Transparent Pricing for Every Business Size',
  subtitle: 'Choose the perfect plan to accelerate your financial operations',
  billingToggle: {
    monthly: 'Monthly',
    yearly: 'Yearly',
  },
  yearlyDiscount: 'Save 20%',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      icon: 'zap',
      monthlyPrice: 29,
      yearlyPrice: 23,
      currency: '$',
      period: 'month',
      popular: false,
      features: [
        'Up to 100 transactions/month',
        'Basic financial reporting',
        'Email support',
        'Mobile app access',
        'Bank account integration',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      icon: 'building2',
      monthlyPrice: 79,
      yearlyPrice: 63,
      currency: '$',
      period: 'month',
      popular: true,
      features: [
        'Unlimited transactions',
        'Advanced analytics & insights',
        'Priority support',
        'API access',
        'Multi-currency support',
        'Custom integrations',
        'Team collaboration tools',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      icon: 'crown',
      monthlyPrice: 199,
      yearlyPrice: 159,
      currency: '$',
      period: 'month',
      popular: false,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom workflows',
        'Advanced security features',
        'SLA guarantee',
        'White-label options',
        '24/7 phone support',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-6 w-6" />;
      case 'building2':
        return <Building2 className="h-6 w-6" />;
      case 'crown':
        return <Crown className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.monthly">{config.billingToggle.monthly}</span>
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              <span data-editable="billingToggle.yearly">{config.billingToggle.yearly}</span>
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                <span data-editable="yearlyDiscount">{config.yearlyDiscount}</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={plan.id}
              className={`relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {getIcon(plan.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold">
                      <span data-editable={`plans[${idx}].currency`}>{plan.currency}</span>
                      <span
                        data-editable={`plans[${idx}].${isYearly ? 'yearlyPrice' : 'monthlyPrice'}`}
                      >
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /<span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground mt-1">Billed annually</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Need a custom solution?
            <Button
              variant="link"
              className="p-0 ml-1 h-auto text-primary"
              onClick={() => navigate('/contact')}
              data-editable-href="contactHref"
              data-href="/contact"
            >
              Contact our sales team
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
