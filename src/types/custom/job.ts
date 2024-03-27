import * as yup from "yup"

export const JobSchema = yup.object({
  role: yup.string().required(),
  description: yup.string().required(),
  requirements: yup.string().required(),
  responsibilities:yup.string().required()
});

export type Job = yup.InferType<typeof JobSchema> & {
  id?:string
};

