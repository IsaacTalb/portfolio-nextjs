import { Card, CardContent } from "@/components/ui/card";
export const ServiceCard = ({ title, blurb }: { title: string; blurb: string }) => (
  <Card className="rounded-2xl border-black/10">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-neutral-600">{blurb}</p>
    </CardContent>
  </Card>
);
