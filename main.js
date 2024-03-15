//getting elevators
const firstElevator=document.getElementById('first-elevator');
const secondElevator=document.getElementById('second-elevator');
const lastElevator=document.getElementById('last-elevator');

//getting floors and elevators arrays
const floors=document.querySelectorAll('.floor');
const elevators=document.querySelectorAll('.elevator');

const floorsCoords=[];
const elevatorsCoords=[];

//Each floor Y coordinate
floors.forEach((floor)=>{
    const rect=floor.getBoundingClientRect();
    const yCoordinate1=rect.top;
    floorsCoords.push(yCoordinate1);
});

//first elevator y coordinate
let firstElv=document.getElementById('first-elevator');
const res1=firstElv.getBoundingClientRect();
const yCoordinate1=res1.top;
elevatorsCoords.push(yCoordinate1);

//second elevator coordinate
let secondElv=document.getElementById('second-elevator');
const res2=secondElv.getBoundingClientRect();
const yCoordinate2=res2.top;
elevatorsCoords.push(yCoordinate2);

//third elevator coordinate
let lastElv=document.getElementById('last-elevator');
const res3=lastElv.getBoundingClientRect();
const yCoordinate3=res3.top;
elevatorsCoords.push(yCoordinate3);

  floors.forEach(floor => {
   floor.addEventListener('click', () => {
      let attr=floor.getAttribute("data-floor");
        console.log(attr);
        let i=attr-1;
        let array=[];
        for (let j=0;j<3;j++){
            let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
            array.push(result);
        }
        let finalResult=Math.min(...array);
        let index=array.indexOf(finalResult)+1;
 
        if(index==1){
            firstElv.style.top=floorsCoords[i]+5+ 'px';
            firstElv.classList.add('.animation');
        }
        else if(index==2){
            secondElv.style.top=floorsCoords[i]+5+'px';
            secondElv.classList.add('.animation');
        }
        else{
            lastElv.style.top=floorsCoords[i]+5+'px';
            lastElv.classList.add('.animation');
        }
    });
  });
