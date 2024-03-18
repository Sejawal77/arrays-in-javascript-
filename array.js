
//   chapter 14 to 16 arrays.
//   1

// Declare an empty array using JS literal notation to store
// student names in future.

// var studenNames = [];

//  q.no 2 
//  Declare and initialize a strings array.

// var studentNames = ["jawad", " bilawal" , " ali" , " ahmed"];

// q.no 3 

// Declare and initialize a numbers array.

// var scores = [32,87,65,44];

//  q.no 4

// Declare and initialize a boolean array.

// var checks = [true,false, false ,true];

// q.no5 

// Declare and initialize a mixed array.

// var data = ["ahmed", 76, true];


// q.no6

//  Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
    // BS, BCOM, MS, M. Phil., PhD). Show the listed
    // qualifications in your browser like:

//     var qualifications = [ " SSC", " HSC", " BCS", " BS", " BCOM", " MS", " M.PHIL"]

//     document.write(`<h1> QUALIFICATIONS IN PAKISTAN </h>`);

//     function task(){
// for(i=0; i < qualifications.length; i ++){

//     document.write(qualifications[i]);
//     document.write("<br>")
// }

//     }
//     task();



//  no 7 


// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// var studentNames =["ahmed" , " ali " ," saad"];

// var studentMarks = [342 , 432, 399,];

// var totalMarks = 500;

//  document.write("<h1> marks of the student </h1>")

// document.write(`score of the ${studentNames[0]} is : ${studentMarks[0]} . Percentage ${studentMarks[0] * 100/ totalMarks}% <br>`)



// document.write(`score of the ${studentNames[1]} is : ${studentMarks[1]} . Percentage ${studentMarks[1] * 100/ totalMarks}% <br>`)



// document.write(`score of the ${studentNames[2]} is : ${studentMarks[2]} . Percentage ${studentMarks[2] * 100/ totalMarks}%`)

//    q . no 8

// Initialize an array with color names. Display the array
// elements in your browser.



// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var colorsNames = ["blue " , " white ", " black",];

// var userFirst = prompt(" please add color name in the beginning ");

// var  userLast = prompt(" please add color name in the last");

// var addFirst = colorsNames.unshift(userFirst);


// var addlast = colorsNames.push(userLast);


// document.write(colorsNames);

//  c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var colorsNames = ["blue " , " white ", " black",];

// colorsNames.unshift(" red" , " orange");

// document.write(colorsNames);




// d. Delete the first color in the array. Display the updated
// array in your browser.

// var colorsNames = ["blue " , " white ", " black",];

// colorsNames.shift();

// document.write(colorsNames)



// e. Delete the last color in the array. Display the updated
// array in your browser.


// var colorsNames = ["blue " , " white ", " black",];

// colorsNames.pop();

// document.write(colorsNames)


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.


//  var colorsNames = ["blue " , " white ", " black",];

// var  userColor = prompt("please tell the color name");
// var userIndex = + prompt(" and also the tell the index of the where do you want to add this color")

//  colorsNames.splice(userIndex,0 , userColor);

// document.write(colorsNames)

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentScore = [35 , 53 , 397 , 24, ];
// document.write(`score of the students ${studentScore} <br>`)
// studentScore.sort();
// document.write(`ordered  score of the students ${studentScore}`)


// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices = ["keyboard", " mouse ", " printer", " CPU"]

// for(i = 0 ; i < devices.length; i ++ ){
//     document.write(`${devices[i]} <br>`)
// }



// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


//  var devices = ["keyboard", " mouse ", " printer", " CPU"];

//  var reverseDevices = devices.reverse()

//  for(i = 0 ; i < reverseDevices.length; i ++ ){
//      document.write(`${reverseDevices[i]} <br>`)
//  }


