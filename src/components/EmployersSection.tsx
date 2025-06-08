import { Employer } from "@/types";
import EmployerCard from "./EmployerCard";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateEmployer } from '@/redux/counterSlice'

interface EmployersSectionProps {
  employers: Employer[];
}

const EmployersSection = ({ employers }: EmployersSectionProps) => {

    const dispatch = useAppDispatch();

    const updateEmployerDetail = (currentEmployer: Employer, updatedEmployer: Partial<Employer>) => {
        const updatedEmployersData = {
            ...currentEmployer,
            ...updatedEmployer
        }
        
        dispatch(updateEmployer(updatedEmployersData));
    }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience & Work</h2>
      {employers.map(employer => (
        <EmployerCard 
          key={employer.id}
          employer={employer}
          onUpdateEmployer={(updates) => updateEmployerDetail(employer, updates)}
        />
      ))}
    </div>
  );
};

export default EmployersSection;