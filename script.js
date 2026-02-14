// Simple page view counter (demo)

let views = localStorage.getItem("views");

if (views === null) {
    views = 404;
} else {
    views = parseInt(views) + 1;
}

localStorage.setItem("views", views);

document.getElementById("views").innerText = views;
