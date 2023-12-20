import { NextResponse } from "next/server"
import prisma from "@/lib/prismadb"
import getCurrentUser from "@/actions/getCurrentUser"
import bcrypt from "bcrypt"

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) return new NextResponse("Unauthorized", { status: 401 })

    const body = await request.json()
    const { currentPassword } = body

    const user = await prisma.client.findUnique({
      where: {
        id: currentUser.id,
      },
    })

    if (!user) return new NextResponse("No user found", { status: 400 })

    if (user.Password === currentPassword) {
      return NextResponse.json({ verified: true }, { status: 200 })
    }

    const isCorrectPassword = await bcrypt.compare(
      currentPassword,
      user.Password as string
    )

    if (!isCorrectPassword)
      return NextResponse.json({ verified: false }, { status: 400 })

    return NextResponse.json({ verified: true }, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json("Internal Error", { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) return new NextResponse("Unauthorized", { status: 401 })
    const body = await request.json()
    const { confirmPassword } = body

    await prisma.client.update({
      where: {
        id: currentUser.id,
      },
      data: {
        Password: await bcrypt.hash(confirmPassword, 12),
      },
    })

    return NextResponse.json("Password Updated", { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json("Internal Error", { status: 500 })
  }
}
