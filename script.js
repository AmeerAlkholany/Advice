const api = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("span");
const theAdvice = document.getElementById("adviceText");
const btn = document.getElementById("btn");

const feactchAdvice = async()=>{
    const x = await fetch(api);
   const y = await x.json() ;
   return y;
}
//the render
const render = (object)=>{
const {id,advice} = object;
adviceNumber.textContent = `ADVICE #${id}`;
theAdvice.textContent = `"${advice}"`;
}
const adviceGenerator = async()=>{
    const data = await feactchAdvice();
    const advice = data.slip;
    return  render(advice) ;
}
window.addEventListener('DOMContentLoaded', ()=>{
    btn.addEventListener('click' , adviceGenerator)
})
