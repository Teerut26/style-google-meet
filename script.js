const chang_background = () => {
  $(".zWfAibc").css({ "background-color": "#3c40438c" });
  $(".zTETae").css({ "background-color": "#3c40438c" });
  $(".n9oEIb").css({ "background-color": "#3c40438c" });
  $(".Zf0RDc").css({ "background-color": "#3c40438c" });
  $(".RWK2Je").css({ "background-color": "#3c40438c" });
  $(".ADivge").css({ background: "#0003 !important" });
};

const chang_background_image = () => {
  $("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb").css({
    "background-image": "url(https://wallpaperaccess.com/full/2825826.gif)",
  });
  $(
    "#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6"
  ).css({ "background-color": "#2021246e" });
};

const create_script = (element, url) => {
  var script = element.createElement("script");
  script.src = url;
  element.head.appendChild(script);
};

let stateCheck = setInterval(() => {
  if (document.domain === "meet.google.com") {
    if (
      document.querySelector(
        "#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.Kn8SEb > div"
      ) !== null
    ) {
      //เลิกตรวจสอบ element
      clearInterval(stateCheck);
      console.log("ok");
      create_script(
        document,
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      );

      // $(
      //   "#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.Kn8SEb > div"
      // ).append(
      //   `<div class="btn-group dropup">
      //     <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      //       Dropup
      //     </button>
      //     <div class="dropdown-menu">
      //       <form class="px-4 py-3">
      //         <div class="mb-3">
      //           <label class="form-label">link รูปภาพ</label>
      //           <input id="urldata" type="url" class="form-control" placeholder="url">
      //         </div>
      //         <div id="set_image" class="btn btn-primary">Set</div>
      //       </form>
      //     </div>
      //     </div>
      //   </div>`
      // );

      

      // $("#set_image").click(()=>{
      //   console.log($("#urldata"))
      // });

      chang_background_image();

      setInterval(() => {
        chang_background();
      }, 1000);
    }
  }
}, 100);
