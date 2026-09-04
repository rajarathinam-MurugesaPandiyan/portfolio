import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_HEADER, SERVICES_LIST } from "../../constants";
import "./Services.css";

export const Services = () => {
  return (
    <section className="services-section" id="service">
      <div className="container">
        <div className="services-header-wrapper">
          <SectionHeader
            title={SERVICES_HEADER.title}
            highlight={SERVICES_HEADER.highlight}
            subtitle={SERVICES_HEADER.subtitle}
            theme="dark"
          />
        </div>

        <div className="services-grid">
          {SERVICES_LIST.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
