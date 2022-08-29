(function() {
    const article = document.getElementById('article');
    if (!article) {
        return;
    }

    const headings = article.querySelectorAll('h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
        const div = document.createElement('div');
        div.classList.add('heading');
        const slug = heading.innerText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
        const link =document.createElement('a');
        link.href = `#${slug}`;
        const icon = document.createElement('i');
        icon.setAttribute('data-feather', 'link');
        link.appendChild(icon);
        heading.parentElement.replaceChild(div, heading);
        div.appendChild(link);
        div.appendChild(heading);
        link.addEventListener('click', (event) => {
            const baseLocation = window.location.href.slice(0, window.location.href.indexOf("#"))
            navigator.clipboard.writeText(`${baseLocation}#${slug}`);
        })
    })

    feather.replace();
})();