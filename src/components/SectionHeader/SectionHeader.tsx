import './SectionHeader.css'

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeader = ({ title, subtitle, highlight, theme = 'light' }: SectionHeaderProps) => {
  return (
    <div className={`section-header theme-${theme}`}>
      <h2 className="section-title">
        {title} <span className="highlight-orange">{highlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
