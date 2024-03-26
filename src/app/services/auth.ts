import { config } from "@/config";
import { User } from "@/types/custom/user";
import axios from "axios";

export const signup = async (user: User) => {
  const { data } = await axios.post(`${config()}/users`, user);
  return data;
};
export const signin =  async (user: User):Promise<User> => {
   const users =  await getAll();
   return users?.filter((currentUser:User) => user.email === currentUser.email && currentUser.password === user.password)

};

export const getAll = async () => {
  const { data } = await axios.get(`${config()}/users`);
  return data;
};
