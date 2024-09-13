import { X } from "lucide-react"
import { useState } from "react"
import { useAuthStore } from '@/hooks/auth-store'

interface LoginModalProps {
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { onClose } = props
    const [message, setMessage] = useState<string | null>(null)
    const [showSignin, setShowSignin] = useState(false)
    const { login } = useAuthStore()

    const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }

    const register = async (e: any) => {
        e.preventDefault()
        setMessage(null)
        const formData = new FormData(e.target)
        const jsonData = Object.fromEntries(formData)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };

        const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local/register`, reqOptions)
        const res = await req.json()

        if (res.error) {
            setMessage(res.error.message)
            return
        }
        if (res.jwt && res.user) {
            login(res.jwt, res.user)
            setMessage('Login')
            onClose()
        }
    }

    const loginForm = async (e: any) => {
        e.preventDefault()
        setMessage(null)
        const formData = new FormData(e.target)
        const jsonData = Object.fromEntries(formData)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };

        const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, reqOptions)
        const res = await req.json()

        if (res.error) {
            setMessage(res.error.message)
            return
        }
        if (res.jwt && res.user) {
            login(res.jwt, res.user)
            setMessage('Login')
            onClose()
        }
    }

    return (
        <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-0 text-black bg-[#787c6e] rounded-xl px-5 py-5">
                <button onClick={onClose} className="place-self-end"><X size={30} /></button>
                <div className="flex flex-col gap-5 items-center mx-4">
                    {showSignin ?
                        <div>
                            <h2>SignIn</h2>
                            <p>Ya estas registrado? <button  className="underline text-blue-400" onClick={() => { setShowSignin(!showSignin) }}>Entra Aqui</button></p>
                        </div>
                        :
                        <div>
                            <h2>Login</h2>
                            <p>No estas registrado? <button className="underline text-blue-400" onClick={() => { setShowSignin(!showSignin) }}>Registrate aqui</button></p>
                        </div>
                    }
                    <div>
                        {showSignin ?
                            <form onSubmit={register}>
                                <label htmlFor="username" className="block">Username</label>
                                <input type="text" name="username" id="username" className="w-full px-4 py-3 text-black border-gray-300 rounded-md" />

                                <label htmlFor="email" className="block">Email</label>
                                <input type="email" name="email" id="email" className="w-full px-4 py-3 text-black border-gray-300 rounded-md" />

                                <label htmlFor="password" className="block">Password</label>
                                <input type="password" name="password" id="password" className="w-full px-4 py-3 text-black border-gray-300 rounded-md" />

                                <button type="submit">Submit</button>
                                <div>{message}</div>
                            </form>

                            :


                            <form onSubmit={loginForm}>
                                <label htmlFor="identifier" className="block">Username/Email</label>
                                <input type="text" name="identifier" id="identifier" className="w-full px-4 py-3 text-black border-gray-300 rounded-md" />

                                <label htmlFor="password" className="block">Password</label>
                                <input type="password" name="password" id="loginPassword" className="w-full px-4 py-3 text-black border-gray-300 rounded-md" />

                                <button type="submit">Submit</button>
                                <div>{message}</div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}