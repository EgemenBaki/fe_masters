// TODO: write the validation functions

function isValidName(name) {
    if (typeof name !== 'string') return false;
    if (name.trim().length <= 3 ) return false;
    return true;
}

function hoursAttended(num1, num2) {
    //* Check for types - string or number only
    if ((typeof num1 !== 'string' && typeof num1 !== 'number') || (typeof num2 !== 'string' && typeof num2 !== 'number')) return false;
    //* Check for if is string, must not be empty string
    if((typeof num1 === 'string' && num1.trim().length === 0 )|| (typeof num2 === 'string' && num2.trim().length === 0)) return false;
    //* Must be a valid number after numberification
    if (isNaN(Number(num1)) || isNaN(Number(num2))) return false;
    //* Check for whole numbers (no floats / only integers)
    if (num1 % 1 !== 0 || num2 % 1 !== 0) return false;
    //* Checking for lte case
    if(Number(num1) >= Number(num2)) return false;
    return true;
}



// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
