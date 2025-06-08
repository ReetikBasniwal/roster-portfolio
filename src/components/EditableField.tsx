import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Edit2, Save, X } from "lucide-react";

interface EditableFieldProps {
  value: string;
  onSave: (value: string) => void;
  type?: 'input' | 'textarea';
  placeholder?: string;
  className?: string;
  displayClassName?: string;
  label?: string;
}

const EditableField = ({ 
  value, 
  onSave, 
  type = 'input', 
  placeholder,
  className = '',
  displayClassName = '',
  label 
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        {label && <label className="text-sm font-medium">{label}</label>}
        {type === 'textarea' ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className={className}
            rows={4}
          />
        ) : (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className={className}
          />
        )}
        <div className="flex gap-2">
          <Button size="sm" onClick={handleSave}>
            <Save className="h-3 w-3 mr-1" />
            Save
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-3 w-3 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className={`${displayClassName} cursor-pointer`} onClick={() => setIsEditing(true)}>
        {value || placeholder}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => setIsEditing(true)}
      >
        <Edit2 className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default EditableField;