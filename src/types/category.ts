export type CategoryType = {
    id: number
    attributes: {
        categoryName: string
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
                    width: number
                    height: number
                }
            }[]
        }
    }
}