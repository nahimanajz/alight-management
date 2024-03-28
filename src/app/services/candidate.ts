import { Feedback } from './../../types/custom/candidate';
import { config } from "@/config";
import { Candidate } from "@/types/custom/candidate";
import axios from "axios";

export const create = async (candidate:Candidate) => {

    const { data } = await axios.post(`${config()}/candidates`, candidate);
    return data;
  };

export const getAll = async ():Promise<Candidate[]> => {
    const { data } = await axios.get(`${config()}/candidates`);
    return data;
  };

  export const getById = async (id:string):Promise<Candidate> => {
    const { data } = await axios.get(`${config()}/candidates/${id}`);
    return data;
  };

  export const deleteCandidate = async (candidate:Candidate):Promise<void> => {
    const data  = await axios.delete(`${config()}/candidates/${candidate.id}`);
  };
  
  export const update = async (candidate: Candidate):Promise<void> => {
    const data  = await axios.patch(`${config()}/candidates/${candidate.id}`, candidate);
  };