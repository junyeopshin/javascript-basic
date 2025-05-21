window.addEventListener("scroll", () => {
  //   console.log("스크롤했습니다!");
  //   스크롤 양
  const scrolled = window.scrollY;
  //   console.log(scrolled);

  // 페이지 전체 높이
  const pageHeight = document.documentElement.scrollHeight;
  //   console.log(pageHeight);

  // 표시 영역 높이
  const viewHeight = document.documentElement.clientHeight;
  //   console.log(viewHeight);

  // 스크롤한 비율
  const percentage = (scrolled / (pageHeight - viewHeight)) * 100;
  //   console.log(percentage);

  //   바 넓이 설정
  document.querySelector("#bar").style.width = `${percentage}%`;
});
