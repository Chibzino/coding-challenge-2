const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark/(heightMark * heightMark);

const BMIjohn = massJohn/(heightJohn * heightJohn);

const markHigherBMI = BMImark > BMIjohn;


console.log(BMImark, BMIjohn, markHigherBMI);


if(BMImark > BMIjohn) {
    console.log("Mark's BMI is higer than John's");
}

else {
    console.log("John's BMI is higher than Mark's")
}

console.log(`Mark's BMI(${BMImark}) is higher than John's BMI(${BMIjohn})`)


