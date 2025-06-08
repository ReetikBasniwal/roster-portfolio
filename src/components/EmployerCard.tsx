import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { Employer } from "@/types";
import EditableField from "./EditableField";
import VideoGallery from "./VideoGallery";

interface EmployerCardProps {
  employer: Employer;
  onUpdateEmployer: (updates: Partial<Employer>) => void;
}

const EmployerCard = ({ employer, onUpdateEmployer }: EmployerCardProps) => {
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
          {employer.jobTitle ? <EditableField
            label="Job Title"
            value={employer.jobTitle}
            onSave={(value) => onUpdateEmployer({ jobTitle: value })}
            placeholder="Enter job title"
            displayClassName="text-lg font-semibold"
          /> : <></>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            <div className="space-y-2">
              <label className="text-sm font-medium">Employment Type</label>
              {/* <Select
                value={employer.employmentType}
                onValueChange={(value: 'Full-time' | 'Contract') => 
                  onUpdateEmployer({ employmentType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>

          {/* <EditableField
            label="Contribution Summary"
            value={employer.summary??''}
            onSave={(value) => onUpdateEmployer({ summary: value })}
            type="textarea"
            placeholder="Describe your contributions and achievements"
            displayClassName="text-muted-foreground leading-relaxed"
          /> */}
        </div>

        <VideoGallery videos={employer.videos} />
      </CardContent>
    </Card>
  );
};

export default EmployerCard;