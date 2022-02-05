import { useState } from 'react';

const Buttons = ({ clickNext, clickPrevious }) => {

    return (
        <div>
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
