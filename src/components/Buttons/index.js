import { useState } from 'react';

const Buttons = ({ clickNext, clickPrevious }) => {
    console.log(clickNext)
    return (
        <div id="buttonDiv">
            <div>
                <button
                    type="submit"
                    onSubmit={clickPrevious}>
                    PREVIOUS
                </button>
            </div>

            <div>
                <button
                    type="submit"
                    onSubmit={clickNext}>
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default Buttons;
