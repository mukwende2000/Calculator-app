// HTML Elements
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const minusOperator = document.getElementById('minusOperator');
const inputScreen = document.querySelector('.input-screen');
const outputScreen = document.querySelector('.output-screen');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const btns = document.querySelectorAll('.btns div');
const btnBg = document.querySelector('.btns');
const equalBtn = document.getElementById('equalBtn');
const clearBtn = document.getElementById('clearBtn');
const delBtn = document.getElementById('deleteBtn');
const screens = document.querySelector('.screens');
const header = document.querySelector('.header');

// Button Functionality
nums.forEach((num) => {
    num.addEventListener('click', input)
    function input(e) {
        if(e.target.textContent === '.' && inputScreen.textContent.includes('.')) return
        inputScreen.textContent += e.target.textContent;
        if (inputScreen.textContent.includes('+')) {

            const a = inputScreen.textContent.slice(0, inputScreen.textContent.indexOf('+'))
            const b = inputScreen.textContent.slice(inputScreen.textContent.indexOf('+') + 1)
            outputScreen.textContent = parseInt(a) + parseInt(b)
            
        } else if (inputScreen.textContent.includes('-')) {
                    if(countChar(inputScreen.textContent, '-') === 2) {
                        const a = inputScreen.textContent.slice(0, inputScreen.textContent.lastIndexOf('-'))
                        const b = inputScreen.textContent.slice(inputScreen.textContent.lastIndexOf('-') + 1)
                        outputScreen.textContent = parseInt(a) - parseInt(b)
                    }
                    if(countChar(inputScreen.textContent, '-') === 1 && inputScreen.textContent.charAt(0) != '-') {
                        const a = inputScreen.textContent.slice(0, inputScreen.textContent.indexOf('-'))
                        const b = inputScreen.textContent.slice(inputScreen.textContent.indexOf('-') + 1)
                        outputScreen.textContent = parseInt(a) - parseInt(b)
                    }

        } else if (inputScreen.textContent.includes('X')) {

            const a = inputScreen.textContent.slice(0, inputScreen.textContent.indexOf('X'))
            const b = inputScreen.textContent.slice(inputScreen.textContent.indexOf('X') + 1)
            outputScreen.textContent = parseInt(a) * parseInt(b)
            
        } else if(inputScreen.textContent.includes('/')) {
            
            const a = inputScreen.textContent.slice(0, inputScreen.textContent.indexOf('/'))
            const b = inputScreen.textContent.slice(inputScreen.textContent.indexOf('/') + 1)
            outputScreen.textContent = parseInt(a) / parseInt(b)
            
        }
       }
})

// HELPER FUNCTION
function countChar(string, char) {
    let stringOccurence = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] === char) {
            stringOccurence++
        }
    }
    return stringOccurence
}

operators.forEach((operator) => {
    operator.addEventListener('click', input)
    function input() {
    if (inputScreen.textContent[inputScreen.textContent.length-1] === '+' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '-' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '*' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '/') {

           inputScreen.textContent = inputScreen.textContent

    } else if (inputScreen.textContent === '') {
        return
    } else if(outputScreen.textContent) {
        inputScreen.textContent = outputScreen.textContent
        inputScreen.textContent += operator.textContent
        outputScreen.textContent = ''
    } else {
        inputScreen.textContent += operator.textContent      
    }
}
})

minusOperator.addEventListener('click', inputForMinus)
    
function inputForMinus() {
    if (inputScreen.textContent[inputScreen.textContent.length-1] === '+' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '-' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '*' ||
        inputScreen.textContent[inputScreen.textContent.length-1] === '/') {

           inputScreen.textContent = inputScreen.textContent

        } else {
        inputScreen.textContent += minusOperator.textContent      
    }
}

clearBtn.addEventListener('click', () => {
    inputScreen.textContent = ''
    outputScreen.textContent = ''
})

