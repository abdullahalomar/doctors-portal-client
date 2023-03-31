import React from 'react';

const StartedBtn = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default StartedBtn;