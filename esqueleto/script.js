document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById('info-box');
    const highlight = document.getElementById('highlight');
    const linkBox = document.getElementById('link-box');
    //const linkInfo = document.getElementById('link-info');
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('mouseenter', (e) => {
            const info = e.target.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';

            const coords = e.target.getAttribute('coords').split(',');
            const x1 = parseInt(coords[0]);
            const y1 = parseInt(coords[1]);
            const x2 = parseInt(coords[2]);
            const y2 = parseInt(coords[3]);
            highlight.style.left = x1 + 'px';
            highlight.style.top = y1 + 'px';
            highlight.style.width = (x2 - x1) + 'px';
            highlight.style.height = (y2 - y1) + 'px';
            highlight.style.display = 'block';
        });

        area.addEventListener('mousemove', (e) => {
            infoBox.style.left = e.pageX + 10 + 'px';
            infoBox.style.top = e.pageY + 10 + 'px';
        });

        area.addEventListener('mouseleave', () => {
            infoBox.style.display = 'none';
            highlight.style.display = 'none';
        });

        area.addEventListener('click', (e) => {
            e.preventDefault();  // Evita que el enlace se siga inmediatamente
            //const info = e.target.getAttribute('data-info');
            const link1Href = e.target.getAttribute('data-link1');
            const link1Text = e.target.getAttribute('data-link1-text');
            const link2Href = e.target.getAttribute('data-link2');
            const link2Text = e.target.getAttribute('data-link2-text');

            link1.href = link1Href;
            link1.textContent = link1Text;
            link2.href = link2Href;
            link2.textContent = link2Text;

            const coords = e.target.getAttribute('coords').split(',');
            const x1 = parseInt(coords[0]);
            const y1 = parseInt(coords[1]);

            linkBox.style.left = x1 + 'px';
            //linkBox.style.top = y1 + 'px';
            linkBox.style.top = (y1 + 20) + 'px'; // Ajusta la posición del link-box para que no se superponga
            linkBox.style.display = 'block';

            //window.location.href = e.target.getAttribute('href');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('area') && !e.target.closest('#link-box')) {
            linkBox.style.display = 'none';
        }
    });
});

