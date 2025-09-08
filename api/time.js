export const config = { runtime: 'edge' };

export default async function handler() {
  return new Response(JSON.stringify({
    source: "PUBLIC_KST",
    iso: new Date().toISOString(),
    tz:  "Asia/Seoul"
  }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store"
    }
  });
}
