// ==========================
// NEXORA SCRIPT.JS
// ==========================

// Welcome message
console.log("Welcome to Nexora 🚀");

// Smooth button animation
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Fade in cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";
    observer.observe(card);
});

// Back to top button
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 16px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00cfff";
topBtn.style.color="#07131f";
topBtn.style.fontSize="18px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
