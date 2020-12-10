export const population = (settings) => {
    /**
     * Больше информации - https://bookaa.ru/matematicheskoe-modelirovanie/modeli-dinamiki-populyaciy-i-yekologiya.html
     * r, m - характерные постоянные рождаемости и смертности;
     * K – “несущая способность” окружающей среды.
     * */
    console.log({settings})
    const pointsVictim = []
    const pointsPredator = []
    const dt = 0.9;
    pointsPredator.push({x: 0 ,y: settings.startCountPredators})
    pointsVictim.push({x: 0, y: settings.startCountVictims})
    for (let i = 0; i < 5000; i++) {
        const currentVictim = pointsVictim[i].y;
        const currentPredator = pointsPredator[i].y;
        console.log(currentPredator);
        let dx = (settings.r * settings.k * currentVictim - settings.s * currentVictim * currentPredator) * dt;
        let dy = (settings.s * currentVictim * currentPredator - settings.m * currentPredator) * dt;
        let newVictims = currentVictim + dx;
        let newPredators = currentPredator + dy;
        if (isAlmostZero(newVictims))
            newVictims = 0;
        if (isAlmostZero(newPredators))
            newPredators = 0
        console.log({newVictims, newPredators})
        pointsPredator.push({x: i+1 ,y:newPredators});
        pointsVictim.push({x: i+1, y: newVictims});
    }
    return {pointsVictim, pointsPredator}

}

function isAlmostZero(number) {
    const eps = 0.01
    return number < eps
}