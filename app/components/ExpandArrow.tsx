interface ExpandArrowProps {
  isExpanded: boolean;
}

export default function ExpandArrow({ isExpanded }: ExpandArrowProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-5 w-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''} flex-shrink-0 mt-1`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
} 