function mueve(ev){
    let cartel=document.getElementById("cHola");
    console.log("la X es "+cartel.style.left+",la Y es "+cartel.style.top);
    cartel.style.left=ev.clientX+"px";
    cartel.style.top=ev.clientY+"px";
}
function inicializa(){
    document.body.addEventListener("mousemove", mueve);
}
window.onload=inicializa;