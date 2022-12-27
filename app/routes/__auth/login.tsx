import { ActionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react"
import { supabase } from "utils/supabase.server"

export const action = async ({ request }: ActionArgs) => {
    try {
        if (request.method !== "POST") {
            return json({ msg: "No post allowed" })
        }
        let form = await request.clone().formData()
        let email = form.get("email")?.toString()!
        let password = form.get("password")?.toString()!
        // console.log(email, password)
        let { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error !== null) {
            console.log("loop")
            return json({ msg: error.message })
        }
        return redirect('/')
    } catch (error) {
        // throw new Error(error as any).message
        // console.log(new Error(error as any).message)
        throw error
        // return redirect('/login')
    }
}

export default function Login() {
    let error = useActionData()
    return (
        <>
            {error && (
                <h1>error.msg</h1>
            )}
            <Form method="post">
                <input type="email" placeholder="email" name="email" />
                <input type="text" placeholder="password" name="password" />
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}