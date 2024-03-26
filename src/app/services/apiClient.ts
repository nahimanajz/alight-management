import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const ApiClient = () => {
    const instance = axios.create()
    instance.interceptors.request.use(async (request) => {
			// const session = await getSession();
			// if (session) {
			// 	request.headers.Authorization = `Bearer ${session.user}`;
			// }
			return request;
		});

    instance.interceptors.response.use((response) => response,(error) => {
				if (error?.response?.data?.error?.name === "TokenExpiredError") {
				  signOut({ callbackUrl: "/" });
				} else if ( error?.response?.status === 401) {
				  signOut({ callbackUrl: "/" });
				}
        return Promise.reject(error);
			}
		);
    return instance
}

export default ApiClient()