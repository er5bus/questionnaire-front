 
  
export default function CalculHealth (data ) {

    console.log("data",data.scores)
 
    const delai = data.healthAnsweredQuestion[0].name ;
    const zone = data.selectedPartBodyID[0] ;
    let scores = data.scores ;
    switch (delai) {
        case "Moins de 3 semaines":
         
          if (zone == "HEADACHE") {
            scores.forEach(function(score) {
                if(score.name == "Ostéopathie") {
                    if (score.value > 11 ) {
                        score.value = 11 
                     }
                     
                    if (  score.value >= 7 ) {
                        score.value = 4 
                     }else if ( 6 >= score.value && score.value >= 5 ) {
                        score.value = 3 
                     }else if (  score.value <= 5 ) {
                        score.value = 0 
                     }
                  

                }else if (score.name == "Médecine") {
                    if (  score.value >= 4 ) {
                        score.value = 4 
                   } else {
                      score.value = 0
                   }
                }else if (score.name == "Ergonome") {
                    if ( score.value > 15 ) {
                        score.value = 15 
                    }else if (  score.value >= 12 ) {
                        score.value = 4 
                     } else if ( 7 <= score.value && score.value < 12 ) {
                        score.value = 2
                     } else if ( 7 > score.value   ) {
                        score.value = 0
                     }
                }else if (score.name == "Kinésithérapie") {
                    if ( score.value > 4 ) {
                        score.value = 4 
                    }else if (  score.value >= 3 ) {
                        score.value = 2
                     } else if (   score.value  == 2  ) {
                        score.value = 1
                     }else {
                         score.value = 0
                     }
                }
               
            })
             
           
             
     

             
          }
          break;
      
        case "Entre 3 semaines et 3 mois":
         
          if (zone == "HEADACHE") {
            scores.forEach(function(score) {
                if(score.name == "Ostéopathie") {
                    if (score.value > 11 ) {
                        score.value = 11 
                     }
                     
                    if (  score.value >= 7 ) {
                        score.value = 4 
                     }
                      if ( 6 >= score.value && score.value >= 5 ) {
                        score.value = 3 
                     }
                      if (  score.value < 5 ) {
                        score.value = 0 
                     }
                  

                }else if (score.name == "Médecine") {
                    if (  score.value >= 4 &&  score.value >= 2) {
                        score.value = 4 
                   }  else {
                      score.value = 0
                    }
                }else if (score.name == "Ergonome") {
                    if ( score.value > 15 ) {
                        score.value = 15 
                    }
                     if (  score.value >= 12 ) {
                        score.value = 4 
                     } 
                      if ( 7 <= score.value && score.value < 12 ) {
                        score.value = 2
                     }
                      if ( 4 <= score.value && score.value < 7 ) {
                      score.value = 1
                   } 
                    if ( 4 > score.value   ) {
                        score.value = 0
                     }
                }else if (score.name == "Kinésithérapie") {
                    if ( score.value > 4 ) {
                        score.value = 4 
                    }else if (  score.value >= 4 ) {
                        score.value = 2
                     } else if (   score.value  == 2  ) {
                        score.value = 1
                     }else {
                         score.value = 0
                     }
                }
               
            })
             
           
             
            

            console.log("scores",scores);
 
          }
          break;
           
      
        case "Entre 3 mois et un an":
         
          if (zone == "HEADACHE") {
            scores.forEach(function(score) {
                if(score.name == "Ostéopathie") {
                    if (score.value > 11 ) {
                        score.value = 11 
                     }
                     
                    if (  score.value >= 7 ) {
                        score.value = 4 
                     }else if ( 6 >= score.value && score.value >= 5 ) {
                        score.value = 3 
                     }else if (  score.value < 5 ) {
                        score.value = 0 
                     }
                  

                }else if (score.name == "Médecine") {
                    if (  score.value >= 4 &&  score.value >= 2) {
                        score.value = 4 
                   }  else {
                      score.value = 0
                    }
                }else if (score.name == "Ergonome") {
                    if ( score.value > 15 ) {
                        score.value = 15 
                    }else if (  score.value >= 12 ) {
                        score.value = 4 
                     } else if ( 7 <= score.value && score.value < 12 ) {
                        score.value = 2
                     }else if ( 4 <= score.value && score.value < 7 ) {
                      score.value = 1
                   } else if ( 4 > score.value   ) {
                        score.value = 0
                     }
                }else if (score.name == "Kinésithérapie") {
                    if ( score.value > 4 ) {
                        score.value = 4 
                    }else if (  score.value >= 4 ) {
                        score.value = 2
                     } else if (   score.value  == 2  ) {
                        score.value = 1
                     }else {
                         score.value = 0
                     }
                }
               
            })
             
           
             
            

            console.log("scores",scores);

             
          }
          break;
      
        case "Plus d'un an":
         
          if (zone == "HEADACHE") {
            scores.forEach(function(score) {
                if(score.name == "Ostéopathie") {
                    if (score.value > 9 ) {
                        score.value = 9 
                     }
                     
                    if (  score.value  = 8 ) {
                        score.value = 4 
                     }
                      if ( 7 >= score.value && score.value >= 5 ) {
                        score.value = 3 
                     }
                      if (  score.value == 4 ) {
                        score.value = 2  
                     }
                      if (  score.value < 4 ) {
                        score.value = 0 
                     }
                  

                }else if (score.name == "Médecine") {
                    if (  score.value >= 4 &&  score.value >= 2) {
                        score.value = 4 
                   }  else {
                      score.value = 0
                    }
                }else if (score.name == "Ergonome") {
                    if ( score.value > 18 ) {
                        score.value = 18 
                    } 
                     if (  score.value >= 13 ) {
                        score.value = 4 
                     }  
                      if ( 10 <= score.value && score.value < 13 ) {
                        score.value = 3
                     } 
                      if ( 6 <= score.value && score.value < 10 ) {
                      score.value = 2
                   }  
                    if ( 4 > score.value   ) {
                        score.value = 0
                     }
                }else if (score.name == "Kinésithérapie") {
                    if ( score.value > 12 ) {
                        score.value = 12 
                    } 
                    
                    if (  score.value >= 8 ) {
                        score.value = 4
                     }  
                     
                     if (   5 <= score.value && score.value < 8 ) {
                        score.value = 3
                     }
                     
                     if (   score.value < 5 ) {
                      scores.forEach(function(score) { 
                        if(score.name == "Ostéopathie") {
                          score.value = 2
                        }
                      })
                   }
                } else if (score.name == "Psychologie") {
                    if ( score.value > 10 ) {
                        score.value = 10 
                    }
                    
                    if (  score.value >= 8 ) {
                        score.value = 2
                     } 
                     
                     if ( 6 <= score.value && score.value < 8 ) {
                        score.value = 1
                     }
                     if ( 6 > score.value) {
                         score.value = 0
                     }
                }
               
            })
             
           
             
            
 

             
          }
          break;
      
        default:
          break;
      }

      return scores
}