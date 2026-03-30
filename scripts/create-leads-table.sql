CREATE TABLE IF NOT EXISTS leads (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT,
  message       TEXT,
  service       TEXT,
  -- UTM parameters (social + search campaigns)
  utm_source    TEXT,
  utm_medium    TEXT,
  utm_campaign  TEXT,
  utm_content   TEXT,
  utm_term      TEXT,
  -- Ad platform click IDs
  gclid         TEXT,
  msclkid       TEXT,
  fbclid        TEXT,
  -- Context
  page_url      TEXT,
  referrer      TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads (utm_source) WHERE utm_source IS NOT NULL;
