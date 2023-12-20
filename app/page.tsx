import createUser from "@/actions/createUser"
import Chat from "./components/chat"

export default async function Home() {
  // const user = await createUser()

  return (
    <main className="">
      <div className="h-screen w-screen ">
        <Chat user={null} />
      </div>
    </main>
  )
}
