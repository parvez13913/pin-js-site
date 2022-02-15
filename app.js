function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('generate-fild').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const numberInput = event.target.innerText;
    const calk = document.getElementById('typed-numbers');
    if(isNaN(numberInput)){
        if(numberInput == 'C'){
            calk.value = '';
        }
    }
    else{
        const previousCalk = calk.value;
        const newCalk = previousCalk + numberInput;
        calk.value = newCalk;
    }
});
function verifyPin(){
    const generatePin = document.getElementById('generate-fild').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if(generatePin == typedNumbers){
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
    }
    else{
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
    }
}