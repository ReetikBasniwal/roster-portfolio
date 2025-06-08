import { Card, CardContent } from "@/components/ui/card";
// import { CreativeProfile } from "@/types";
import EditableField from "./EditableField";
import { BasicInfo } from "@/types";

interface BasicInfoSectionProps {
  info: BasicInfo;
  onUpdateProfile: (updates: Partial<unknown>) => void;
}

const BasicInfoSection = ({ info, onUpdateProfile }: BasicInfoSectionProps) => {
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
                <div className={`text-lg font-semibold cursor-pointer`}>
                    {info.firstName} {info.lastName}
                </div>

                <div className="text-sm text-muted-foreground">
                    {info.title}
                </div>
            </div>

            <span>About me</span>
            <EditableField
              label=""
              value={info.summary??''}
              onSave={(value) => onUpdateProfile({ summary: value })}
              type="textarea"
              placeholder="Enter professional summary"
              displayClassName="text-muted-foreground leading-relaxed"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoSection;