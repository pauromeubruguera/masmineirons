import { X } from "lucide-react"
import ReCAPTCHA from 'react-google-recaptcha'
import { useState, useRef } from "react"
import { useAuthStore } from '@/hooks/auth-store'
import axios from 'axios'

interface LoginModalProps {
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { onClose } = props
    const [message, setMessage] = useState<string | null>(null)
    const [showSignin, setShowSignin] = useState(false)
    const { login } = useAuthStore()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null)
    const recaptchaRef = useRef(null)

    const handleCaptchaChange = (value: any) => {
        setCaptchaValue(value)
    }



    const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }

    const register = async (e: any) => {
        e.preventDefault()
        if (!captchaValue) {
            setMessage('Por favor, completa el reCAPTCHA')
            return;
        }
        setMessage(null)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local/register`, {
                'username': email,
                'email': email,
                'password': password
            });
            if (response.data.jwt && response.data.user) {
                login(response.data.jwt, response.data.user)
                setMessage('Login')
                onClose()
            }
          } catch (error: any) {
            console.error(error);
            setMessage(error.response.data.error.message);
          }
    }

    const loginForm = async (e: any) => {
        e.preventDefault()
        setMessage(null)
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'identifier': email,
                'password': password
            })
        };

        const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, reqOptions)
        const res = await req.json()

        console.log(res)

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
                            <p>Ya estas registrado?
                                <button className="underline text-blue-400" onClick={() => {
                                    setEmail('')
                                    setPassword('')
                                    setShowSignin(!showSignin)
                                }}>Entra Aqui</button></p>
                        </div>
                        :
                        <div>
                            <h2>Login</h2>
                            <p>No estas registrado?
                                <button className="underline text-blue-400" onClick={() => {
                                    setEmail('')
                                    setPassword('')
                                    setShowSignin(!showSignin)
                                }}>Registrate aqui</button></p>
                        </div>
                    }
                    <div>
                        {showSignin ?
                            <form onSubmit={register}>
                                <label htmlFor="email" className="block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label htmlFor="password" className="block">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                                    onChange={handleCaptchaChange}
                                />

                                <button type="submit">Submit</button>
                                <div>{message}</div>
                            </form>

                            :
                            <form onSubmit={loginForm}>
                                <label htmlFor="identifier" className="block">Email</label>
                                <input
                                    type="text"
                                    name="identifier"
                                    id="identifier"
                                    className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label htmlFor="password" className="block">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="loginPassword"
                                    className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

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