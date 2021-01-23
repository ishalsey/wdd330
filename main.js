let ol = document.querySelector('ol');

const links = [
    {
        label: "Week1 notes",
        url: "/week1/notes.html"
    },
    {
        label: "Week2 notes",
        url: "/week2/index.html"
    },
    {
        label: "Week3 notes",
        url: ".../week3/index.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=

        `<li><a href="${link.url}">${link.label}</a></li>`
    }
)