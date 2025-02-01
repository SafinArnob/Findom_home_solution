import { useState, useEffect } from 'react';
import { Users, Check, Building, Home } from 'lucide-react';
import "../styles/StatsCounter.css";

const StatsCounter = () => {
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
            <div className='row'>
                <div className="container mx-auto px-4 row mt-4">
                    <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#f37329' }}>Our Impact</h2>
                    <div className="row">
                        <div className="bg-white col-3 border rounded-pill rounded-lg p-6 text-center shadow-md hover-effect">
                            <div className="flex justify-center mb-4">
                                <Users className="w-12 h-12" style={{ color: '#f37329' }} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                {counts.users.toLocaleString()}+
                            </h3>
                            <p className="text-gray-600">Happy Users</p>
                        </div>

                        <div className="bg-white col-3 border rounded-pill rounded-lg p-6 text-center shadow-md hover-effect">
                            <div className="flex justify-center mb-4">
                                <Check className="w-12 h-12" style={{ color: '#f37329' }} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                {counts.rentals.toLocaleString()}+
                            </h3>
                            <p className="text-gray-600">Successful Rentals</p>
                        </div>

                        <div className="bg-white col-3 border rounded-pill rounded-lg p-6 text-center shadow-md hover-effect">
                            <div className="flex justify-center mb-4">
                                <Building className="w-12 h-12" style={{ color: '#f37329' }} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                {counts.properties.toLocaleString()}+
                            </h3>
                            <p className="text-gray-600">Listed Properties</p>
                        </div>

                        <div className="bg-white col-3 border rounded-pill rounded-lg p-6 text-center shadow-md hover-effect">
                            <div className="flex justify-center mb-4">
                                <Home className="w-12 h-12" style={{ color: '#f37329' }} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                {counts.satisfaction}%
                            </h3>
                            <p className="text-gray-600">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;