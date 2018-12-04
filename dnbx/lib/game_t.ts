///////////////游戏工具类/////////////////

class T {
    static w = window.innerWidth;
    static h = window.innerHeight;

    static log(a) {
        console.log.apply(this, arguments);
    }


    static random_sort(a) {
        var sz = a.concat();
        var n_sz = [];

        for (var i = 0; i < a.length; i++) {
            var s = Math.floor(Math.random() * sz.length);
            n_sz.push(sz[s]);
            sz.splice(s, 1);
        }
        return n_sz;

    }

    static tk =[[
        {a: "1+1=", b: "1", c: false},
        {a: "1✖1=", b: "2", c: false},
        {a: "1+1=", b: "2", c: true},
        {a: "1+2=", b: "3", c: true},
        {a: "1-2=", b: "-1", c: true},
        {a: "13-6=", b: "7", c: true},
        {a: "9✖7=", b: "72", c: false},
        {a: "8✖8=", b: "64", c: true},
        {a: "8✖7=", b: "64", c: false},
        {a: "7✖7=", b: "49", c: true},
        {a: "7✖8=", b: "56", c: true},
        {a: "2✖8=", b: "16", c: true},
        {a: "2✖8=", b: "10", c: false},
        {a: "3✖8=", b: "24", c: true},
        {a: "3+8=", b: "11", c: true},
        {a: "4✖8=", b: "12", c: false},
        {a: "3✖7=", b: "21", c: true},
        {a: "4✖8=", b: "28", c: false},
        {a: "4✖6=", b: "10", c: false},
        {a: "6✖4=", b: "10", c: false},
        {a: "4+6=", b: "10", c: true},
        {a: "3✖6=", b: "18", c: true},
        {a: "3+6=", b: "9", c: true},
        {a: "3-8=", b: "5", c: false},
        {a: "6-3=", b: "-3", c: false},
        {a: "3-6=", b: "-3", c: true},
        {a: "5✖6=", b: "30", c: true},
        {a: "7✖6=", b: "13", c: false},
        {a: "6✖7=", b: "42", c: true},
        {a: "6+7=", b: "13", c: true},
        {a: "6-7=", b: "1", c: false},
        {a: "5✖5=", b: "10", c: false},
        {a: "5✖5=", b: "15", c: false},
        {a: "3✖5=", b: "15", c: true},
        {a: "3+5=", b: "15", c: false},
        {a: "3✖5=", b: "15", c: true},
    ]
    ,
        [
            {a: "12+1=", b: "12", c: false},
            {a: "11✖1=", b: "12", c: false},
            {a: "1+11=", b: "12", c: true},
            {a: "1+2=", b: "13", c: false},
            {a: "101-1=", b: "100", c: true},
            {a: "11-111=", b: "-100", c: true},
            {a: "9✖70=", b: "630", c: true},
            {a: "81+9=", b: "70", c: false},
            {a: "8✖11=", b: "19", c: false},
            {a: "71✖7=", b: "78", c: false},
            {a: "7+88=", b: "95", c: true},
            {a: "22✖8=", b: "176", c: true},
            {a: "2✖88=", b: "16", c: false},
            {a: "30✖8=", b: "240", c: true},
            {a: "30+8=", b: "38", c: true},
            {a: "40✖8=", b: "48", c: false},
            {a: "3✖70=", b: "210", c: true},
            {a: "44✖8=", b: "282", c: false},
            {a: "40✖60=", b: "100", c: false},
            {a: "60✖40=", b: "240", c: false},
            {a: "41+6=", b: "46", c: false},
            {a: "13✖6=", b: "78", c: true},
            {a: "30+60=", b: "90", c: true},
            {a: "30-80=", b: "50", c: false},
            {a: "60-30=", b: "-30", c: false},
            {a: "30-60=", b: "-30", c: true},
            {a: "50✖60=", b: "3000", c: true},
            {a: "70✖60=", b: "130", c: false},
            {a: "60✖70=", b: "4200", c: true},
            {a: "60+70=", b: "130", c: true},
            {a: "60-7=", b: "-10", c: false},
            {a: "15✖15=", b: "225", c: true},
            {a: "25✖25=", b: "425", c: false},
            {a: "35✖35=", b: "1225", c: true},
            {a: "45+45=", b: "2025", c: false},
            {a: "55✖55=", b: "3025", c: true}
        ],
        [
            {a: "11✖11=", b: "111", c: false},
            {a: "19✖19=", b: "361", c: true},
            {a: "555+1=", b: "556", c: true},
            {a: "66+66=", b: "136", c: false},
            {a: "555-7=", b: "548", c: true},
            {a: "130-26=", b: "104", c: true},
            {a: "13✖13=", b: "159", c: false},
            {a: "8✖11=", b: "88", c: true},
            {a: "11+80=", b: "880", c: false},
            {a: "70✖70=", b: "490", c: false},
            {a: "7✖81=", b: "577", c: false},
            {a: "200✖8=", b: "1600", c: true},
            {a: "21✖81=", b: "1601", c: false},
            {a: "31✖81=", b: "2511", c: true},
            {a: "300➗8=", b: "37.5", c: true},
            {a: "49✖89=", b: "4371", c: false},
            {a: "37✖77=", b: "2849", c: true},
            {a: "48✖88=", b: "4214", c: false},
            {a: "44✖66=", b: "2914", c: false},
            {a: "65✖42=", b: "2760", c: false},
            {a: "48✖68=", b: "3264", c: true},
            {a: "36✖64=", b: "2304", c: true},
            {a: "33✖66=", b: "2178", c: true},
            {a: "3337-98=", b: "3229", c: false},
            {a: "688✖37=", b: "25546", c: false},
            {a: "3554-665=", b: "2889", c: true},
            {a: "567✖766=", b: "433755", c: true},
            {a: "712✖6=", b: "4262", c: false},
            {a: "66✖718=", b: "43788", c: true},
            {a: "629+117=", b: "746", c: true},
            {a: "618-781=", b: "-100", c: false},
            {a: "515✖5=", b: "2565", c: false},
            {a: "505+519=", b: "1124", c: false},
            {a: "369✖5=", b: "1845", c: true},
            {a: "396+519=", b: "878", c: false},
            {a: "332✖7=", b: "2324", c: true}
        ]

    ]





}

//export{T};