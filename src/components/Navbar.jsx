import React from 'react';

const Navbar = () => {
    return (
        <div>
            <button type="button" className="btn btn-danger me-2 mt-1">Home</button>
            <button type="button" className="btn btn-danger me-2 mt-1">Login</button>
            <button type="button" className="btn btn-danger me-2 mt-1">Admin</button>
            <button type="button" className="btn btn-danger me-2 mt-1">Logged</button>
            <button type="button" className="btn btn-danger me-2 mt-1">Account</button>
        </div>
    );
};

export default Navbar;