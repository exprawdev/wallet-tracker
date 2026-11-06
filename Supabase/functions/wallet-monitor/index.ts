
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-monitor-secret",
  "Content-Type": "application/json"
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: corsHeaders }
    );
  }

  const monitorSecret = Deno.env.get("MONITOR_SECRET");
  const suppliedSecret = req.headers.get("x-monitor-secret");

  if (!monitorSecret || suppliedSecret !== monitorSecret) {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: corsHeaders }
    );
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceKey) {
    return new Response(
      JSON.stringify({ error: "Server configuration missing" }),
      { status: 500, headers: corsHeaders }
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { data: wallets, error } = await supabase
    .from("tracked_wallets")
    .select("id, name, address, network_id, last_scanned_block")
    .eq("is_active", true)
    .limit(500);

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: corsHeaders }
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      monitoring_status: "wallets_loaded",
      total_wallets: wallets.length,
      wallets: wallets.map((wallet) => ({
        id: wallet.id,
        name: wallet.name,
        address: wallet.address,
        network_id: wallet.network_id,
        last_scanned_block: wallet.last_scanned_block
      })),
      note: "Wallet loaded. Blockchain scanning is not implemented yet."
    }),
    { status: 200, headers: corsHeaders }
  );
});
