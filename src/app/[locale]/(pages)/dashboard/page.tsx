"use client"

import { useAuthStore } from "@/hooks/auth-store"


export default function Dashboard() {
    const { user, token, isAuthenticated } = useAuthStore()
    const userInfo = JSON.parse(user)

    console.log(userInfo)
    
    return (
        <div className="p-10">
            <h2>Dashboard</h2>
            <p>{userInfo.username}</p>

            <h4>Tus direcciones</h4>
            <p></p>
            <p></p>
        </div>
    )
}
