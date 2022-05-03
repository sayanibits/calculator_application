var callogic = require("./callogic");

// route the call to propsal amount and get the data to be sent to caller
exports.inv_cal = (req, res) =>{
    var salary = parseInt(req.params.salary);
    var age = parseInt(req.params.age); 
    output = callogic.inv_cal(salary, age); 
    res.send(output);    
}


// similar routes to be written for other calculators