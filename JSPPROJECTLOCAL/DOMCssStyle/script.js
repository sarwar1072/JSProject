

//css usng js dom
// const str=document.getElementById('hellow');
// str.style.backgroundColor="green"
// str.style.color='white'
// str.style.padding='20px';
//created element by js
const body=document.getElementById('bodytag');

const div=document.createElement('div');
const para=document.createElement('p');
para.innerText='hay i  am from div that is created by js dom.';
div.appendChild(para);
div.style.backgroundColor='green';
div.style.color='white';

const heading_2=document.createElement('h1');
heading_2.innerText='hay this is from h1 heading';
div.appendChild(heading_2);

const ul1=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='list o1';
ul1.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='list o2';
ul1.appendChild(li2);
div.appendChild(ul1);

body.appendChild(div);

//using inner html 
const div2=document.createElement('div');
div2.innerHTML=`
   <ul>
      <li>list one</li>
     <li>list two</li>
      <li>list three</li>
      <li>list four</li>

   </ul>
`;
body.appendChild(div2);