toggleDark = () => {
    document.getElementById("doc").classList.toggle("dark")
    document.getElementById("sub").classList.toggle("btn-info")
}

secure = expression => {
    const check = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "*", "/", "-", "^", "x", "(", ")", " "]

    for (const iterator of expression) {
        if (check.includes(iterator) == false) {
            return false
        }
    }

    if (expression.length == 0) { return false }

    return true
}

solve = (lhs, rhs) => {
    if (secure(lhs) & secure(rhs)) {
        try {
            let counter = 0

            while (true) {
                let lhs2 = ""
                let rhs2 = ""

                for (letter of lhs) {
                    if (letter == "x") {
                        lhs2 += counter.toString()
                    } else if (letter == "^") {
                        lhs2 += "**"
                    } else { lhs2 += letter }
                }

                for (letter of rhs) {
                    if (letter == "x") {
                        rhs2 += counter.toString()
                    } else if (letter == "^") {
                        rhs2 += "**"
                    } else { rhs2 += letter }
                }

                if (eval(lhs2) == eval(rhs2)) { return counter }

                counter++
            }
        }
        catch { return "error" }
    }

    return "error"
}

submit = () => {
    lhs = getInput('lhs')
    rhs = getInput('rhs')
    document.getElementById('solution').innerHTML = solve(lhs, rhs)

    document.getElementById('lhs').value = ""
    document.getElementById('rhs').value = ""
}