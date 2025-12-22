import { MessageCircle, Pencil, Wrench, Settings, Hammer } from "lucide-react";

interface ProcessStep {
  icon: "consultation" | "design" | "production" | "installation" | "maintenance";
  title: string;
  subtitle?: string;
}

interface ProcessIconsProps {
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  { icon: "consultation", title: "FREE", subtitle: "CONSULTATION" },
  { icon: "design", title: "SIGN", subtitle: "DESIGN" },
  { icon: "production", title: "SIGN", subtitle: "PRODUCTION" },
  { icon: "installation", title: "SIGN", subtitle: "INSTALLATION" },
  { icon: "maintenance", title: "SIGN", subtitle: "MAINTENANCE" },
];

const iconMap = {
  consultation: MessageCircle,
  design: Pencil,
  production: Wrench,
  installation: Settings,
  maintenance: Hammer,
};

export function ProcessIcons({ steps = defaultSteps, className = "" }: ProcessIconsProps) {
  return (
    <div className={`py-8 ${className}`}>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {steps.map((step, index) => {
          const IconComponent = iconMap[step.icon];
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-3 flex items-center justify-center">
                <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-accent stroke-[1.5]" />
              </div>
              <p className="font-bold text-foreground text-sm md:text-base">
                {step.title}
              </p>
              {step.subtitle && (
                <p className="font-bold text-foreground text-sm md:text-base">
                  {step.subtitle}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
