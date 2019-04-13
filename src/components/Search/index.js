import React from 'react'
import "./style.css"

function search(props) {
    return (
        <div>

            
            <form className="example" action="/action_page.php">
                <input type="text"
                 placeholder="Search.." 
                 name="search"
                 list="category"
                 
                 
                />
                
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

        </div>
    )
}

export default search;
