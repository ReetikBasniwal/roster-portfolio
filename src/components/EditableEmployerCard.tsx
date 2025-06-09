import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Employer } from "@/types";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VideoGallery from "./VideoGallery";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateEmployer } from "@/redux/counterSlice";
import { Textarea } from "@/components/ui/textarea";

interface EditableEmployerCardProps {
  employer: Employer;
  handleCancel: () => void;
}

interface FormValues {
  name: string;
  jobTitle: string;
  employmentType:
    | "full-time"
    | "contract"
    | "freelance"
    | "internship"
    | undefined;
  startTime: string;
  endTime: string;
  contributionSummary: string 
}

const formatDateForInput = (dateString: string) => {
  if (!dateString) return "";
  return new Date(dateString).toISOString().split("T")[0];
};

const EditableEmployerCard: React.FC<EditableEmployerCardProps> = ({
  employer,
  handleCancel,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      name: employer.name,
      jobTitle: employer.jobTitle,
      employmentType: employer.employmentType || "full-time",
      startTime: formatDateForInput(employer.startTime || ""),
      endTime: formatDateForInput(employer.endTime || ""),
      contributionSummary: employer.contributionSummary || ""
    },
    validate: (values: FormValues) => {
      const errors: Partial<FormValues> = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.jobTitle) errors.jobTitle = "Job title is required";
      return errors;
    },
    onSubmit: (values: FormValues) => {
      const updatedEmployer: Employer = {
        ...employer,
        ...values,
      };
      console.log(values, employer, updatedEmployer, "values");
      dispatch(updateEmployer(updatedEmployer));
      handleCancel();
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <div className="gap-2 hidden max-sm:flex">
            <Button
              className="cursor-pointer"
              size="sm"
              type="button"
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button className="cursor-pointer" size="sm" type="submit">
              Save
            </Button>
          </div>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 mt-2 flex-shrink-0 place-self-start" />
            <div className="flex-1 flex items-center justify-between">
              <div className="">
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="text-lg font-semibold w-70"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                )}
              </div>

              <div className="flex gap-2 visible max-sm:invisible">
                <Button
                  className="cursor-pointer"
                  size="sm"
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button className="cursor-pointer" size="sm" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="mt-4">
              <label className="text-sm font-medium">Job Title</label>

              <Input
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="text-lg font-semibold w-50"
                placeholder="Enter job title"
              />
              {formik.touched.jobTitle && formik.errors.jobTitle && (
                <div className="text-red-500 text-sm">
                  {formik.errors.jobTitle}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Select
                  value={formik.values.employmentType}
                  onValueChange={(value) =>
                    formik.setFieldValue(
                      "employmentType",
                      value as
                        | "full-time"
                        | "contract"
                        | "freelance"
                        | "internship"
                        | undefined
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 flex gap-2">
                <Input
                  type="date"
                  name="startTime"
                  value={formik.values.startTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-40"
                />

                <Input
                  type="date"
                  name="endTime"
                  value={formik.values.endTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium">Key Contributions</span>
              <Textarea
                name="contributionSummary"
                value={formik.values.contributionSummary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Highlight your key achievements and contributions"
                className="min-h-[100px]"
              />
            </div>
            
          </div>

          <VideoGallery videos={employer.videos} />
        </CardContent>
      </form>
    </Card>
  );
};

export default EditableEmployerCard;
