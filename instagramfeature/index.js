let arr = [
  {
    dp: "https://images.unsplash.com/photo-1608461704474-162ae644dd2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1Nzk4OTQ3Nnx8ZW58MHx8fHx8",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1606115735640-6dde1ef43499?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NTc5ODk0NzZ8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1614495039153-e9cd13240469?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NTc5ODk0NzZ8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1553462944-0ff7e91e4a4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzd8NTc5ODk0NzZ8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1592702355965-6d0e967968df?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDd8NTc5ODk0NzZ8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1677530058357-7a1595027c4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxMQmZOaXZjdk4xa3x8ZW58MHx8fHx8",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1616257892423-861f4e77bd48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8TEJmTml2Y3ZOMWt8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
  {
    dp: "https://images.unsplash.com/photo-1638403960249-d47d26e19833?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8TEJmTml2Y3ZOMWt8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://unsplash.com/photos/a-man-walking-across-a-parking-lot-holding-a-baseball-glove-VDExbRYRilI",
  },
];

let clutter = "";
arr.forEach((elem) => {
  clutter += `<div class="story">
   <img id=${"idx"}
     src="${elem.dp}"
     alt=""
   />
  </div>`;
});
document.querySelector(".storiyan").innerHTML = clutter;
let story = document.querySelectorAll("#idx");
story = [...story];
story.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    console.log(document.querySelector(".full"));
    document.querySelector(
      ".full"
    ).style.backgroundImage = `url(${event.target.src})`;
    event.target.src;
    document.querySelector(".full").style.display = "block";
    setTimeout(() => {
      document.querySelector(".full").style.display = "none";
    }, 3000);
  });
});
