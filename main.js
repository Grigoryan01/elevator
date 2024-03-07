//getting floors 
const firstFloor=document.getElementById('one');
const secondFloor=document.getElementById('two');
const thirdFloor=document.getElementById('three');
const fourFloor=document.getElementById('four');
const fiveFloor=document.getElementById('five');
const sixFloor=document.getElementById('six');
const sevenFloor=document.getElementById('seven');
const eightFloor=document.getElementById('eight');
const nineFloor=document.getElementById('nine');
const tenFloor=document.getElementById('ten');
const elevenFloor=document.getElementById('eleven');
const twelveFloor=document.getElementById('twelve');
const thirteenFloor=document.getElementById('thirteen');
const fourteenFloor=document.getElementById('fourteen');
const fifteenFloor=document.getElementById('fifteen');
const sixteenFloor=document.getElementById('sixteen');
const seventeenFloor=document.getElementById('seventeen');
const eighteenFloor=document.getElementById('eighteen');
const nineteenFloor=document.getElementById('nineteen');
const lastFloor=document.getElementById('twenteen');


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
floors.forEach((floor,index)=>{
    const rect=floor.getBoundingClientRect();
    const yCoordinate1=rect.top;
    floorsCoords.push(yCoordinate1);
    console.log(`Floor ${index+1} Y-axis coordinate:`, yCoordinate1);
    console.log(floorsCoords);
});
//console.log(floorsCoords);

//Each elevator Y coordinate
/*elevators.forEach((elevator,index)=>{
    const res=elevator.getBoundingClientRect();
    const yCoordinate2=res.top;
    elevatorsCoords.push(yCoordinate2);
    console.log(`Elevator ${index+1} Y-axis coordinate:`, yCoordinate2);
});*/

//first elevator y coordinate
let firstElv=document.getElementById('first-elevator');
const res1=firstElv.getBoundingClientRect();
const yCoordinate1=res1.top;
elevatorsCoords.push(yCoordinate1);
console.log(`Elevator first Y-axis coordinate:`, yCoordinate1);

//second elevator coordinate
let secondElv=document.getElementById('second-elevator');
const res2=secondElv.getBoundingClientRect();
const yCoordinate2=res2.top;
elevatorsCoords.push(yCoordinate2);
console.log(`Elevator second Y-axis coordinate:`, yCoordinate2);

//third elevator coordinate
let lastElv=document.getElementById('last-elevator');
const res3=lastElv.getBoundingClientRect();
const yCoordinate3=res3.top;
elevatorsCoords.push(yCoordinate3);
console.log(`Last elevator Y-axis coordinate:`, yCoordinate3);

console.log(elevatorsCoords);


//first floor order
firstFloor.addEventListener('click',()=>{
    let attr=firstFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
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

//second floor order
secondFloor.addEventListener('click',()=>{
    let attr=secondFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//third floor order
thirdFloor.addEventListener('click',()=>{
    let attr=thirdFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//four floor order
fourFloor.addEventListener('click',()=>{
    let attr=fourFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//five floor order
fiveFloor.addEventListener('click',()=>{
    let attr=fiveFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//six floor order
sixFloor.addEventListener('click',()=>{
    let attr=sixFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//seven floor order
sevenFloor.addEventListener('click',()=>{
    let attr=sevenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+5+ 'px';
        lastElv.classList.add('.animation');
    }
});


//eight floor order
eightFloor.addEventListener('click',()=>{
    let attr=eightFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//nine floor order
nineFloor.addEventListener('click',()=>{
    let attr=nineFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//ten floor order
tenFloor.addEventListener('click',()=>{
    let attr=tenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

//eleven floor order
elevenFloor.addEventListener('click',()=>{
    let attr=elevenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//twenty floor order
twelveFloor.addEventListener('click',()=>{
    let attr=twelveFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
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

//thirteen floor order
thirteenFloor.addEventListener('click',()=>{
    let attr=thirteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+ 5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//fourteen floor order
fourteenFloor.addEventListener('click',()=>{
    let attr=fourteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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


//fifteen floor order
fifteenFloor.addEventListener('click',()=>{
    let attr=fifteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

//sixteen floor order
sixteenFloor.addEventListener('click',()=>{
    let attr=sixteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

//seveteen floor order
seventeenFloor.addEventListener('click',()=>{
    let attr=seventeenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

//eighteen floor order
eighteenFloor.addEventListener('click',()=>{
    let attr=eighteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

//nineteen floor order
nineteenFloor.addEventListener('click',()=>{
    let attr=nineteenFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
        firstElv.classList.add('.animation');
    }
    else if(index==2){
        secondElv.style.top=floorsCoords[i]+5+'px';
        secondElv.classList.add('.animation');
    }
    else{
        lastElv.style.top=floorsCoords[i]+ 5+'px';
        lastElv.classList.add('.animation');
    }
});

//last floor order
lastFloor.addEventListener('click',()=>{
    let attr=lastFloor.getAttribute("data-floor");
    let i=attr-1;
    //console.log(attr);
    //console.log(floorsCoords[i]);
    let array=[];
    for (let j=0;j<3;j++){
        let result=Math.abs(floorsCoords[i]-elevatorsCoords[j]);
        array.push(result);
    }
    //console.log(array);
    let finalResult=Math.min(...array);
    let index=array.indexOf(finalResult)+1;
   // console.log(finalResult);
    //console.log(index);
    if(index==1){
        firstElv.style.top=floorsCoords[i]+5+'px';
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

