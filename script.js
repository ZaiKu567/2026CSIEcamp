const eat = document.querySelector(".eat");
eat.addEventListener("keydown", function(e) 
{
    if (e.key === "Enter"){
        if(eat.value === eat.placeholder){
        window.location.href = "https://www.youtube.com/watch?v=7ThatJB-lh0";
        } 
        else{
        console.log(eat.value);
        }
    }
});