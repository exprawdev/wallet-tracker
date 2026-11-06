
import { supabase } from "./supabase";

export type WalletRecord = {
  id: string;
  name: string;
  address: string;
  network_id: string;
  is_active: boolean;
  created_at: string;
};

export async function getWallets(): Promise<WalletRecord[]> {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError || !userData.user) {
    throw new Error("Silakan login terlebih dahulu.");
  }

  const { data, error } = await supabase
    .from("tracked_wallets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as WalletRecord[];
}

export async function addWallet(
  name: string,
  address: string,
  networkId: string
) {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  const { data: userData, error: userError } =
    await supabase.auth.getUser();

  if (userError || !userData.user) {
    throw new Error("Silakan login terlebih dahulu.");
  }

  const { data, error } = await supabase
    .from("tracked_wallets")
    .insert({
      user_id: userData.user.id,
      name,
      address,
      network_id: networkId
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteWallet(walletId: string) {
  if (!supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  const { error } = await supabase
    .from("tracked_wallets")
    .delete()
    .eq("id", walletId);

  if (error) throw error;
}
