document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll(".card");

    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("moved")) {
                card.classList.add("moved"); 

                
                card.style.transform = "translateY(-200%)"; // Moves the card upwards
                card.style.opacity = "0"; 
            }
        });
    });
});
