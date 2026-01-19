import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  whatYouGet: string[];
  turnaround: string;
  price: string;
}

export function ServiceCard({
  title,
  description,
  whatYouGet,
  turnaround,
  price,
}: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-white/70">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-white/70">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gold">
            What you get
          </h4>
          <ul className="mt-2 space-y-1">
            {whatYouGet.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
          <span>Turnaround: {turnaround}</span>
          <span>{price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
