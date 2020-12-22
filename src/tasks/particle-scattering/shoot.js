import {Constants} from "@/tasks/particle-scattering/consts";


export const calculateShoot = (particleType, startingSpeed, sightingParameter) => {
    const points = [];
    let beginPoint = {x: 0, y: sightingParameter * Constants.EI};
    points.push(beginPoint);

    let vX = startingSpeed;
    let vY = 0;
    let aX = 0;
    let aY = 0
    let Q = getChargeParticle(particleType);
    let M = getMassParticle(particleType);

    let i = 0;
    while (points[i].x >= 0 && points[i].x < Constants.EI * 4 && points[i].y > -Constants.EI * Constants.YI && points[i].y < Constants.EI * Constants.YI) {
        let currentPoint = points[i];
        let x = currentPoint.x;
        let y = currentPoint.y;

        let r = Math.sqrt(Math.pow(x - (3 * Constants.EI), 2) + Math.pow(y, 2));
        let a = (Constants.K * Q * Constants.Q_FERUM() / Math.pow(r, 2)) / M;

        aX = a * (Math.abs(x - (3 * Constants.EI)) / r); // cos
        aY = a * (y / r); // sin

        vX -= aX * Constants.DT;
        vY += aY * Constants.DT;

        points.push({
            x: currentPoint.x + vX * Constants.DT,
            y: currentPoint.y + vY * Constants.DT
        })
        i++;
    }
    return points;


}


function getChargeParticle(particleType) {
    switch (particleType) {
        case 'proton':
            return Constants.Q_PROTON;
        case 'electron':
            return Constants.Q_ELECTRON();
        case 'alpha':
            return Constants.Q_ALPHA;
    }

}

function getMassParticle(particleType) {
    switch (particleType) {
        case 'proton':
            return Constants.M_PROTON;
        case 'electron':
            return Constants.M_ELECTRON;
        case 'alpha':
            return Constants.M_ALPHA;
    }
}