export default function addReport() {
    fetch("http://localhost:3000/report", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json()).then(data => console.log(data))
}