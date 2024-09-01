import { ChevronRight, ChevronLeft } from "lucide-react"
import { useSearchParams } from "react-router-dom"

interface PaginationProps {
    page: number
    maxPages: number
}

export function Pagination({ page, maxPages }: PaginationProps) {
    const [_, setSearchParams] = useSearchParams()

    function nextPage() {
        setSearchParams({ page: (page + 1).toString() })
    }

    function previousPage() {
        setSearchParams({ page: (page - 1).toString() })
    }

    return (
        <div className="mb-2 space-y-3">
            <p className="text-center text-sm text-black/60">
                Página {page} de {maxPages}
            </p>
            <div className="flex items-center justify-center gap-2">
                <button
                    onClick={previousPage}
                    className="flex aspect-square w-8 cursor-pointer items-center justify-center rounded border border-accent bg-primary transition hover:bg-black/20 disabled:border-black/20"
                    disabled={page - 1 === 0}
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextPage}
                    className="flex aspect-square w-8 cursor-pointer items-center justify-center rounded border border-accent bg-primary transition hover:bg-black/20 disabled:border-black/20"
                    disabled={page + 1 > maxPages}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}
