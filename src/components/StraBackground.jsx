
import React, { useEffect } from 'react'

const StraBackground = () => {


    // star ={id, size, x, y, opacity, animationDuration} 
    // meteor ={id, size, x, y, delay, animationDuration} 
    const [starts, setStarts] = React.useState([])
    const [meteors, setMeteors] = React.useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for(let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size : Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStarts(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMeteors = [];

        for(let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size : Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    }

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {starts.map((star, key) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}


            {meteors.map((meteor, key) => (
                <div
                    key={meteor.id}
                    className='meteor animate-meteor'
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        delay: meteor.delay,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default StraBackground
