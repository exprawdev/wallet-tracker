
import { supabase } from "./supabase";

export async function registerUser(
  email: string,
  password: string
) {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  return await supabase.auth.signUp({
    email,
    password
  });
}

export async function loginUser(
  email: string,
  password: string
) {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  return await supabase.auth.signInWithPassword({
    email,
    password
  });
}

export async function logoutUser() {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return data.user;
}