delBtn.addEventListener('click', () => {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1);
    outputScreen.textContent = ''
})
equalBtn.addEventListener('click', () => {
    if (!inputScreen.textContent || !outputScreen.textContent) return
        inputScreen.textContent = outputScreen.textContent;
        outputScreen.textContent = '';
})

//THEME SWITCHER
theme1.addEventListener ('click', toggleTheme1)
theme2.addEventListener ('click', toggleTheme2)
theme3.addEventListener ('click', toggleTheme3)

function toggleTheme1(e) {
    theme1.style.opacity = '1'
    theme2.style.opacity = '0'
    theme3.style.opacity = '0'

    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    screens.style.backgroundColor = 'hsl(224, 36%, 15%)'
    screens.style.color = 'white'
    btnBg.style.backgroundColor = ' hsl(223, 31%, 20%)'
    btns.forEach(btn => {
        btn.style.backgroundColor = 'hsl(30, 25%, 89%)'
        btn.style.color = ' black'
        btn.style.boxShadow = '0 2px 1px 1px  hsl(28, 16%, 65%)'
    })
    clearBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    clearBtn.style.color = 'white'
    clearBtn.style.boxShadow = '0 2px 1px 1px hsl(185, 58%, 25%)'
    
    delBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    delBtn.style.color = 'white'
    delBtn.style.boxShadow = '0 2px 1px 1px hsl(224, 28%, 35%)'
    
    equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalBtn.style.color = 'hsl(198, 20%, 13%)'
    equalBtn.style.boxShadow = '0 2px 1px 1px hsl(6, 70%, 34%)'

    header.style.color = 'white'

}
function toggleTheme2(e) {
    theme1.style.opacity = '0'
    theme2.style.opacity = '1'
    theme3.style.opacity = '0'

    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    screens.style.backgroundColor = 'hsl(0, 0%, 93%)'
    screens.style.color = '#000'
    btnBg.style.backgroundColor = 'hsl(0, 5%, 81%)'
    btns.forEach(btn => {
        btn.style.backgroundColor = 'hsl(45, 7%, 89%)'
        btn.style.color = '#000'
        btn.style.boxShadow = '0 2px 1px 1px hsl(35, 11%, 61%)'
    })
    clearBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    clearBtn.style.color = '#fff'
    clearBtn.style.boxShadow = '0 2px 1px 1px hsl(185, 58%, 25%)'

    delBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    delBtn.style.color = '#fff'
    delBtn.style.boxShadow = '0 2px 1px 1px hsl(185, 58%, 25%)'

    equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalBtn.style.color = '#fff'
    equalBtn.style.boxShadow = '0 2px 1px 1px hsl(25, 99%, 27%)'

    header.style.color = 'black'
}
function toggleTheme3(e) {
    theme1.style.opacity = '0'
    theme2.style.opacity = '0'
    theme3.style.opacity = '1'

    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
    screens.style.backgroundColor = 'hsl(268, 71%, 12%)'
    screens.style.color = ' hsl(52, 100%, 62%)'
    btnBg.style.backgroundColor = 'hsl(268, 71%, 12%)'
    btns.forEach(btn => {
        btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        btn.style.color = ' hsl(52, 100%, 62%)'
        btn.style.boxShadow = '0 2px 1px 1px hsl(290, 70%, 36%)'
    })
    
    clearBtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
    clearBtn.style.boxShadow = '0 2px 1px 1px hsl(285, 91%, 52%)'

    delBtn.style.backgroundColor = 'hsl(281, 89%, 26%)'
    delBtn.style.boxShadow = '0 2px 1px 1px hsl(285, 91%, 52%)'

    equalBtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
    equalBtn.style.boxShadow = '0 2px 1px 1px hsl(177, 92%, 70%)'
    equalBtn.style.color = 'hsl(198, 20%, 13%)'
    header.style.color = 'hsl(52, 100%, 63%)'
}