let btn = document.querySelector("#themeBtn");

btn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme","dark");
    }
    else{
        btn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }
});

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark" || (!savedTheme && isDark)){
    document.body.classList.add("dark");
    btn.textContent = "☀️ Light Mode";
}


