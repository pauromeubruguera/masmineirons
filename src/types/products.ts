export type ProductType = {
    id: number
    attributes: {
        productName: string
        slug: string
        description: string
        shortDescription: string
        active: boolean
        isFeatured: boolean
        origin: string
        price: number
        minairo: string
        stock: number
        quantity: number
        images: {
            data: {
                id: number
                attributes: {
                    url: string
                    width: number
                    height: number
                }
            }[]
        }
    }
}