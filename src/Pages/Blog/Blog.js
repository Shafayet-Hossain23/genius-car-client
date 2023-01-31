import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/UserContext';

const Blog = () => {
    const { data } = useContext(AuthContext)
    return (
        <div>
            {data}
        </div>
    );
};

export default Blog;