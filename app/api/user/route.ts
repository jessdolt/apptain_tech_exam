import prismadb from "@/lib/prismadb"

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { user_id, profile_url, nickname } = body

    const user = await prismadb.user.update({
      data: {
        profile_url,
        nickname,
      },
      where: {
        user_id,
      },
    })

    return new Response(JSON.stringify(user), {
      status: 201,
    })
  } catch (e: any) {
    console.log(e)
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
    })
  }
}
