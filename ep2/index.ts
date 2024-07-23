function add(a: number, b: number) {
    return a + b
}

console.log(add(5, 8))

function down(a: number, b: number) {
    return a - b
}

console.log(down(4, 3))

function up(a: number, b: number, c: number, d:number) {
    return a * b * c * d
}

console.log(up(3, 5, 7, 9))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final 
    if (score < 50) {
        return 'สอบตก'
    } else {
        return 'สอบผ่าน'
    }

}
  


console.log(grade(8, 20, 30))


function ohm(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final 
    if (score < 50) {
        return 'grade F'
    } else if (score < 60) {
        return 'grade D'
    }else if (score < 70) {
        return 'grade C'
    }else if (score < 80) {
        return "grade B"
    }else {
        return 'grade A'
    }
}
    
console.log(ohm(20, 30, 30))