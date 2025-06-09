// import { React } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EditableFieldProps {
  value: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  className?: string;
  displayClassName?: string;
  label?: string;
  setEditValue: (value: string) => void
}

const EditableField = ({ 
  value, 
  type = 'input', 
  placeholder,
  className = '',
  setEditValue,
  label 
}: EditableFieldProps) => {

  return (
    <div className="space-y-2">
        {label && <label className="text-sm font-medium">{label}</label>}
        {type === 'textarea' ? (
        <Textarea
            value={value}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className={className}
            rows={4}
        />
        ) : (
        <Input
            value={value}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className={className}
        />
        )}
        <div className="flex gap-2">
        </div>
    </div>
  );
};

export default EditableField;