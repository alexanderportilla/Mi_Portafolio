document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease-in-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY + window.scrollY}px`;
        cursor.style.left = `${e.clientX + window.scrollX}px`;
    });

    // Efecto al pasar sobre enlaces
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Efecto al hacer click
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const title = "Alexander Portilla";
    const subtitle = "Tecnólogo en Análisis y Desarrollo de Software";
    
    let titleIndex = 0;
    let subtitleIndex = 0;

    function typeWriterTitle() {
        if (titleIndex < title.length) {
            document.getElementById("title").innerHTML += title.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeWriterTitle, 100);
        } else {
            typeWriterSubtitle();
        }
    }

    function typeWriterSubtitle() {
        if (subtitleIndex < subtitle.length) {
            document.getElementById("subtitle").innerHTML += subtitle.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeWriterSubtitle, 100);
        }
    }

    typeWriterTitle();
});






