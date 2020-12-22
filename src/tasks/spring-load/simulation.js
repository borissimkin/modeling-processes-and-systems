const G = 9.8
const DT = 0.01
const PI = 3.14159265


export function calculation(settings) {
    const points = []

    let X = settings.x0;
    let V = 0;

    points.push({x: V, y: X})

    let Ftr = settings.u * settings.m * G * Math.cos(toRadian(settings.alpha));
    let Ft = settings.m * G * Math.sin(toRadian(settings.alpha))


    for (let i = 0; i < 10000; i++) {
        let currentFtr = V < 0 ? Ftr: -Ftr;

        let a = -settings.K * points[i].y + Ft + currentFtr;

        a /= settings.m;

        V += a * DT;
        X += V * DT;

        points.push({
            x: V,
            y: X
        })

    }

    return points;

}

function toRadian(number) {
    return number * PI / 180;
}

