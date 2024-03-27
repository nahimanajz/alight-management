import { config } from "@/config";
import { User, UserLogin } from "@/types/custom/user";
import axios from "axios";

export const signup = async (user: User) => {
  const { data } = await axios.post(`${config()}/users`, user);
  return data;
};

export const signin = async (user: UserLogin): Promise<boolean> => {
  const users = await getAll();
  const signedUser = users?.filter(
    (currentUser: User) =>
      user.email === currentUser.email &&
      currentUser.password === user.password,
  );
  console.log(signedUser);
  localStorage.setItem("user", JSON.stringify(signedUser[0]));
  return signedUser ? true : false;
};

export const signOut =()=> {
  localStorage.removeItem("user");
};

export const isSignedIn = ():User => {
  const user= localStorage.getItem("user")
  return user && JSON.parse(user)
 
};

export const getAll = async () => {
  const { data } = await axios.get(`${config()}/users`);
  return data;
};
