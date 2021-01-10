let ol = document.querySelector('ol');

const links = [
    {
        label: "Week1 notes",
        url: "/wdd330/week1/index.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=

        `<li><a href="${/week1/notes.html}">${link.label}</a></li>`
    }
)