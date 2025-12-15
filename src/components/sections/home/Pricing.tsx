'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your Financial Plan',
  subtitle: 'Transparent pricing for every stage of your financial journey',
  billingToggleText: 'Annual billing (Save 20%)',
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for individuals starting their financial journey',
      monthlyPrice: 9,
      yearlyPrice: 86,
      features: [
        'Personal budget tracking',
        'Basic expense categorization',
        'Monthly financial reports',
        'Mobile app access',
        'Email support',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup/starter',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Advanced tools for serious financial planning',
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
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[checked]:bg-primary"
              data-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              <span data-editable="billingToggleText">{config.billingToggleText}</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative ${
                plan.popular
                  ? 'border-primary bg-card shadow-lg scale-105'
                  : 'border-border bg-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
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
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
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
