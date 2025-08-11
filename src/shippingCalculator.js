function calculateShippingCost(weight, distance) {
    const ratePerKg = 5;   // USD per kg
    const ratePerKm = 0.1; // USD per km
    return (weight * ratePerKg) + (distance * ratePerKm);
  }
  
  function estimateDeliveryTime(distance) {
    const averageSpeed = 60; // km/h
    const hours = distance / averageSpeed;
  
    // Mejor manejo de tiempo
    if (hours >= 24) {
      const days = Math.ceil(hours / 24);
      return `${days} day${days > 1 ? "s" : ""}`;
    }
    return `${Math.ceil(hours)} hour${Math.ceil(hours) > 1 ? "s" : ""}`;
  }
  
  // Soporte navegador (exponer en window)
  if (typeof window !== "undefined") {
    window.calculateShippingCost = calculateShippingCost;
    window.estimateDeliveryTime = estimateDeliveryTime;
  }
  // Soporte Node
  if (typeof module !== "undefined") {
    module.exports = { calculateShippingCost, estimateDeliveryTime };
  }