function toggleCollapse(id) {
    var element = document.getElementById(id);
    if (element.style.maxHeight === "0px" || element.style.maxHeight === "") {
        element.style.maxHeight = element.scrollHeight + "px";
    } else {
        element.style.maxHeight = "0px";
    }
}
