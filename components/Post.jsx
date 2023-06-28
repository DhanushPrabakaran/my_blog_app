import clock from "@public/clock.svg";
import Image from "next/image";
const Post = () => {
  return (
    <div className=" bg-slate-300 bg-opacity-40 rounded-md m-4 p-4 flex flex-col items-center">
      <div className="font-bold text-3xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam?
      </div>
      <div className="flex mt-4 mb-4 ">
        <div
        className="flex mr-5">
        <Image src={clock} width={30} className="mr-1" />
        <div className="text-center">18/04/2004</div>
        </div>
        <div>
          <div>
            Author : Ram
          </div>
        </div>
      </div>
      <pre className="whitespace-pre-line text-center">
        heoooooooooooooodfbdnsrsjyjtumumuuuuarwnnnnnnnnnnnnnetw 1.2oyo
        ascgiculuwgaly
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quo iure obcaecati quod ad atque harum sed consequuntur, ipsam aperiam corporis enim voluptatem, culpa sunt quam. Nam alias, ut amet praesentium ipsum reiciendis architecto? A eius corrupti ducimus rem qui saepe at? Ullam eos debitis adipisci, similique optio vitae incidunt perferendis commodi hic neque qui perspiciatis eaque deleniti, quos maiores id odit recusandae! Architecto amet quae numquam maiores, dignissimos nisi nobis! Provident, esse. Architecto aut magni vero iure eius iste placeat sed, explicabo eaque ad sit facere assumenda dolores id quo? Accusantium non alias earum fugit, optio nisi voluptatem repellat error, temporibus, quo minus repellendus unde? Cum, repellat dicta quo dolor ipsum tempore maiores numquam neque reiciendis at unde ad velit soluta non doloremque deleniti sequi. Laudantium dolorem delectus, facilis distinctio eius necessitatibus nesciunt fugiat fuga quibusdam voluptatibus aliquam at maiores pariatur voluptas impedit recusandae molestiae iure ex. Quam alias voluptas distinctio dolorem molestias dicta esse totam id incidunt vel, tenetur accusantium amet ratione maxime error omnis voluptatibus fuga reprehenderit atque quasi neque necessitatibus nostrum ad? Similique dolor eum doloremque ea quae labore eius dolores tempora numquam, distinctio, fuga fugiat veritatis facere quis amet, necessitatibus nam adipisci qui hic vero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos magnam ullam ab voluptates veritatis minima sequi similique cumque, exercitationem ipsa veniam reiciendis, nisi asperiores laudantium quis non, iusto odio accusamus alias numquam distinctio nihil? Aperiam, vel quos autem, inventore atque obcaecati velit eius quasi iste delectus laboriosam dolores illo exercitationem, quibusdam molestias nulla ipsam perspiciatis doloribus aliquid quis cum quam quisquam voluptas! Laudantium recusandae omnis aliquam soluta doloremque culpa quos dolores reprehenderit ipsa totam dolor, saepe tenetur porro, rerum voluptate! Nam corrupti tenetur rerum maiores! Architecto consequuntur modi libero autem fuga maxime dolore aliquam distinctio incidunt et fugiat nobis recusandae, deleniti assumenda voluptatum. Tenetur corporis id alias fugit placeat, consectetur repudiandae eius explicabo incidunt aliquid ullam nesciunt doloribus, animi soluta impedit sit provident repellat labore at molestias, nulla dicta dolorem dolor. Quas assumenda corporis, quo consequuntur natus recusandae iure. Voluptatum quae, cum consequatur minus voluptatem omnis eos voluptas. Quisquam pariatur doloribus aperiam exercitationem laborum impedit hic similique? Delectus nostrum cum cupiditate porro eum eligendi ipsam dolorem maxime laborum ea excepturi reiciendis tempora, a, voluptatum magni qui vero doloremque praesentium obcaecati quo, repudiandae ipsa id reprehenderit illum. Impedit animi, distinctio consectetur assumenda iste, qui expedita, mollitia officia molestiae modi culpa?
      </pre>
    </div>
  );
};

export default Post;
