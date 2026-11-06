
-- TX Wallet Tracker database schema

create table if not exists public.tracked_wallets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  address text not null,
  network_id text not null,
  is_active boolean not null default true,
  last_scanned_block bigint,
  created_at timestamptz not null default now()
);

create table if not exists public.wallet_events (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid not null references public.tracked_wallets(id) on delete cascade,
  network_id text not null,
  tx_hash text not null,
  event_index integer not null default 0,
  event_type text not null default 'unknown',
  token_symbol text,
  token_address text,
  amount numeric,
  value_usd numeric,
  from_address text,
  to_address text,
  occurred_at timestamptz,
  raw_data jsonb,
  created_at timestamptz not null default now(),
  unique (wallet_id, tx_hash, event_index)
);

create index if not exists idx_wallets_user
on public.tracked_wallets(user_id);

create index if not exists idx_wallet_events_wallet_time
on public.wallet_events(wallet_id, occurred_at desc);

create index if not exists idx_wallet_events_network
on public.wallet_events(network_id, tx_hash);

alter table public.tracked_wallets enable row level security;
alter table public.wallet_events enable row level security;

create policy "Users can view their wallets"
on public.tracked_wallets for select
using (auth.uid() = user_id);

create policy "Users can add their wallets"
on public.tracked_wallets for insert
with check (auth.uid() = user_id);

create policy "Users can update their wallets"
on public.tracked_wallets for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their wallets"
on public.tracked_wallets for delete
using (auth.uid() = user_id);

create policy "Users can view events from their wallets"
on public.wallet_events for select
using (
  exists (
    select 1
    from public.tracked_wallets w
    where w.id = wallet_events.wallet_id
      and w.user_id = auth.uid()
  )
);
