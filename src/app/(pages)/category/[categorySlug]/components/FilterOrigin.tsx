import { useGetProductField } from "@/api/getProductField"
import { FilterTypes } from "@/types/filter"

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

export const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props
    const { result, loading }: FilterTypes = useGetProductField()

    function handleChange(e: any) {
        const { value } = e.target;
        setFilterOrigin(value);
    }

    return (
        <div>
            <p>Origen</p>
            {loading && result === null && (
                <p>cargando origen</p>
            )}
            <form onChange={handleChange}>
                <fieldset>
                    <div>
                        <input type="radio" id="all" name="origin" value='' />
                        <label htmlFor="all">all</label>
                    </div>
                    {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                        <div key={origin}>
                            <input type="radio" id={origin} name="origin" value={origin} />
                            <label htmlFor={origin}>{origin}</label>
                        </div>
                    ))}
                </fieldset>
            </form>

        </div>
    )
}