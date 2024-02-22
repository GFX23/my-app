
type Props = {
  label: string;
  className?: string;
  children?: React.ReactNode;
};

export const Card: FP<Props> = ({ label, children, className }) => {
  const labels = "Add label";

  return (
    <div className={`container flex-col max-w-full ${className} `}>
      <div className="header">
        {label}
      </div>
      <div className="flex flex-col p-2 gap-2">
        {children}
        </div>
        </div>
      
  );
};