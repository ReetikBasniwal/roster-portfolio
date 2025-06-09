import { Employer } from "@/types";
import EmployerCard from "./EmployerCard";

interface EmployersSectionProps {
  employers: Employer[];
}

const EmployersSection = ({ employers }: EmployersSectionProps) => {


  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience & Work</h2>
      {employers.map(employer => (
        <EmployerCard 
          key={employer.id}
          employer={employer}
        />
      ))}
    </div>
  );
};

export default EmployersSection;