export const dynamic = "force-dynamic"

export const GET = async () => {
  const haveIBeenPwnedData = await fetch(
    `${process.env.HOST_URL}/api/breaches?limit=10`, {
    next: {
      tags: ["breaches"],
      revalidate: 60 * 60 * 24 // 24 hours
    }
  })

  return new Response(
    JSON.stringify(await haveIBeenPwnedData.json()), {
    headers: { "Content-Type": "application/json" },
    status: haveIBeenPwnedData.status,
  })
}
