interface StatCardProps {
  value: string;
  label: string;
  showDivider?: boolean;
}

export const StatCard = ({ value, label, showDivider = true }: StatCardProps) => {
  return (
    <>
      <div className="stat">
        <div className="stat-num">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
      {showDivider && <div className="stat-divider"></div>}
    </>
  );
};