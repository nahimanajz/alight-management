import { config } from "@/config";
import { User, UserLogin } from "@/types/custom/user";
import axios from "axios";

export const signup = async (user: User) => {
  const { data } = await axios.post(`${config()}/users`, user);
  return data;
};
export const signin =  async (user: UserLogin):Promise<boolean> => {
   const users =  await getAll();
   return users?.some((currentUser:User) => user.email === currentUser.email && currentUser.password === user.password)

};

export const getAll = async () => {
  const { data } = await axios.get(`${config()}/users`);
  return data;
};
