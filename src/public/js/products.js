console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-collection").show();
      $("#product-volume").hide();
    }
  });
  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });
  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
  });
});

function validateForm() {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please fill out all fields");
    return false;
  } else {
    return true;
  }
}

function previewFileHandler(input, order) {
  const imgClassName = input.className;
  console.log("input", input);
  console.log("imgClassName", imgClassName);
  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"]; // image, video etc
  const validImageType = ["image/jpeg", "image/jpg", "image/png"];
  if (!validImageType.includes(fileType)) {
    alert(
      "Invalid File Type! Please select an Image only jpeg, jpg, and png format."
    );
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
