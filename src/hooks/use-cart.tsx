import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ProductType } from "@/types/products"

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            return (
                <div>a</div>
            )
        }
        set({
            items: [...get().items, data]
        })
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
    },
    removeAll: () => set({ items: [] })
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))