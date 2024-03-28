import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "../FormElements/TextArea";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { Candidate, Feedback, FeedbackSchema } from "@/types/custom/candidate";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FC } from "react";
import { IFormProps } from "./Form";
import { update } from "@/app/services/candidate";
import { useRouter } from "next/navigation";

const FeedbackForm: FC<IFormProps> = ({
  message,
  feedback,
  candidate,
  title,
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FeedbackSchema),
    defaultValues: {
      feedback: candidate?.feedback,
      status: candidate?.status,
    } as Feedback,
  });

  const onSubmit: SubmitHandler<Feedback> = ({ feedback, status }) => {
    update({ ...candidate, feedback, status } as Candidate);

    toast.info(message);
    setTimeout(() => {
      router.push("/candidates");
    }, 1000);
  };
  

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
      </div>
      <div className="p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            label={"Feedback (optional)"}
            name={"feedback"}
            register={register}
            errors={errors}
            defaultValue={candidate?.feedback}
          />
          <SelectGroupOne
            options={["pending", "upcoming", "onboaring Task"]}
            label={"Status"}
            register={register}
            name="status"
            value={candidate?.status}
          />
          <div className="mb-5">
            <input
              type="submit"
              value={"Save"}
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
