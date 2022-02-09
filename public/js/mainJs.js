// import lozad from "lozad";
// const observer = lozad(); // lazy loads elements with default selector as '.lozad'
// observer.observe();

export const init = () => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;

  let currentFrame = 0;
  const sceneInfo = [
    {
      sceneType: "sticky",
      heightRatio: 3,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
        messageVideo: document.querySelector(".main-video"),
        canvas: document.querySelector(".main-video"),
        context: document.querySelector(".main-video").getContext("2d"),
        videoImages: [],
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],

        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],

        messageB_opacity_in: [0, 1, { start: 0.35, end: 0.45 }],
        messageB_opacity_out: [1, 0, { start: 0.5, end: 0.55 }],

        messageB_translateY_in: [20, 0, { start: 0.35, end: 0.45 }],
        messageB_translateY_out: [0, -20, { start: 0.5, end: 0.55 }],

        messageC_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
        messageC_opacity_out: [1, 0, { start: 0.75, end: 0.8 }],

        messageC_translateY_in: [20, 0, { start: 0.6, end: 0.7 }],
        messageC_translateY_out: [0, -20, { start: 0.75, end: 0.8 }],

        messageD_opacity_in: [0, 1, { start: 0.8, end: 0.85 }],
        messageD_opacity_out: [1, 0, { start: 0.9, end: 1 }],

        messageD_translateY_in: [20, 0, { start: 0.8, end: 0.85 }],
        messageD_translateY_out: [0, -20, { start: 0.9, end: 1 }],

        messageVideo_opacity_out: [1, 0, { start: 0.9, end: 1 }],

        videoImageCount: 744,
        imageSequence: [0, 743],
      },
    },
    {
      sceneType: "normal",
      heightRatio: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      sceneType: "sticky",
      heightRatio: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
        messageA: document.querySelector("#scroll-section-2 .main-message.a"),
        messageB: document.querySelector("#scroll-section-2 .desc-message.b"),
        messageB_pin: document.querySelector(
          "#scroll-section-2 .desc-message .pin"
        ),
        messageC: document.querySelector("#scroll-section-2 .main-message.c"),
        messageVideo: document.querySelector(".main-video-2"),
        canvas: document.querySelector(".main-video-2"),
        context: document.querySelector(".main-video-2").getContext("2d"),
        videoImages: [],
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.05, end: 0.15 }],
        messageA_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],

        messageA_translateY_in: [20, 0, { start: 0.05, end: 0.15 }],
        messageA_translateY_out: [0, -20, { start: 0.2, end: 0.3 }],

        messageB_opacity_in: [0, 1, { start: 0.35, end: 0.45 }],
        messageB_opacity_out: [1, 0, { start: 0.5, end: 0.6 }],

        messageB_translateY_in: [20, 0, { start: 0.35, end: 0.45 }],
        messageB_translateY_out: [0, -20, { start: 0.5, end: 0.6 }],

        messageB_scaleY_in: [50, 100, { start: 0.35, end: 0.45 }],
        messageB_scaleY_out: [100, 50, { start: 0.5, end: 0.6 }],

        messageC_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
        messageC_opacity_out: [1, 0, { start: 0.75, end: 0.85 }],

        messageC_translateY_in: [20, 0, { start: 0.6, end: 0.7 }],
        messageC_translateY_out: [0, -20, { start: 0.75, end: 0.85 }],

        messageVideo_opacity_in: [0, 1, { start: 0, end: 0.5 }],
        messageVideo_opacity_out: [1, 0, { start: 0.9, end: 1 }],
        videoImageCount: 401,
        imageSequence: [0, 400],
      },
    },
    {
      sceneType: "sticky",
      heightRatio: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
        canvanCaption: document.querySelector(".canvas-caption"),
        canvas: document.querySelector(".image-blend-canvas"),
        context: document.querySelector(".image-blend-canvas").getContext("2d"),
        imagesPath: ["/image/image1.jpg", "/image/image1.jpg"],
        canvasImages: [],
      },
      values: {
        rect1X: [0, 0, { start: 0, end: 0 }],
        rect2X: [0, 0, { start: 0, end: 0 }],
      },
    },
  ];

  const loadImages_video1 = () => {
    for (let i = 1; i < sceneInfo[0].values.videoImageCount + 1; i++) {
      let imgElem = new Image();
      imgElem.src = `/video_img/video (${i}).jpg`;
      sceneInfo[0].objs.videoImages.push(imgElem);

      imgElem.addEventListener("load", (e) => {});
    }
  };

  const loadImages_video2 = () => {
    for (let i = 1; i < sceneInfo[2].values.videoImageCount + 1; i++) {
      let imgElem = new Image();
      imgElem.src = `/video3_img/video (${i}).jpg`;
      sceneInfo[2].objs.videoImages.push(imgElem);

      imgElem.addEventListener("load", (e) => {});
    }
  };

  const loadCanvasImages = () => {
    for (let i = 0; i < sceneInfo[3].objs.imagesPath.length; i++) {
      let imgElem = new Image();
      imgElem.src = sceneInfo[3].objs.imagesPath[i];
      sceneInfo[3].objs.canvasImages.push(imgElem);
      imgElem.addEventListener("load", (e) => {});
    }
  };

  const setLayout = () => {
    //각 스크롤 섹션 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].sceneType === "sticky") {
        sceneInfo[i].scrollHeight =
          sceneInfo[i].heightRatio * window.innerHeight;
      } else {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
      }

      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;

      if (totalScrollHeight >= window.scrollY) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);

    // width, height 를 조절해서 canvas 사이즈 바꾸는 방법
    // sceneInfo[0].objs.canvas.width = window.innerWidth;
    // sceneInfo[0].objs.canvas.height = window.innerHeight;
    // sceneInfo[0].objs.context.drawImage(
    //   sceneInfo[0].objs.videoImages[currentFrame],
    //   0,
    //   0,
    //   sceneInfo[0].objs.canvas.width,
    //   sceneInfo[0].objs.canvas.height
    // );

    const heightRatio = window.innerHeight / 1080;
    sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scaleY(${heightRatio})`;
    sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scaleY(${heightRatio})`;
  };

  const scrollLoop = () => {
    const mainSection = document.querySelector(".scroll-section");

    if (mainSection) {
      let currentSceneChange = false;
      prevScrollHeight = 0;

      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += sceneInfo[i].scrollHeight;
      }

      if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
        currentScene++;
        currentSceneChange = true;
      }

      if (yOffset < prevScrollHeight) {
        if (currentScene === 0) return;
        currentScene--;
        currentSceneChange = true;
      }

      if (currentSceneChange) {
        document.body.setAttribute("id", `show-scene-${currentScene}`);
      }

      if (currentSceneChange) return;
      playAnimation();
    }
  };

  const playAnimation = () => {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentSceneHeight = sceneInfo[currentScene].scrollHeight;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollRatio = currentYOffset / currentSceneHeight;
    switch (currentScene) {
      case 0:
        requestAnimationFrame(() => {
          currentFrame = Math.round(
            (sceneInfo[0].values.videoImageCount - 1) * scrollRatio
          );
          sceneInfo[0].objs.context.drawImage(
            sceneInfo[0].objs.videoImages[currentFrame],
            0,
            0,
            sceneInfo[0].objs.canvas.width,
            sceneInfo[0].objs.canvas.height
          );
        });

        if (scrollRatio <= 0.225) {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.475) {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_out,
            currentYOffset
          )}%)`;
        }
        if (scrollRatio <= 0.725) {
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${calcValues(
            values.messageC_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.875) {
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_in,
            currentYOffset
          );
          objs.messageD.style.transform = `translateY(${calcValues(
            values.messageD_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_out,
            currentYOffset
          );
          objs.messageD.style.transform = `translateY(${calcValues(
            values.messageD_translateY_out,
            currentYOffset
          )}%)`;
        }

        objs.messageVideo.style.opacity = `${calcValues(
          values.messageVideo_opacity_out,
          currentYOffset
        )}`;

        break;
      case 1:
        break;
      case 2:
        requestAnimationFrame(() => {
          currentFrame = Math.round(
            (sceneInfo[2].values.videoImageCount - 1) * scrollRatio
          );
          sceneInfo[2].objs.context.drawImage(
            sceneInfo[2].objs.videoImages[currentFrame],
            0,
            0,
            sceneInfo[2].objs.canvas.width,
            sceneInfo[2].objs.canvas.height
          );
        });

        if (scrollRatio <= 0.175) {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset
          );
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.475) {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%)`;
          objs.messageB_pin.style.transform = `scaleY(${calcValues(
            values.messageB_scaleY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_out,
            currentYOffset
          )}%)`;
          objs.messageB_pin.style.transform = `scaleY(${calcValues(
            values.messageB_scaleY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.725) {
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset
          );
          objs.messageC.style.transform = `translateY(${calcValues(
            values.messageC_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.5) {
          objs.messageVideo.style.opacity = calcValues(
            values.messageVideo_opacity_in,
            currentYOffset
          );
        } else {
          objs.messageVideo.style.opacity = calcValues(
            values.messageVideo_opacity_out,
            currentYOffset
          );
        }

        break;
      case 3:
        const widthRatio = window.innerWidth / objs.canvas.width;
        const heightRatio = window.innerHeight / objs.canvas.height;

        let canvasScaleRatio;
        if (widthRatio <= heightRatio) {
          canvasScaleRatio = heightRatio;
        } else {
          canvasScaleRatio = widthRatio;
        }

        objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
        objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
        objs.context.drawImage(objs.canvasImages[0], 0, 0);

        const recalculatedInnerWidth = window.innerWidth / canvasScaleRatio;
        const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

        const whiteRectWidth = recalculatedInnerWidth * 0.15;
        values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] =
          values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

        values.rect1X[2].start =
          (objs.canvas.offsetTop - recalculatedInnerHeight) /
          currentSceneHeight;
        values.rect2X[2].start =
          (objs.canvas.offsetTop - recalculatedInnerHeight) /
          currentSceneHeight;
        values.rect1X[2].end =
          values.rect1X[2].start + recalculatedInnerHeight / currentSceneHeight;
        values.rect2X[2].end =
          values.rect2X[2].start + recalculatedInnerHeight / currentSceneHeight;

        objs.context.fillStyle = "#F1F5F9";

        objs.context.fillRect(
          calcValues(values.rect1X, currentYOffset),
          0,
          parseInt(whiteRectWidth),
          recalculatedInnerHeight
        );
        objs.context.fillRect(
          calcValues(values.rect2X, currentYOffset),
          0,
          parseInt(whiteRectWidth),
          recalculatedInnerHeight
        );

        break;
    }
  };

  const calcValues = (values, currentYOffset) => {
    let rv;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length > 2) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (partScrollStart > currentYOffset) {
        rv = values[0];
        return rv;
      }
      if (partScrollEnd < currentYOffset) {
        rv = values[1];
        return rv;
      }
      const partScrollRatio =
        (currentYOffset - partScrollStart) / partScrollHeight;

      rv = partScrollRatio * (values[1] - values[0]) + values[0];
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  };

  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    scrollLoop();
  });

  loadImages_video1();
  loadImages_video2();
  loadCanvasImages();
  setLayout();

  let imgElem = new Image();
  imgElem.src = `/video_img/video (1).jpg`;

  imgElem.addEventListener("load", () => {
    sceneInfo[0].objs.context.drawImage(
      imgElem,
      0,
      0,
      sceneInfo[0].objs.canvas.width,
      sceneInfo[0].objs.canvas.height
    );
  });

  let imgElem2 = new Image();
  imgElem2.src = `/video3_img/video (1).jpg`;

  imgElem2.addEventListener("load", () => {
    sceneInfo[2].objs.context.drawImage(
      imgElem2,
      0,
      0,
      sceneInfo[2].objs.canvas.width,
      sceneInfo[2].objs.canvas.height
    );
  });
};
