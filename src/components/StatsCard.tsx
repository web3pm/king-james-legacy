
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  gradientClass?: string;
}

const StatsCard = ({ title, value, description, gradientClass = "lakers-gradient" }: StatsCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <div className={cn("h-2", gradientClass)}></div>
      <CardContent className="pt-6">
        <h3 className="text-gray-500 font-medium text-sm uppercase">{title}</h3>
        <p className="text-4xl font-bold my-2">{value}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
