import {Constants} from "@/tasks/particle-scattering/consts";

const step = 0.0000000001;

export const calculateShoot = (particleType, startingSpeed, sightingParameter) => {
    console.log({particleType, sightingParameter, startingSpeed});
    const points = [];
    let beginPoint = {x: 0, y: sightingParameter};
    points.push(beginPoint);
    let dt = step;

    let vX = startingSpeed;
    let vY = 0;
    let aX = 0;
    let aY = 0
    let particleCharge = getChargeParticle(particleType);
    let particleMass = getMassParticle(particleType);

    // let E_I = Math.pow(10, -14);
    // let Y_I = 3;

    for (let i = 0; i < 100; i++) { // todo: условие пока частица не улетела далеко кудато
        let currentPoint = points[i];
        let x = currentPoint.x -1;
        let y = currentPoint.y;

        let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 1000000;
        let f = Constants.k * (particleCharge * Constants.ferumCharge() / Math.pow(r, 2))
        let a = f / particleMass;

        aX = a * (Math.abs(x) / r); // cos
        aY = a * (y / r); // sin

        vX += aX * dt;
        vY += aY * dt;

        points.push({
            x: currentPoint.x + vX * dt,
            y: currentPoint.y + vY * dt
        })
    }
    return points;


}

function getChargeParticle(particleType) {
    switch (particleType) {
        case 'proton':
            return Constants.protonCharge;
        case 'electron':
            return Constants.electronCharge;
        case 'alpha':
            return Constants.alphaParticleCharge;
    }

}

function getMassParticle(particleType) {
    switch (particleType) {
        case 'proton':
            return Constants.protonParticleMass;
        case 'electron':
            return Constants.electronParticleMass;
        case 'alpha':
            return Constants.alphaParticleMass;
    }
}