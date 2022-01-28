export const init = () => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;

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
      },
    },
    {
      sceneType: "sticky",
      heightRatio: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

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
  };

  const scrollLoop = () => {
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
  };

  const playAnimation = () => {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentSceneHeight = sceneInfo[currentScene].scrollHeight;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollRatio = currentYOffset / currentSceneHeight;
    switch (currentScene) {
      case 0:
        const mainVideo = document.querySelector(".main-video");

        requestAnimationFrame(() => {
          mainVideo.currentTime = mainVideo.duration * scrollRatio;
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

        break;
      case 1:
        break;
      case 2:
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

        break;
      case 3:
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

  setLayout();
};
