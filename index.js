const express =require('express');
const bodyParser = require('body-parser');
const app=express();
const port=6003;

// app.get('/:t1',(req,res)=>
// {
    
//     res.send({"message":"Hello World",query:req.query,path:req.params});
    
// });

// app.get('/isprime/:number', (req, res) => {
//     const number = parseInt(req.params.number);

//     if (isNaN(number) || number <= 1) {
//         return res.status(400).json({ error: 'Invalid number. Please provide a positive integer greater than 1.' });
//     }

    
//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return res.json({ number, isPrime: false });
//         }
//     }

//     return res.json({ number, isPrime: true });
// });

app.get('/:number', (req, res) => {
    const number = req.params.number.toString();

    if (!isPositiveInteger(number)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }

    const reversedNumber = number.split('').reverse().join('');

    if (number === reversedNumber) {
        return res.json({ number, isPalindrome: true });
    } else {
        return res.json({ number, isPalindrome: false });
    }
});

function isPositiveInteger(value) {
    // Check if the value is a positive integer
    return /^[1-9]\d*$/.test(value);
}

app.listen(port, ()=>{
    console.log('Server is running on port ${port}');
});