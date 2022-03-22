alert("Welcome to the game 20. the point of the game is to see who gets closer to twenty without going over it.")
    do{
var computer = 0;

var human = 0;

var humanscore = 0;

var computerscore = 0;

alert("Its the Computers turn...")


    do {

        var rancomp = Math.floor(Math.random() * 11)

        console.log(rancomp)

        computer = rancomp + computer
        alert(`The new number is ${rancomp} \n The Computer total is ${computer}`)

        
    } while (computer < 16)


    if (computer > 20){

        alert("You won! the Computer went over 20")
        humanscore++
    } else {

        alert("Its your turn...")

        do {    

            var ranhum = Math.floor(Math.random() * 11)

            console.log(ranhum)

            human = ranhum + human

            alert(`The new number is ${ranhum} \n Your total is ${human}`)

            var again = prompt("Do you want another number? Type 'y' for yes or 'n' for no")
            
        } while ((human <= 20) && (again != "n"))

    }



    if (again == "n") {
        alert(`You stopped at ${human}`)
        if ((human > computer) && (human < 20) && (computer < 20) ) {
            alert(`You win! You got ${human} and Computer got ${computer}`)
            humanscore++
        }
        else if ((human < computer) && (human < 20) && (computer < 20) ) {
            alert(`Computer won with ${computer} and you ${human}`)
            computerscore++
        }
        else if ((human > 20) && (computer < 20) ) {
            alert("Computer won. You went over 20")
            computerscore++
        }

        else if ((computer > 20) && (human < 20) ) {
            alert("Computer won. You went over 20")
            humanscore++
        }
        else if ((human == computer) && (human < 20) && (computer < 20) ) {
            alert("Tie game, no one wins.")
        }
        
    }

    var playagain = prompt("Do you want to play again? Type 'y' for yes or 'n' for no")

} while ((playagain == "y"))

    alert(`The score is Computer ${computerscore} to Human ${humanscore}`)
        