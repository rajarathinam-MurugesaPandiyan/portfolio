import './ServiceCard.css'

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-card-inner">
        <h3 className="service-title">{title}</h3>
        
        {/* Mock wireframe lines representing the design asset in Figma */}
        <div className="service-illustration">
          <div className="mock-window">
            <div className="mock-header">
              <span className="dot dot-r"></span>
              <span className="dot dot-y"></span>
              <span className="dot dot-g"></span>
            </div>
            {/* <div className="mock-body">
              <div className="mock-line" style={{ width: '40%' }}></div>
              <div className="mock-line" style={{ width: '70%' }}></div>
              <div className="mock-line" style={{ width: '50%' }}></div>
            </div> */}
            <div className='description'>{description}</div> 
          </div>
        </div>
      </div>
    </div>
  )
}
