import supabaseToken from "./cookie";
import { supabase } from "./supabase.server";

export const getToken = async (request: Request) => {
	const cookieHeader = request.headers.get("Cookie");
	return await supabaseToken.parse(cookieHeader);
};

export const getUserByToken = async (token: { access_token: string; refresh_token: string }) => {
	supabase.auth.setSession(token);
	const { data, error } = await supabase.auth.getUser(token.access_token);
	if (data.user !== null) {
		return { user: data.user, error };
	}
	return { user: data.user, error };
};

export const isAuthenticated = async (request: Request, validateAndReturnUser = false) => {
	const token = await getToken(request);
	if (!token && !validateAndReturnUser) return false;
	if (validateAndReturnUser) {
		const { user, error } = await getUserByToken(token);
		if (error) {
			return false;
		}
		return { user };
	}
	return true;
};

export const getUserData = async (userId: string) => {
	const { data, error } = await supabase.from("profiles").select().eq("id", userId).single();
	return { data, error };
};
