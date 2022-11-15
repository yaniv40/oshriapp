const db = [
  [
    [" ",8,7," ",5," ",3," ",1],
    [2," ",6," ",7," ",9," "," "],
    [" ",5," ",9," ",8," ",4,6],
    [1," ",8," ",3," ",6,9,4],
    [" "," ",4,8, " ",2," ",5," "],
    [7," ",5,4," "," "," ",8,3],
    [" "," ",9,2," ",6," ",7," "],
    [4," ",2," ",1," ",5,6,8],
    [8," "," ",7," ",5," "," ",9],

  ],
  [
    [" ",8," ",6,5," "," ",2,1],
    [2," ",6,1," "," ",9,8," "],
    [" ",5," ",9," ",8," "," ",6],
    [1,2," ",5," ",7," "," ",4],
    [6,3," "," ",9," ",1,5,7],
    [" ",9," ",4,6," ",8," "," "],
    [" ",1," ",2," ",6,4," ",3],
    [4," ",2," ",1," "," ",6," "],
    [" ",6," ",7," "," ",2," ",9],

  ],
  [
   


      
    ["",8," ",6,5,4," ",2,1],
    [" ",4,6," ",7," ",9," ",5],
    [3," ",1,9," "," ",7," "," "],
    [" ",2," "," ",3,7," ",9,4],
    [" ",3," "," "," "," ",1," ",7],
    [7," ",5," ",6,1," ",3," "],
    [5," "," "," ",8," ",4,7,3],
    [" ",7,2,3," ",9," "," ",8],
    [" "," ",3," "," ",5," ",1,9],

  ],
  ];
  
      const fullBoard =[
          
              [9,8,7,6,5,4,3,2,1],
              [2,4,6,1,7,3,9,8,5],
              [3,5,1,9,2,8,7,4,6],
              [1,2,8,5,3,7,6,9,4],
              [6,3,4,8,9,2,1,5,7],
              [7,9,5,4,6,1,8,3,2],
              [5,1,9,2,8,6,4,7,3],
              [4,7,2,3,1,9,5,6,8],
              [8,6,3,7,4,5,2,1,9],
      
          ];  
    
   let board;//Boolean variable
   function sodukoBoard (level){
  let chooseBoard =Math.floor(Math.random()* 3);//Lottery of 3 boards
  board=db[chooseBoard];
  for(let row=0;row<9; row++){//A loop that checks the rows of the boards
      for(let col = 0; col<9; col++){//A loop that checks the columns of the boards 
          document.getElementById(`td${row}${col}`).value=board[row][col];//Link the element to the boards
      }
    
  }
  
   }
   
function checkBoard (){

for(let row = 0; row< 1 ; row++){//loop that checks the rows of the boards
  for(let col = 0; col< 1 ; col++){// loop that checks the columns of the boards
    
    let pressOnBoard = document.getElementById(`td${row}${col}`).value;//Link the element to the boards
    //If what the user types is equal to the board
    if(pressOnBoard == fullBoard[row][col]){
           // As soon as the user has finished answering the board,
      //  the system will pop up a message and take him back to select the stage
      alert ('Well done, you have finished successfully');
      window.location.href = "file:///C:/Users/DELL/OneDrive/Desktop/%D7%9C%D7%99%D7%9E%D7%95%D7%93%D7%99%20fuul%20stuck/%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%D7%9D/project/Step%20Selection%20Page/index2.html";
    }
  
 else{
    alert('try again');//As soon as the user did not answer correctly on the board
    //  it will pop up a message to try again
      // and then the system will reset the board
    location.replace(' ');

    
  
 
  
  
 }


}




  

}


}  

