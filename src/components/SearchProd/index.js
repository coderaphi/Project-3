import React from 'react';
import Select from 'react-select';
import "./style.css";

function search(props) {
       return (
        <div>

            <form className="search">
                <label htmlFor="breed">Category:</label>
                <Select
                    value={props.categoryName}
                    onChange={v => props.onCategoryChange(v)}
                    className={'select-box'}
                    options={props.categories.map(category => (
                        {
                            label: category.name, 
                            value: category.id
                        }
                    ))}
                />

            </form>

        </div>
    )
}

export default search;
