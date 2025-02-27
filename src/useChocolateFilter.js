import { useState } from "react";

function useChocolateFilter(chocolates) {
    const [filter, setFilter] = useState("");

    const filteredChocolates = chocolates.filter((choco) =>
        choco.name.toLowerCase().includes(filter.toLowerCase())
    );

    return { filter, setFilter, filteredChocolates };
}

export default useChocolateFilter;
