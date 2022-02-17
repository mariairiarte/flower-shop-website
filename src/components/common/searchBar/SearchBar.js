import React from "react";
import "./SearchBar.css"

const SearchBar = ({ setSearchTerm }) => {
    return(
        <div className="search">
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default SearchBar