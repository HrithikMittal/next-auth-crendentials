export async function GET(req, res) {
  return new Response(JSON.stringify({ hello: "world" }));
}
