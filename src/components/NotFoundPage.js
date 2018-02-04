import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        Page not found - <Link to="/">Go home</Link>.
    </div>
);

export { NotFoundPage as default };