import React from 'react';
import '../styles/About.css';
import useFetch from '../hooks/useFetch';

const About = () => {
    const { data, loading, error } = useFetch('/info.json'); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section id="about">
            <h2>About Us</h2>
            {data ? (
                <>
                    <p>{data.description}</p>
                    <p>{data.story}</p>
                </>
            ) : (
                <p>No information available.</p> // Fallback message
            )}
        </section>
    );
};

export default About;
