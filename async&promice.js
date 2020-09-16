const x = new Promise((c, f) => {
    if (5 !== 5) {
        c('dddd')
    } else {
        f('ffff')
    }
})
x.then((c) => {
    console.log(c)
}).catch((f) => {
    console.log(f)
});

//promise
const m = new Promise((resolve, rejected) => {
    if (5 != 5) {
        throw (resolve('ok'))
    } else {
        throw (rejected('not ok'))
    }
})
m.then((z) => {
    console.log(z);
}).catch((z) => {
    console.log(z);

});


function gg() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('one');
        }, 600);
    })
}

function gg2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('two');
        }, 300);
    })
}

function gg3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('three');
        }, 100);
    })
}

async function name() {
    const c = await gg();
    const c2 = await gg2();
    const c3 = await gg3();
    console.log(c);
    console.log(c2);
    console.log(c3);
}
name();

let u = new Promise((x, y) => {
    if (7 == 7) {
        x('5555555555555555555555555555')
    } else {
        y('a777777777777777777777777a');
    }
});
u.then(f => {
    console.log(f)
}).catch(c => {
    console.log(c)
}).finally(() => {
    console.log("ccccccccccccccccccccccccccccccccccccccccc")
});

function alldata() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf");
        }, 200);
    })
}
async function nn() {
    const v = await alldata();
    console.log(v)
}
nn();