import React from 'react';
import '../styles.css';
import useFetch from '../hooks/useFetch'; // Import custom hook

const About = () => {
    // Fetch the data inside the component
    const { data, loading, error } = useFetch('/info.json'); // Mock data or actual API

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section id="about">
            <h2>About Us</h2>
            {/* Conditionally render the fetched data */}
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
