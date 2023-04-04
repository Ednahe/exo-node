const calculateTTC = (priceHT) => {
    const tax = 1.2; 
    const priceTTC = priceHT * tax;
    return Number(priceTTC.toFixed(2)); 
};

module.exports = { calculateTTC };