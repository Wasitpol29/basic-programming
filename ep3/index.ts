function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
} 

helloName('Ohm') // มี input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input มี output

function st(fname: string, sname: string) {
    
    if (fname === 'mix' && sname === "zane") {
        console.log('เริ่มสอน')
    }else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function sr(oname: string, hname: string, mname: string) {
    if (oname === 'mix' || hname === 'zane' || mname === 'forth') {
        console.log('พร้อมเรียน') 
    }else {
        console.log('ยังไม่พร้อม')
    }
}

sr('mix', 'zane', 'forth')