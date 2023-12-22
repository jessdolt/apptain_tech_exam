import prismadb from "@/lib/prismadb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url, created_by, chatmate } = body

    const channel = await prismadb.channel.create({
      data: {
        url,
        created_by,
        chatmate,
      },
    })

    return new Response(JSON.stringify(channel), {
      status: 201,
    })
  } catch (e: any) {
    console.log(e)
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
    })
  }
}
