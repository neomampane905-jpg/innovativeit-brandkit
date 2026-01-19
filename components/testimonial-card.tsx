import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <div className="space-y-4">
        <p className="text-sm text-white/70">“{quote}”</p>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-white/50">{company}</p>
        </div>
      </div>
    </Card>
  );
}
