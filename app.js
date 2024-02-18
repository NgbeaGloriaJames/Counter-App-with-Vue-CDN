const app = Vue.createApp({
    
    data() {
        return{
            count:0
        }
    },
    methods: {
        resetButtons() {
          this.count = 0 ;
        },
        inputDigit(){
            // Displays a dialog box with the message "Enter a digit:
            const digit = prompt("Enter a digit:"); 

            if (digit == ''){
                this.count
            }
            //checks if the value stored in the variable digit is a valid number. 
            //If digit is a valid number, isNaN() will return false, and !false will evaluate to true, 
            //meaning the condition is satisfied.
               else if (!isNaN(digit)) {
                    this.count = parseInt(digit);
            }
        }
    } 
})

app.mount('#app')