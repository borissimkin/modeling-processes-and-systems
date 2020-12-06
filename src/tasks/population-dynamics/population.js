export const population = (settings) => {
    /**
     * Больше информации - https://bookaa.ru/matematicheskoe-modelirovanie/modeli-dinamiki-populyaciy-i-yekologiya.html
     * r, m - характерные постоянные рождаемости и смертности;
     * K – “несущая способность” окружающей среды.
     * */
    console.log({settings})
    const pointsVictim = []
    const pointsPredator = []
    const dt = 0.001;
    let dx = settings.startCountVictims;
    let dy = settings.startCountPredators;
    pointsPredator.push({x: 0 ,y: dy})
    pointsVictim.push({x: 0, y: dx})
    for (let i = 0; i < 100000; i++) {
        const currentVictim = pointsVictim[i].y;
        const currentPredator = pointsPredator[i].y;
        dx += (settings.r * settings.k * currentVictim - settings.s * currentVictim * currentPredator) * dt;
        dy += (settings.s * currentVictim * currentPredator - settings.m * currentPredator) * dt;
        pointsPredator.push({x: i ,y: dy});
        pointsVictim.push({x: i, y: dx});
    }
    return {pointsVictim, pointsPredator}

}