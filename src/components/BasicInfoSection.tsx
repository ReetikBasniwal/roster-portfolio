import { Card, CardContent } from "@/components/ui/card";
import { BasicInfo } from "@/types";
import { Pencil } from "lucide-react";
import { useState } from "react";
import EditableBasicInfoSection from "./EditableBasicInfoSection";

interface BasicInfoSectionProps {
  info: BasicInfo;
}

const BasicInfoSection = ({ info }: BasicInfoSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <EditableBasicInfoSection info={info} handleCancel={() => setIsEditing(false)} />;
  }

  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-6">
          {info.profileImage && (
            <img
              src={info.profileImage}
              alt={`${info.firstName} ${info.lastName}`}
              className="w-40 h-40 rounded-xl object-cover"
            />
          )}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between group">
                <div className="text-lg font-semibold cursor-pointer">
                  {info.firstName} {info.lastName}
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1 hover:bg-muted rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Pencil className="h-4 w-4" />
                </button>
              </div>

              <div className="text-sm text-muted-foreground">
                {info.title}
              </div>
            </div>

            <span className="text-sm font-medium">About me</span>
            <div className="text-muted-foreground leading-relaxed">
              {info.summary ?? ""}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoSection;