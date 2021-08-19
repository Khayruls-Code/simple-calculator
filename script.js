function getHistory(){
    return document.getElementById('history-value').innerText;
}

function printHistory(num){
    document.getElementById('history-value').innerText = num;
}

function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num == ''){
        return document.getElementById('output-value').innerText = num;
    }else{
        return document.getElementById('output-value').innerText = getformatedNumber(num);
    }
}

function getformatedNumber(num){
    if(num == '-'){
        return ''
    }
    let n = Number(num);
    return n.toLocaleString("en")
}

function reverseNum(num){
    let output = Number(num.replace(/,/g, ''))
    return output;
}

let operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == 'clear'){
            printOutput('')
            printHistory('')
        }else if(this.id == 'backspace'){
            let output = reverseNum(getOutput()).toString()
            if(output){
                let backValue = output.substr(0, output.length - 1)
                printOutput(backValue)
            }
        }else{
            let output = getOutput();
            let history = getHistory();
            if(output == "" && history != ""){
               if(isNaN(history[history.length - 1])){
                   history = history.substr(0, history.length - 1)
               }
            }
            if(output != '' || history != ''){
                output = output == ""? output:reverseNum(output);
                history = history + output
                if(this.id == '='){
                    let result = eval(history)
                    printOutput(result)
                    printHistory('')
                }else{
                    history = history + this.id;
                    printHistory(history)
                    printOutput('')
                }
            }
        }
    })
}

let number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverseNum(getOutput())
        if(output != NaN){
            output = output + this.id;
            printOutput(output)
        }
    })
}
