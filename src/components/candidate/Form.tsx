"use client";
import TextArea from "@/components/FormElements/TextArea";
import TextInput from "@/components/FormElements/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Candidate, CandidateSchema } from "@/types/custom/candidate";
import { create, update } from "@/app/services/candidate";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from"next/navigation"

export default function Form({
  isEditing = false,
  candidate,
  title,
  message,
}: {
  isEditing?: boolean;
  candidate?: Candidate;
  title: string;
  message: string;
}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CandidateSchema),
    defaultValues: candidate,
  });
  const onSubmit: SubmitHandler<Candidate> = (data) => {
    if (isEditing) {
      update({ ...data, id: candidate?.id });
    } else {
      create(data);
    }
    toast.info(message);
    setTimeout(() => {
      router.push("/candidates")
    }, 1000);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
      </div>
      <div className="p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label={"Full Names"}
            name={"name"}
            register={register}
            errors={errors}
            defaultValue={candidate?.name}
          />
          <TextInput
            label={"Email"}
            name={"email"}
            register={register}
            errors={errors}
            defaultValue={candidate?.email}
          />
          <TextInput
            label={"Phone"}
            name={"phone"}
            register={register}
            errors={errors}
            defaultValue={candidate?.phone}
          />
          <TextInput
            label={"Address"}
            name={"address"}
            register={register}
            errors={errors}
            defaultValue={candidate?.address}
          />
          <TextInput
            label={"City"}
            name={"city"}
            register={register}
            errors={errors}
            defaultValue={candidate?.city}
          />
          <TextInput
            label={"Qualification"}
            name={"qualification"}
            register={register}
            errors={errors}
            defaultValue={candidate?.qualification}
          />
          <TextInput
            label={"Job Preferences"}
            name={"job_preferences"}
            register={register}
            errors={errors}
            defaultValue={candidate?.job_preferences}
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
