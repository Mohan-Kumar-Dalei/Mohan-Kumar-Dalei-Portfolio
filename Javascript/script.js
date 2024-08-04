//fuction skills Animation Forword
function effectSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let Skills = document.getElementsByClassName("skill-percentage");
          Skills[0].classList.add("javascript");
          Skills[1].classList.add("html");
          Skills[2].classList.add("css");
          Skills[3].classList.add("photoshop");
          Skills[4].classList.add("bootstrap");
          Skills[5].classList.add("comunication");
          Skills[6].classList.add("creativity");
          Skills[7].classList.add("dedication");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    effectSkills();
} 
