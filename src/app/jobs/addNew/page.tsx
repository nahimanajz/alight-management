"use client";

import { signup } from "@/app/services/auth";
import { create } from "@/app/services/jobs";
import TextArea from "@/components/FormElements/TextArea";
import TextInput from "@/components/FormElements/TextInput";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Job, JobSchema } from "@/types/custom/job";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(JobSchema),
  });

  const onSubmit: SubmitHandler<Job> = (data) => {
    create(data);
    toast.info("Job is added successfully");
  };

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Job info</h3>
        </div>
        <div className="p-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label={"Role"}
              name={"role"}
              register={register}
              errors={errors}
            />
            <TextArea
              label={"Description"}
              name={"description"}
              register={register}
              errors={errors}
            />

            <TextArea
              label={"Requirements"}
              name={"requirements"}
              register={register}
              errors={errors}
            />

            <TextArea
              label={"Responsibilities"}
              name={"responsibilities"}
              register={register}
              errors={errors}
            />
            <div className="mb-5">
              <input
                type="submit"
                value="Save"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Page;
