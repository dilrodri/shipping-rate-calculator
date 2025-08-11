function calculateShippingCost(weight, distance) {
    const ratePerKg = 5; // USD per kg
    const ratePerKm = 0.1; // USD per km
    return (weight * ratePerKg) + (distance * ratePerKm);
}

function estimateDeliveryTime(distance) {
    const averageSpeed = 60; // km/h
    const hours = distance / averageSpeed;
    return `${Math.ceil(hours)} hours`;
}

module.exports = { calculateShippingCost, estimateDeliveryTime };