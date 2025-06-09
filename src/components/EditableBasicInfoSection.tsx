import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BasicInfo } from "@/types";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateBasicInfo } from "@/redux/counterSlice";

interface EditableBasicInfoSectionProps {
  info: BasicInfo;
  handleCancel: () => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  title: string;
  summary?: string;
}

const EditableBasicInfoSection: React.FC<EditableBasicInfoSectionProps> = ({
  info,
  handleCancel,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: info.firstName,
      lastName: info.lastName,
      title: info.title,
      summary: info.summary ?? "",
    },
    validate: (values: FormValues) => {
      const errors: Partial<FormValues> = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.title) errors.title = "Title is required";
      return errors;
    },
    onSubmit: (values: FormValues) => {
      const updatedInfo: BasicInfo = {
        ...info,
        ...values,
      };
      dispatch(updateBasicInfo(updatedInfo));
      handleCancel();
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
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
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Input
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="First Name"
                      className="text-lg font-semibold"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Last Name"
                      className="text-lg font-semibold"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Job Title"
                  className="text-sm"
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-red-500 text-sm">{formik.errors.title}</div>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium">About me</span>
                <Textarea
                  name="summary"
                  value={formik.values.summary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Write a brief summary about yourself"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default EditableBasicInfoSection; 