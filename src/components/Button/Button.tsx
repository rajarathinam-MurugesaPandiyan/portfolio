import './Button.css'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'dark' | 'icon';
  onClick?: () => void;
  className?: string;
  hasArrow?: boolean;
}

export const Button = ({ children, variant = 'primary', onClick, className = '', hasArrow = false }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
      {hasArrow && (
        <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}
