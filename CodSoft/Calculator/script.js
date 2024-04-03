function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function calculateSquareRoot() {
        try {
            var value = document.getElementById('display').value;
            var result = Math.sqrt(eval(value));
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
}

   function calculatePercentage() {
        try {
            var value = document.getElementById('display').value;
            var result = eval(value) / 100;
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
}
function calculatePower2(){
    try {
        var value = document.getElementById('display').value;
        var result = value*value;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}