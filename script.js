let inputFiled = document.querySelector('.input-control')
let value1,value2,inputValues,singleValue,values,index,total
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const clean = document.querySelector('.clean')
const zero = document.querySelector('.zero')
const plus = document.querySelector('.plus')
const mines = document.querySelector('.mines')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const dot = document.querySelector('.dot')
const percent = document.querySelector('.percent')
const equal = document.querySelector('.equal')

inputFiled.value=0;
document.addEventListener(('click'),(e)=>{
    if(inputFiled.value[0]==0){
        inputFiled.value=''
    }
    if(e.target===zero){
        inputFiled.value +=0
    }
    if(e.target===one){
        inputFiled.value +=1    
    }
    if(e.target===two){
        inputFiled.value+=2
    }
    if(e.target===three){
        inputFiled.value+=3
    }
    if(e.target===four){
        inputFiled.value+=4
    }
    if(e.target===five){
        inputFiled.value+=5
    }
    if(e.target===six){
        inputFiled.value+=6
    }
    if(e.target===seven){
        inputFiled.value+=7
    }
    if(e.target===eight){
        inputFiled.value+=8
    }
    if(e.target===nine){
        inputFiled.value+=9
    }
    if(e.target===clean){
        inputFiled.value=0
    }
    if(e.target===plus){
        inputFiled.value+='+'
    }
    if(e.target===mines){
        inputFiled.value+='-'
    }
    if(e.target===multiply){
        inputFiled.value+='*'
    }
    if(e.target===divide){
        inputFiled.value+='/'
    }
    if(e.target===dot){
        inputFiled.value+='.'
    }
    if(e.target===percent){
        singleValue =parseFloat(inputFiled.value)
        singleValue  = singleValue/100
        inputFiled.value = singleValue
       
        

    }
    if(e.target===equal){
        inputValues = inputFiled.value
        for(let i=0; i<inputValues.length; i++){
            if(inputValues[i]=='+' || inputValues[i]=='-'|| inputValues[i]=='*'||inputValues[i]=='/')
            {
                index = i;
                break;
            }
        }
        if(index!=undefined){
            calculate(inputValues,index)
        }
                 
    }


})

function calculate(values , index){
    value1=values.slice(0,index).trim()
    value2=inputValues.slice(index+1,inputValues.length).trim()    
    value1 =parseFloat(value1)
    value2 =parseFloat(value2)
    for(let j=0; j<values.length; j++){
        if(j===index){
            if(values[j]=='+'){
                add(value1,value2) 
            }
            if(values[j]=='-'){
                sub(value1,value2)
            }
            if(values[j]=='*'){
                multi(value1,value2)
            }
            if(values[j]=='/'){
                div(value1,value2)
            }
            
        }
    }

}

function add(value1,value2){
    total = value1+value2;
    inputFiled.value=total
}
function sub(value1,value2){
    total = value1-value2
    inputFiled.value=total
}
function multi(value1,value2){
    total = value1*value2
    inputFiled.value=total
}
function div(value1,value2){
    total = value1/value2
    inputFiled.value=total
}
