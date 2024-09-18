window.onload = () => {
    const nameBranding = document.querySelector('.branding h1');

    // Initial state before animation
    nameBranding.style.opacity = 0;
    nameBranding.style.transform = 'translateX(-100px)';

    // Animate name branding after a short delay
    setTimeout(() => {
        nameBranding.style.transition = 'opacity 1s ease, transform 1s ease';
        nameBranding.style.opacity = 1;
        nameBranding.style.transform = 'translateX(0)';
    }, 100); // Delay of 100ms before starting the animation
};

// Handle tile expansion based on cursor movement
let lastTile = null; // To keep track of the last hovered tile

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        lastTile = tile; // Update lastTile on hover
    });

    tile.addEventListener('mousemove', () => {
        if (!lastTile) return;

        const rect = tile.getBoundingClientRect();
        const lastRect = lastTile.getBoundingClientRect();

        const tileCenterX = rect.left + rect.width / 2;
        const lastTileCenterX = lastRect.left + lastRect.width / 2;

        if (tile !== lastTile) {
            if (tileCenterX < lastTileCenterX) {
                // Moving from left tile to right tile
                tile.classList.add('expand-right');
            }
        }
    });

    tile.addEventListener('mouseleave', () => {
        if (tile !== lastTile) return;

        // Reset the transformation when the cursor leaves the tile
        tile.classList.remove('expand-right');
        lastTile = null; // Reset the lastTile
    });
});

// Function to display the floating contact info when "Get In Touch" button is clicked
function getInTouch() {
    const floatingContactInfo = document.getElementById("floating-contact-info");
    const backdrop = document.getElementById("backdrop");
    floatingContactInfo.classList.toggle("show"); // Toggle visibility
    backdrop.classList.toggle("show"); // Toggle backdrop visibility
}

// Ensure event listeners are added after the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close-button");
    const floatingContactInfo = document.getElementById("floating-contact-info");
    const backdrop = document.getElementById("backdrop");
    const resumeButton = document.querySelector(".resume-button");

    closeButton.addEventListener("click", () => {
        floatingContactInfo.classList.remove("show"); // Hide floating contact info
        backdrop.classList.remove("show"); // Hide backdrop
    });

    resumeButton.addEventListener("click", () => {
        console.log("Resume downloaded!"); // Log message when clicked
    });
});
