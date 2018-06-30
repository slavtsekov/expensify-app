import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const NotFoundPage = () => (
    <div>
        <Header />
        <div className="content-container not-found-message">
            <h1>404 - Page Not Found</h1>
            <p>
                <Link className="not-found-message__link" to="/">Go home</Link>
            </p>
        </div>
    </div>
);

export { NotFoundPage as default };