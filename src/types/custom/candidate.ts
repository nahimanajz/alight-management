import * as yup from "yup"
export const CandidateSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  address: yup.string().required(),
  city:yup.string().optional(),
  qualification: yup.string().required(),
  job_preferences: yup.string().required(),
});

export type Candidate = yup.InferType<typeof CandidateSchema> & {
  id?:string
};

