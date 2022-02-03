import { useState } from 'react';

const Search = () => {
        
    const handleChange = (e) => {
        // console.log('handling change', e.target.value)
        setUserInput(e.target.value)
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
                <form>
                <label htmlFor='userInput'>Search: </label>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    onChange={handleChange}
                    // value={userInput}
                />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
}

export default Search;
