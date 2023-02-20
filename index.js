//Q2//
//BOLATITO'S ADMISSION TO GREENFIELD HIGH SCHOOL AS AN ARTS STUDENT//
//ARTS SUBJECTS= GOVERNMENT, ECONOMICS, LITERATURE, HISTORY
//SCIENCE SUBJECT=PHYSICS, CHEMISTRY, BIOLOGY, TECHNICAL DRAWING//
//SOCIAL SCIENCE=ACCOUNTING, COMMERCE, MARKETING, GEOGRAPHY//
//DEFAULT= MATHEMATICS, ENGLISH//
let Bolatito='Arts Student';

if(Bolatito=='Arts Student'){
    console.log("Government, Economics, Literature, History");
}
else if(Bolatito=='Science Student'){
    console.log("Physics, Chemistry, Biology, Technical Drawing");
}
else if(Bolatito=='Social Student'){
    console.log("Accounting, Commerce, Marketing, Geography");
}else{
    console.log('English and Mathematics');
}

//Q4.//
for (let i = 1; i < 20; i+=7) {
    console.log(i);
}
 //Q5. FINDING THE POWER OF TWO NEAREST TO A POSITIVE NUMBER//

  let num = 8;
  let pwr=num**2;
  console.log(pwr);

  
  console.log("The number "+pwr+ " is the power nearest to "+num+ ".");