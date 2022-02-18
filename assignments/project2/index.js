var focusedCard = document.querySelector('.spotlight');

        window.addEventListener('mousemove', e => {

            /* Get mouse page coordinates */
            var percentageX = e.pageX / window.innerWidth * 190;
            var percentageY = e.pageY / window.innerHeight * 190;

            /* Center the background spotlight on mouse coordinates */
            focusedCard.style.backgroundImage = `radial-gradient(circle at ${percentageX}% ${percentageY}%, transparent 50px, rgba(0,0,0,0.75) 140px`
        })
