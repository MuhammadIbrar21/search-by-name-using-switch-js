function getInfo() {
    let name = document.getElementById("name").value;

    switch (true) {

        case name === "abdullah" || name === "Abdullah":
            document.getElementById("info").innerHTML = "Computer Kera";
            break

        case name === "Sharooz" || name === "sharooz":
            document.getElementById("info").innerHTML = "Medical Billing";
            break

        case name === "rizwan" || name === "Rizwan":
            document.getElementById("info").innerHTML = "Horse Lovers";
            break

        case name === "abrar" || name === "Abrar":
            document.getElementById("info").innerHTML = "PTI Lover";
            break

        default:
            document.getElementById("info").innerHTML = "User Not Found!";
    }
}