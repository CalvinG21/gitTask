let noBlankMsg='PLease dont enter blanks, we want to get to know you ;)'


const userName=prompt("Enter your name")
userName=="" ? console.log(noBlankMsg) : console.log("user name is "+userName)

const userAge=promt("Enter your age");
techRelatedCareer=="" ? console.log(noBlankMsg): isNaN(userAge)==true? console.log("Did not eneter a number"):console.log("user age is "+userAge)

const techRelatedCareer=prompt("Do you work in the tech industry?")
techRelatedCareer=="" ? console.log(noBlankMsg): (()=>{ if(techRelatedCareer){console.log("The Tech industry is the place to be right now!")} else if(techRelatedCareer==false){console.log("Great,Im sure that you killing it in your feild of interest.")} })()


