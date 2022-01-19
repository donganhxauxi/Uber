// Nút tính tiền
const billingBtn = document.querySelector(".contact100-form-btn");

billingBtn.addEventListener("click", (e) => {
  // Lọc ra loại taxi
  const cabTypeList = document.querySelectorAll("input[name='selector']");
  let totalPrice = 0;
  const selectedCabType = [...cabTypeList].filter((cabType) => {
    return cabType.checked === true;
  })[0].id;

  // Tính tiền taxi
  const kmNum = +document.querySelector("#soKM").value;
  const waitingTime = +document.querySelector("#thoiGianCho").value;
  const calculateRate = (
    initialRate,
    first20KmRate,
    casualRate,
    waitingRate
  ) => {
    if (kmNum <= 1) {
      totalPrice = initialRate + waitingTime * waitingRate;
      return totalPrice;
    }

    if (kmNum <= 20) {
      totalPrice =
        initialRate + (kmNum - 1) * first20KmRate + waitingTime * waitingRate;
      return totalPrice;
    }

    if (kmNum > 20) {
      totalPrice =
        initialRate +
        19 * first20KmRate +
        (kmNum - 20) * casualRate +
        waitingTime * waitingRate;
      return totalPrice;
    }
  };
  switch (selectedCabType) {
    case "uberX":
      calculateRate(8000, 12000, 10000, 2000);
      break;
    case "uberSUV":
      calculateRate(9000, 14000, 12000, 3000);
      break;
    case "uberBlack":
      calculateRate(10000, 16000, 14000, 4000);
      break;
  }

  // Hiển thị tổng số tiền
  document.querySelector("#xuatTien").textContent = totalPrice;
});
