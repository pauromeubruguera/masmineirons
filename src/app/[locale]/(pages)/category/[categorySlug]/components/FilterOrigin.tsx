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
        <div className="flex items-center">
            <p>Origen: </p>
            {loading && result === null && (
                <p>cargando origen</p>
            )}
            <form onChange={handleChange} className="">
                <select name="" id="">
                    <option value="">Todos</option>
                    {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                        <option key={origin} value={origin}>{origin}</option>
                    ))}
                </select>
            </form>

        </div>
    )
}