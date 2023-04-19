
import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"


export async function getServerSideProps (context: NextPageContext) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination: '/Auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  const { data: user} = useCurrentUser()
  console.log(user)


  return (
    <>
    <p className="text-wite text-4xl text-white">loggedin as:{user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => {signOut()}}>Logut</button>
    </>
    
  )
}
