export const Constants = {
    k: 1 / (4 * 3.14 * 8.85418781762 * Math.pow(10, -12)),
    electronCharge: -1.6 * Math.pow(10, -19),
    protonCharge: 1.6 * Math.pow(10, -19),
    alphaParticleCharge: 3.218 * Math.pow(10, -19),
    alphaParticleMass: 3.727379240 * Math.pow(10, -27),
    protonParticleMass: 1.67262192369 * Math.pow(10, -27),
    electronParticleMass: 9.1093837015 * Math.pow(10, -31),

    ferumCharge: function () {
        return this.protonCharge * 2;
    },
    // startingDistance: 1 // метр

}