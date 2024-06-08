function showImage(imgElement) {
    var modal = document.getElementById("modal");
    var fullImage = document.getElementById("fullImage");
    fullImage.src = imgElement.src;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
