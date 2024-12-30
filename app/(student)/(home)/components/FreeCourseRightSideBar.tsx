'use client';

import React, { useState } from "react";

const FreeCourseRightSideBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className={`sidebar ${active ? "active" : ""}`}>
            <button onClick={() => setActive(!active)}>
                Toggle Active
            </button>
            {/* Add sidebar content here */}
        </div>
    );
};

export default FreeCourseRightSideBar;
