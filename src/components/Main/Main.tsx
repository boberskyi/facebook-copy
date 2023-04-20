import styleMain from './main.module.css';
import {Marketplace} from "./Marketplace/Marketplace";
import {PostsFeed} from "./PostsFeed/PostsFeed";
import {Navigate, Route, Routes} from "react-router-dom";
import {Events} from "./Events/Events";
import {Groups} from "./Groups/Groups";

export const Main = () => {
  return (
    <main className={styleMain.main}>
      <div className={styleMain.mainLeft}>
        <div className={styleMain.mainLeftWrapper}>
             Lorem ipsum dolor sit amet
        , consectetur adipisicing elit. Alias architecto atque, doloribus enim excepturi nam neque repellat
        reprehenderit! Ad aliquam architecto consequuntur, debitis dolor ea error expedita facere iusto natus nesciunt
        officia officiis quas quos sit temporibus ut velit. Dolor ex labore quia! Animi aperiam distinctio id incidunt
        maiores, minima officia suscipit unde vero. Beatae blanditiis earum ipsum libero voluptatum. Ad exercitationem
        ipsum laboriosam minus modi nam quam. Animi architecto beatae cum cupiditate deleniti dignissimos distinctio est
        fuga id illum ipsam ipsum laboriosam, libero molestias nostrum omnis quam quas repudiandae saepe sed totam ullam
        unde vitae! Aliquid, consequatur eaque est excepturi exercitationem iure maxime optio perferendis provident
        unde. Aliquid cum deleniti dignissimos eaque, exercitationem impedit, iure minima natus obcaecati porro qui quod
        repellat sit soluta, voluptate? Delectus dolores minima nostrum odit. Aliquid consectetur eveniet illum saepe
        sint! Accusantium ad alias asperiores atque consectetur culpa cupiditate deserunt dignissimos doloremque enim,
        et eveniet fuga, impedit in, ipsam labore laboriosam magnam maxime nihil non optio perferendis quidem quis rerum
        sequi similique vero voluptas. Aliquid at cum distinctio, earum fugit magnam natus necessitatibus neque nisi non
        obcaecati omnis pariatur, quam qui quos saepe tempora voluptates! Aperiam delectus incidunt iste minima? Ad
        corporis deleniti dolore dolores, ducimus earum enim eveniet exercitationem facere incidunt inventore ipsum
        magnam maiores molestiae neque nihil odio odit omnis pariatur, porro quam quas quisquam reprehenderit suscipit
        ullam? A, autem culpa dolore dolorum fugiat inventore itaque labore magni nostrum obcaecati odio officia, optio
        quod sequi voluptas. Alias at consectetur eius ex facere impedit laudantium libero minus numquam odit
        perferendis praesentium quam quos, saepe soluta tempora temporibus! Architecto consequatur, dolores earum
        exercitationem libero maiores mollitia necessitatibus neque obcaecati odio, perferendis repudiandae sapiente
        totam, velit veniam. Cumque eligendi, maxime molestiae nulla odio possimus quisquam voluptas! Asperiores autem
        dolorem fugiat incidunt omnis praesentium quis quos?
      </div>
    </div>
  <div className={"mainCenter"}>
    <Routes>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/" element={<PostsFeed/>}/>
      <Route path="/marketplace" element={<Marketplace/>}/>
      <Route path="/groups" element={<Groups/>}/>
      <Route path="/events" element={<Events/>}/>
      {/*<Route fallback={<LoadingSpinner />} />*/}
    </Routes>
  </div>
  <div className={styleMain.mainRight}></div>
</main>
)
}