document.addEventListener('DOMContentLoaded', () => {
    const zoneDessin = document.querySelector('.dessinBonhomme');
    const navImages = document.querySelectorAll('header nav img');
    const curseur = document.querySelector('#curseur');
    let imageSelectionnee = null;

    navImages.forEach(img => {
        img.addEventListener('click', (event) => {
            if (imageSelectionnee !== null)
                imageSelectionnee.classList.remove('selectionne');
            imageSelectionnee = event.currentTarget;
            imageSelectionnee.classList.add('selectionne');
            curseur.src = imageSelectionnee.src;
            curseur.className = imageSelectionnee.classList[0] + " etampe"; 
        });
    });

    zoneDessin.addEventListener('mousemove', (event) => {
        if (imageSelectionnee == null) return;
        curseur.style.display = 'block';
        const rect = zoneDessin.getBoundingClientRect();
        curseur.style.left = event.clientX - rect.left + "px";
        curseur.style.top = event.clientY - rect.top + "px";
    });

    zoneDessin.addEventListener('click', () => {
        if (imageSelectionnee == null) return;
        const nouvelleEtampe = curseur.cloneNode(true);
        nouvelleEtampe.removeAttribute('id');
        nouvelleEtampe.style.pointerEvents = 'auto';
        zoneDessin.appendChild(nouvelleEtampe);
    });

    zoneDessin.addEventListener("contextmenu", (event) => { 
         event.preventDefault();
         if (event.target.classList.contains('etampe')) {
             event.target.remove();
         }
     });
    
    document.querySelector("footer span").textContent = new Date().getFullYear();
});