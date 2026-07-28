function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if(age>=18){
      return "Eligible"
    } else return "Not eligible"
  }

 console.log(checkVotingEligibility(19)) 
 console.log(checkVotingEligibility(17)) 
 console.log(checkVotingEligibility(18)) 