import React, { useEffect, useState } from 'react'
import Home from '../Pages/Home'

type ContentProps = {
    renderedContent: React.ReactNode; // Specify the type of the renderedContent prop
};

function Content({ renderedContent }: ContentProps) {
    return (
        <div>
            {renderedContent} {/* This will render the passed ReactNode */}
        </div>
    );
}

export default Content