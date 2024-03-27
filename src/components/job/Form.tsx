"use client";
import TextArea from "@/components/FormElements/TextArea";
import TextInput from "@/components/FormElements/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Job, JobSchema } from "@/types/custom/job";
import { create, update } from "@/app/services/jobs";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Form({
  isEditing = false,
  job,
  title,
  message,
}: {
  isEditing?: boolean;
  job?: Job;
  title: string;
  message: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(JobSchema),
    defaultValues: job,
  });
  const onSubmit: SubmitHandler<Job> = (data) => {
    if (isEditing) {
      update({...data, id:job?.id});
    } else {
      create(data);
    }
    toast.info(message);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
      </div>
      <div className="p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label={"Role"}
            name={"role"}
            register={register}
            errors={errors}
            defaultValue={job?.role}
          />
          <TextArea
            label={"Description"}
            name={"description"}
            register={register}
            errors={errors}
            defaultValue={job?.description}
          />

          <TextArea
            label={"Requirements"}
            name={"requirements"}
            register={register}
            errors={errors}
            defaultValue={job?.requirements}
          />

          <TextArea
            label={"Responsibilities"}
            name={"responsibilities"}
            register={register}
            errors={errors}
            defaultValue={job?.responsibilities}
          />
          <div className="mb-5">
            <input
              type="submit"
              value={isEditing ? "Update" : "Save"}
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
