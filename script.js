function openTopup(){
    document.getElementById("topupModal").style.display = "flex";
}

function closeTopup(){
    document.getElementById("topupModal").style.display = "none";
}

window.onclick = function(event){

    const modal = document.getElementById("topupModal");

    if(event.target === modal){
        modal.style.display = "none";
    }

}