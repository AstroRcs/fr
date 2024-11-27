// Select form and preview elements
const uploadForm = document.getElementById("uploadForm");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const previewImage = document.getElementById("previewImage");
const previewLink = document.getElementById("previewLink");

// Handle form submission
uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById("productTitle").value;
    const description = document.getElementById("productDescription").value;
    const imageFile = document.getElementById("productImage").files[0];
    const downloadFile = document.getElementById("productDownload").files[0];
    const page = document.getElementById("productPage").value;

    // Check if files are selected
    if (!imageFile || !downloadFile) {
        alert("Please select an image and a download file.");
        return;
    }

    // Create product object
    const product = {
        title,
        description,
        image: imageFile.name,
        download: downloadFile.name,
        page,
    };

    // Save product to local storage (simulate database)
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added successfully!");

    // Optionally update homepage (simulate database connection)
    updateHomepage();

    // Reset form
    uploadForm.reset();
});

// Preview product in real-time
uploadForm.addEventListener("input", function () {
    const title = document.getElementById("productTitle").value;
    const description = document.getElementById("productDescription").value;
    const imageFile = document.getElementById("productImage").files[0];

    // Update preview title and description
    previewTitle.textContent = title || "Preview Title";
    previewText.textContent = description || "Preview Description";

    // Preview the image (using FileReader)
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    } else {
        previewImage.src = "#";
    }
});

// Simulate homepage update (if needed)
function updateHomepage() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Homepage updated with products:", products);
}
