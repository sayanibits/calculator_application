module.exports = {
    // Calculate Investment 
    inv_cal: function (salary, age) {
        var base_amount = 0;
        if ( age < 31) {
            if ( salary < 50000 ) {
                base_amount = salary * 0.10;                
            } 
            else {
                base_amount = salary * 0.20;                
            }
        }
        else if ( age >= 31 && age < 45) {
            if ( salary < 150000 ) {
                base_amount = salary * 0.25;                
            } 
            else {
                base_amount = salary * 0.35;                
            }       
        }
        else if ( age >= 45 && age < 55) {
            if ( salary < 150000 ) {
                base_amount = salary * 0.20;                
            } 
            else {
                base_amount = salary * 0.30;                
            }      
        }
        else {
            if ( salary < 150000 ) {
                base_amount = salary * 0.10;                
            } 
            else {
                base_amount = salary * 0.25;                
            }   
        }

        base_amount = base_amount/10;
        
        base_amount = base_amount * 12;

        var hr_low = 0
            hr_high = 0
            mr_low = 0
            mr_high = 0
            lr_low = 0
            lr_high = 0;

        if ( age < 31) {
            hr_low = base_amount * 0.10;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0.20;
            mr_high = base_amount * 0.50;
            lr_low = base_amount * 0.40;
            lr_high = base_amount * 0.50;
        }
        else if ( age >= 31 && age < 45) {
            hr_low = base_amount * 0.20;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0.20;
            mr_high = base_amount * 0.30;
            lr_low = base_amount * 0.30;
            lr_high = base_amount * 0.40;       
        }
        else if ( age >= 45 && age < 55) {
            hr_low = base_amount * 0.10;
            hr_high = base_amount * 0.30;
            mr_low = base_amount * 0.40;
            mr_high = base_amount * 0.60;
            lr_low = base_amount * 0.40;
            lr_high = base_amount * 0.50;      
        }
        else {
            hr_low = base_amount * 0.10;
            hr_high = base_amount * 0.20;
            mr_low = base_amount * 0.40;
            mr_high = base_amount * 0.60;
            lr_low = base_amount * 0.40;
            lr_high = base_amount * 0.50;
                
        }

        var est_amnt = base_amount * 5;
        var est_inv_val = est_amnt + ( est_amnt * 0.16 );
        var est_bnk_val = est_amnt + ( est_amnt * 0.07 );
        var inv_gain = est_inv_val - est_amnt;
        var bnk_gain = est_bnk_val - est_amnt;

        var hr_range = hr_low + "-" + hr_high
        var mr_range = mr_low + "-" + mr_high
        var lr_range = lr_low + "-" + lr_high

        var output = {
            "Type":"Investment Proposal for 5 Years",
            "Amount": base_amount,
            "HighRisk": hr_range,
            "MidRisk": mr_range,
            "LowRisk": lr_range,
            "Invested_Amount": est_amnt,
            "Estimated_Investment_Returns": est_inv_val,
            "Estimated_Bank_Returns": est_bnk_val,
            "Investment_Gain": inv_gain,
            "Bank_Gain": bnk_gain
        }
        return output;
    },

// Similalry functions need to be built for other calculators
    
    module.exports = {
    // Calculator 
    inv_cal: function (num1, symbol, num2) {
		var base_amount = 0;
        if ( symbol == + ) {
            base_amount = num1 + num2;
        }
        else if (symbol == -) {
            base_amount = num1 - num2;               
            }       
        }
        else if (symbol == *) {
            base_amount = num1 * num2;              
            }      
        }
        else if (symbol == /) {
            base_amount = num1/num2;            
            }   
        }

        var output = {
            "output_value": base_amount
        }
        return output;
};
};
  
  
