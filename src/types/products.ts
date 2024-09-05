export type ProductType = {
    id: number
    attributes: {
        productName: string
        slug: string
        description: string
        active: boolean
        isFeatured: boolean
        origin: string
        price: number
        minairo: string
        images: {
            data: {
                id: number
                attributes: {
                    url: string
                }
            }[]
        }
    }
}