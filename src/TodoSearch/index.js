import React from 'react';

function TodoSearch( {searchValue, setSearchValue, loading} ) {

    const onChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="container-fluid listItems">
            <div className="row"><br />
                <div className="col-3"></div>
			    <div className="col-6"><br />
                    <input type="text" placeholder='Search...' className='form-control TodoSearch'
                        value={searchValue} 
                        onChange={onChange} 
                        disabled={loading}
                    />
                        

                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export { TodoSearch };