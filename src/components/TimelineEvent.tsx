
import { cn } from "@/lib/utils";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineEvent = ({ year, title, description, index }: TimelineEventProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="timeline-item">
      <div className="timeline-dot" style={{ top: '24px' }}></div>
      <div className={cn(
        "timeline-content",
        isEven ? "ml-8" : "mr-8"
      )}>
        <div className="font-bold text-xl mb-1 bg-clip-text text-transparent lakers-gradient">{year}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
