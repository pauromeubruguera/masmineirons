import { create } from 'zustand'
import Cookies from 'js-cookie'

interface AuthState {
    user: any | null
    token: string | null
    isAuthenticated: boolean
    login: (token: string, user: any) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: Cookies.get('jwt') || null, 
    isAuthenticated: !!Cookies.get('jwt'), 
    login: (token, user) => {
        Cookies.set('jwt', token, { expires: 7 }) 
        set({ user, token, isAuthenticated: true }) 
    },
    logout: () => {
        Cookies.remove('jwt')  
        set({ user: null, token: null, isAuthenticated: false }) 
    },
}))
