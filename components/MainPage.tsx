import { useEffect } from "react";
import { init } from "../public/js/mainJs";

const MainPage = () => {
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div id="show-scene-1">
        <section id="scroll-section-0" className="scroll-section">
          <h1>AirMugPro</h1>
          <div className="sticky-elem main-message a">
            <p>
              온전히 빠져들게 하는<br></br>최고급 세라믹
            </p>
          </div>
          <div className="sticky-elem main-message b">
            <p>
              주변 맛을 느끼게 해주는<br></br>주변 맛 허용 모드
            </p>
          </div>
          <div className="sticky-elem main-message c">
            <p>
              온전히 편안한<br></br>맞춤형 세라믹
            </p>
          </div>
          <div className="sticky-elem main-message d">
            <p>
              새롭게 입가를<br></br>찾아온 매혹
            </p>
          </div>
        </section>
        <section id="scroll-section-1" className="scroll-section">
          <p className="description">
            <strong>보통 스크롤 영역</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            omnis deserunt incidunt fugiat possimus suscipit molestias quasi
            labore mollitia voluptates magni dolorem a, consequatur accusamus,
            exercitationem dicta nam. Beatae dolor, sapiente mollitia
            blanditiis, assumenda quia officia voluptatibus quaerat similique
            veniam ex libero asperiores modi odio explicabo. Corrupti accusamus
            impedit, porro neque in beatae? Sunt facilis exercitationem ab rem,
            laudantium iure, consequuntur ex accusamus aliquid dolorem vero
            voluptates? Accusantium dolor doloribus nesciunt voluptas. Rem
            itaque, voluptas iste consequuntur, labore ipsa qui ut dicta
            delectus dolor optio corporis doloremque repudiandae autem facilis
            perferendis amet! Dolore debitis, cumque blanditiis ipsum veritatis
            illo reiciendis quo facilis aspernatur! Perspiciatis quasi quam
            similique tempora voluptates laborum consequatur, alias eveniet
            tenetur sit omnis cum a, incidunt illum perferendis quisquam neque
            libero quos reprehenderit deleniti? Est tenetur aperiam ea rem amet
            porro minima fuga commodi consequatur voluptas aliquam expedita
            doloribus, eius ratione. Perspiciatis eveniet possimus consectetur
            distinctio eius ipsum excepturi at optio reiciendis alias explicabo
            cum nisi labore, accusantium maiores similique facere vero id a
            quisquam ipsa beatae fugiat pariatur animi! Eveniet facilis labore
            commodi, cupiditate aspernatur cum deleniti nam dolorem quam vel
            delectus aliquam laborum maxime repellendus iure reprehenderit,
            officia esse magni consequuntur. Non adipisci provident voluptatum.
          </p>
        </section>
        <section id="scroll-section-2" className="scroll-section">
          <div className="sticky-elem main-message">
            <p>
              <small>편안한 촉감</small>
              입과 하나되다
            </p>
          </div>
          <div className="sticky-elem desc-message">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              nobis provident doloremque fugiat ex dignissimos officiis at
              suscipit, ea quas! Pariatur illum possimus soluta voluptatum,
              saepe ullam laborum ad natus iure praesentium architecto non
              voluptates suscipit repellendus esse itaque impedit sunt autem
              incidunt doloribus ducimus et, optio ex magnam. Similique!
            </p>
            <div className="pin"></div>
          </div>
          <div className="sticky-elem main-message">
            <p>
              <small>편안한 촉감</small>
              입과 하나되다
            </p>
          </div>
        </section>
        <section id="scroll-section-3" className="scroll-section">
          <p className="mid-message">
            <strong>Retina 머그</strong>
            <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus exercitationem ad, repudiandae dignissimos ipsam consectetur
            cupiditate ipsum ducimus placeat qui ea porro quam inventore
            reiciendis corrupti id quae? Cum unde eius expedita deserunt.
            Temporibus laborum asperiores perspiciatis facere? Explicabo quas,
            optio harum eligendi ab dolores laboriosam doloremque rerum unde
            aperiam?
          </p>
          <div className="canvas-caption">
            canvas caption Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore velit dolore earum eaque quisquam deleniti, soluta
            possimus voluptates perferendis adipisci!
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
