import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  description: string;
  deliverables?: string[];
}

export const ServiceCard = ({
  title,
  description,
  deliverables,
}: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-card-inner">
        <h3 className="service-title">{title}</h3>

        {/* Mock wireframe lines representing the design asset in Figma */}
        <div className="service-illustration">
          <div className="mock-window">
            <div className="mock-header" aria-hidden="true">
              <span className="dot dot-r"></span>
              <span className="dot dot-y"></span>
              <span className="dot dot-g"></span>
            </div>
            <div className="description">{description}</div>
            {deliverables && deliverables.length > 0 && (
              <div className="service-deliverables">
                {deliverables.map((item) => (
                  <span key={item} className="service-deliverable-pill">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
