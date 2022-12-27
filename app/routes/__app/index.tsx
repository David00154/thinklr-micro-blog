import { LoaderArgs, redirect } from "@remix-run/node"

export const loader = async ({ request }: LoaderArgs) => {
  // try {
  //   const userAuthenticated =
  //   await isAuthenticated(request, true);
  // if (!userAuthenticated) {
  //   return redirect("/login");
  // }
  // if(userAuthenticated)
  // } catch (error) {
  //   return redirect('/login')
  // }
  // return {
  //   name: ""
  // }
  return redirect('/feed', { status: 303 })
}


const Index = () => {
  return (
    <div>Index</div>
  )
}

export default Index