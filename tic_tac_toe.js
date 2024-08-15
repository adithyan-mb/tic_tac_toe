
/* LOGIC
           .          .
           .          .
     0     .     1    .    2
           .          .
 . . . . . . . . . . . . . . . . .
           .          .
     3     .     4    .     5
           .          .
 . . . . . . . . . . . . . . . . .
           .          .
           .          .
     6     .     7    .     8
           .          .





           //WINNING PATTERN  : 0,1,2,
                                3,4,5
                                6,7,8
                                0,3,6
                                1,4,7
                                2,5,8
                                0,4,8
                                2,4,6



*/
let pattern=[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],
              [2,4,6],[2,5,8],[3,4,5],[6,7,8]
            ];

let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#submit")
let playerX=true;
let winner=false;
let winnername="";





function disablebox(){

      for(let item of boxes)
      {
            item.disabled=true;
      }

}

function playertrack()
{
      for( item of pattern)
        {    if(boxes[item[0]].innerText!=="" && boxes[item[2]].innerText !=="" && boxes[item[1]].innerText!=="" )
            if(boxes[item[0]].innerText==boxes[item[1]].innerText && boxes[item[2]].innerText ==boxes[item[1]].innerText )
                              {   console.log(`${boxes[item[0]].innerText } winner`);
                                  winner=true;
                                  winnername=`${boxes[item[0]].innerText } `
                                 
                              }
                        }
                              if(winner ==true)
                              {

                                    let wintext=document.querySelector(".winner");
                                  
                                    wintext.innerHTML=`<h2>  ${winnername} is the Winner  </h2>`;
                                    console.log(wintext)
                                    disablebox();
                              }
 

}





boxes.forEach((box)=>{

 
   box.addEventListener("click",()=>
                  {

                  if(playerX==true)
                        {
                              box.innerText="X";
                              playerX=!playerX
                              box.disabled=true
                                
                        }
                  else if(playerX==false)
                        {
                              box.innerText="O";
                              playerX=!playerX
                              box.disabled=true 
                        }
 
                   playertrack();
                })
            
            
            
            
            }

      
      )





      let submit=document.querySelector("#submit")
      console.log(submit)

      submit.addEventListener("click",()=>{

             playerX=true;
            winner=false;

            let wintext=document.querySelector(".winner");
            wintext.innerHTML="";
      for(let item of boxes)
            {
                  item.innerText="";
            }
      
            for(let item of boxes)
                  {
                        item.disabled=false;
                  }
            

      })