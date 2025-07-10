function grabDoll(dolls){
  var bag=[];
  // traverse list of dolls using for loop
  for (var i = 0; i < dolls.length; i++) {
    // check if one of the dolls to be added to bag 
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue;
    }
    // add to bag if one of dolls we're looking for
    bag.push(dolls[i]);
    // stop once the bag has three dolls in it
    if (bag.length === 3) {
      break;
    }
  }


  //code Wars solution
  // function grabDoll(dolls){
  //   var bag=[];
    
  //   for(var i = 0; i < dolls.length; i++) {
    
  //     if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
  //       bag.push(dolls[i]);
  //     else
  //       continue;
        
  //     if(bag.length === 3) break;
  //   }
    
  //   return bag;
  // }