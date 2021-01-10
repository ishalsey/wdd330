let ol = document.querySelector('ol');

const links = [
    {
        label: "Week1 notes",
        url: "/wdd330/week1/html/notes.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=

        `<li><a href="${link.url}">${link.label}</a></li>`
    }
)