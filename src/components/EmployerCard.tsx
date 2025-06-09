import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Pencil } from "lucide-react";
import { Employer } from "@/types";
// import EditableField from "./EditableField";
import VideoGallery from "./VideoGallery";
import EditableEmployerCard from "./EditableEmployerCard";

interface EmployerCardProps {
  employer: Employer;
}

const EmployerCard = ({ employer }: EmployerCardProps) => {

  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  if(isEditing) {
    return (<EditableEmployerCard employer={employer} handleCancel={() => setIsEditing(false)} />)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 mt-1 flex-shrink-0 place-self-start" />
          <div className="flex-1 flex items-center justify-between group">
            <span className="text-lg font-semibold">{employer.name}</span>

            <button
              onClick={() => setIsEditing(true)}
              className="p-1 hover:bg-muted rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Pencil className="h-4 w-4" />
            </button> 

          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <span className="text-lg font-semibold">
            {employer.jobTitle ?? ""}
          </span>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground mt-2">
                  {employer.employmentType && (
                    <Badge variant="secondary">{employer.employmentType}</Badge>
                  )}
                </span>

                {employer.startTime && (
                  <span className="mt-2">
                    <Duration
                      startTime={employer.startTime}
                      endTime={employer.endTime || ""}
                    />
                  </span>
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

interface DurationProps {
  startTime: string;
  endTime: string;
}

const Duration: React.FC<DurationProps> = ({ startTime, endTime }) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <span className="text-sm text-muted-foreground">
      {formatDate(startTime)} - {endTime ? formatDate(endTime) : 'Present'}
    </span>
  );
};