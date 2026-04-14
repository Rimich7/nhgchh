import React from "react";

interface HazardStripeProps {
  className?: string;
  height?: number;
}

const HazardStripe: React.FC<HazardStripeProps> = ({
  className = "",
  height = 16,
}) => {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            #f59e0b,
            #f59e0b 12px,
            #1a1a1a 12px,
            #1a1a1a 24px
          )`,
        }}
      />
    </div>
  );
};

export default HazardStripe;
