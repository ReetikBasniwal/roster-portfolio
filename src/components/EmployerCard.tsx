import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
import { Briefcase, Pencil } from "lucide-react";
import { Employer } from "@/types";
import EditableField from "./EditableField";
import VideoGallery from "./VideoGallery";

interface EmployerCardProps {
  employer: Employer;
  onUpdateEmployer: (updates: Partial<Employer>) => void;
}

const EmployerCard = ({ employer, onUpdateEmployer }: EmployerCardProps) => {
  const [isEditingType, setIsEditingType] = React.useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 mt-1 flex-shrink-0 place-self-start" />
          <div className="flex-1">
            <EditableField
              label=""
              value={employer.name}
              onSave={(value) => onUpdateEmployer({ name: value })}
              placeholder="Enter employer name"
              displayClassName="text-lg font-semibold"
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <EditableField
            label="Job Title"
            value={employer.jobTitle??''}
            onSave={(value) => onUpdateEmployer({ jobTitle: value })}
            placeholder="Enter job title"
            displayClassName="text-lg font-semibold"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {!isEditingType ? (
                  <div className="flex items-center gap-2 group">
                    <span className="text-muted-foreground">
                      {employer.employmentType || 'Freelance'}
                    </span>
                    <button 
                      onClick={() => setIsEditingType(true)}
                      className="p-1 hover:bg-muted rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <Select
                    value={employer.employmentType}
                    onValueChange={(value: 'Full-time' | 'Contract' | 'Freelance' | 'Internship') => {
                      onUpdateEmployer({ employmentType: value });
                      setIsEditingType(false);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>
        </div>

        <VideoGallery videos={employer.videos} />
      </CardContent>
    </Card>
  );
};

export default EmployerCard;