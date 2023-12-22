import createUser from "@/actions/createUser"
import SbChat from "./components/sb-chat"

export default async function Home() {
  const user = await createUser()

  return (
    <main className="h-screen w-screen">
      <SbChat user={user} />
    </main>
  )
}
