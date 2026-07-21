import { ElementType } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ElementType;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <Icon className="service-card-icon" />
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-description">{description}</p>
    </div>
  );
}