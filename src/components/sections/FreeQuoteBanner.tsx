import { Link } from "react-router-dom";

interface FreeQuoteBannerProps {
  className?: string;
}

export function FreeQuoteBanner({ className = "" }: FreeQuoteBannerProps) {
  return (
    <div className={`py-8 flex justify-center ${className}`}>
      <Link 
        to="/contact-us" 
        className="inline-block hover:scale-105 transition-transform duration-300"
        aria-label="Get a free quote"
      >
        {/* Hand-drawn style Free Quote banner */}
        <div className="relative">
          {/* Red oval outline */}
          <svg 
            viewBox="0 0 400 180" 
            className="w-[300px] md:w-[400px] h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Red hand-drawn oval */}
            <ellipse 
              cx="180" 
              cy="80" 
              rx="160" 
              ry="65" 
              stroke="#c41e3a" 
              strokeWidth="4" 
              fill="none"
              strokeLinecap="round"
              style={{ 
                strokeDasharray: "10 5",
                transform: "rotate(-3deg)",
                transformOrigin: "center"
              }}
            />
            {/* Free Quote text */}
            <text 
              x="180" 
              y="90" 
              textAnchor="middle" 
              fill="#c41e3a" 
              fontSize="52" 
              fontFamily="'Brush Script MT', cursive"
              fontStyle="italic"
            >
              Free Quote
            </text>
            {/* Click Here text */}
            <text 
              x="280" 
              y="140" 
              textAnchor="middle" 
              fill="#ff9c00" 
              fontSize="28" 
              fontFamily="'Brush Script MT', cursive"
              fontStyle="italic"
            >
              Click Here
            </text>
          </svg>
        </div>
      </Link>
    </div>
  );
}
