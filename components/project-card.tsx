import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
}

export function ProjectCard({
  slug,
  title,
  category,
  summary,
  image,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardContent className="space-y-3 pt-5">
        <div className="text-xs uppercase tracking-wide text-gold">{category}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{summary}</p>
        <Link href={`/portfolio/${slug}`} className="text-sm text-gold">
          View case study →
        </Link>
      </CardContent>
    </Card>
  );
}
