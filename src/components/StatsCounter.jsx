import { useState, useEffect } from 'react';
import { Users, Check, Building, Home } from 'lucide-react';
import "../styles/StatsCounter.css";

const StatsCounter = () => {
    const [hovered, setHovered] = useState(null);

    const [counts, setCounts] = useState({
        users: 0,
        rentals: 0,
        properties: 0,
        satisfaction: 0
    });

    const targets = {
        users: 15000,
        rentals: 12500,
        properties: 8000,
        satisfaction: 98
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 50;
        const interval = duration / steps;

        const incrementValues = {
            users: targets.users / steps,
            rentals: targets.rentals / steps,
            properties: targets.properties / steps,
            satisfaction: targets.satisfaction / steps
        };

        let currentStep = 0;

        const timer = setInterval(() => {
            if (currentStep < steps) {
                setCounts({
                    users: Math.min(Math.round(incrementValues.users * (currentStep + 1)), targets.users),
                    rentals: Math.min(Math.round(incrementValues.rentals * (currentStep + 1)), targets.rentals),
                    properties: Math.min(Math.round(incrementValues.properties * (currentStep + 1)), targets.properties),
                    satisfaction: Math.min(Math.round(incrementValues.satisfaction * (currentStep + 1)), targets.satisfaction)
                });
                currentStep++;
            } else {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
            <div className='row w-100 justify-content-center'>
                <div className="container px-4 row mt-4">
                    <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#f37329' }}>Our Impact</h2>
                    <div className="container d-flex flex-nowrap justify-content-center">
                        {[
                            { id: "users", label: "Happy Users", icon: Users },
                            { id: "rentals", label: "Successful Rentals", icon: Check },
                            { id: "properties", label: "Listed Properties", icon: Building },
                            { id: "satisfaction", label: "Satisfaction Rate", icon: Home }
                        ].map(({ id, label, icon: Icon }) => (
                            <div 
                                key={id}
                                className="bg-white col-3 border rounded-pill rounded-lg p-6 text-center shadow-md hover-effect"
                                onMouseEnter={() => setHovered(id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon 
                                        className="w-12 h-12"
                                        style={{ color: hovered === id ? 'white' : '#f37329' }}
                                    />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                    {counts[id].toLocaleString()}{id !== "satisfaction" ? "+" : "%"}
                                </h3>
                                <p className="text-gray-600">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
