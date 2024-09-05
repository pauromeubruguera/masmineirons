import { FilterOrigin } from "./FilterOrigin"

type FilterCategoryProps = {
    setFilterOrigin:(origin: string) => void
}

export const FiltersCategory = (props: FilterCategoryProps) => {
    const {setFilterOrigin} = props
    return(
        <div>
            <FilterOrigin setFilterOrigin={setFilterOrigin} />
        </div>
    )
}