import { Employer } from "@/types";
import EmployerCard from "./EmployerCard";

interface EmployersSectionProps {
  employers: Employer[];
  onUpdateEmployer: (employerId: string, updates: Partial<Employer>) => void;
}

const EmployersSection = ({ employers, onUpdateEmployer }: EmployersSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience & Work</h2>
      {employers.map(employer => (
        <EmployerCard
          key={employer.id}
          employer={employer}
          onUpdateEmployer={(updates) => onUpdateEmployer(employer.id, updates)}
        />
      ))}
    </div>
  );
};

export default EmployersSection;