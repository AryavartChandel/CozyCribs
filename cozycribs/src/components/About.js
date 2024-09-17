import React from 'react';
import '../styles.css';
import useFetch from '../hooks/useFetch'; // Import custom hook

const About = () => {
    const { data, loading, error } = useFetch('/info.json'); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section id="about">
            <h2>About Us</h2>
            {}
            {data && (
                <>
                    <p>{data.description}</p>
                    <p>{data.story}</p>
                </>
            )}
        </section>
    );
};

export default About;
