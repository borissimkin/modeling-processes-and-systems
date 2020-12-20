export const Constants = {
    Q_PROTON: 1.602176620898 * Math.pow(10, -19),
    K: 8.9875517873681764 * Math.pow(10, 9),
    Q_ALPHA: 3.218 * Math.pow(10, -19),
    DT: Math.pow(10, -23),

    M_ALPHA:  3.72737924 * Math.pow(10, -27),
    M_PROTON: 1.67262192369 * Math.pow(10, -27),
    M_ELECTRON: 9.1093837015 * Math.pow(10, -31),
    EI: Math.pow(10, -14), // единицы измерения
    YI: 1.3,
    PI: 3.14159265,

    Q_FERUM: function () {
        return this.Q_PROTON * 2;
    },

    Q_ELECTRON: function () {
        return this.Q_PROTON * -1
    }

}


//3.727379240//: ,енить на 6.643