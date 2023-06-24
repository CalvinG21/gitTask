//general blank message
const startQ=()=>
{
    console.log("startQ()")
    let noBlankMsg='PLease dont enter blanks, we want to get to know you ;)'

    const userName=prompt("Enter your name")
    userName=="" ? alert(noBlankMsg) : console.log("user name is "+userName)

    const userAge=prompt("Enter your age");
    userAge=="" ? alert(noBlankMsg):(()=>{isNaN(userAge)==true ? console.log("Did not eneter a number"):console.log("user age is "+userAge)})()
    
    const techRelatedCareer=prompt("Do you work in the tech industry? ...enter YES or NO")
    techRelatedCareer=="" ? 
    alert(noBlankMsg): (()=>{ if(techRelatedCareer.toLowerCase()=="yes"){alert("The Tech industry is the place to be right now!")} else {console.log("Great,Im sure that you killing it in your feild of interest.")} })()

    userName!=""&& userAge!="" && techRelatedCareer!="" ? alert("Nice to meet you "+userName+", I hope that you excel in your feild of Interest"): alert("Goodbye mate:)")

}
