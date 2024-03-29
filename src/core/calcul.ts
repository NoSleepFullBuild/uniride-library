export class CalculTrip {

    private pricePerKm: number;

    constructor() {
        this.pricePerKm = 0.5;
    }

    public setPricePerKm(newPrice: number): void {
        this.pricePerKm = newPrice;
    }

    public calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // Rayon de la Terre en mètres

    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance en mètres
    const d = R * c;

        return d;
    }

    public calculatePriceForMeters(distance: number) {
        const distanceInKm = distance / 1000; // Convertir la distance en kilomètres
        return distanceInKm * this.pricePerKm; // Calculer le prix basé sur la distance en km
    }

    public calculateEstimatedTime(distance: number, averageSpeedKmH: number) {
        const timeInHours = distance / averageSpeedKmH;
        return timeInHours / 1000;
    }
    
}