import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch(  ) {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="container-fluid listItems">
            <div className="row"><br />
                <div className="col-3"></div>
			    <div className="col-6"><br />
                    <input type="text" placeholder='Search...' className='form-control'
                        value={searchValue} 
                        onChange={onChange} />

                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export { TodoSearch };