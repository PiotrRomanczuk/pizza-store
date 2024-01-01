import Image from "next/image";

export const About = () => {
  return (
    <section className="mx-auto flex h-3/5 w-4/5 flex-col-reverse lg:flex-row">
      <div className=" p-12 lg:flex-1">
        <Image
          src="/unSplash/DoughMaking.jpg"
          alt="Dough Making"
          width={1200}
          height={800}
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div className="text-center lg:flex-1 lg:p-8">
        <div className="bg-gray-400 pt-6">
          <div className="mb-4 text-3xl font-bold">About us</div>
          <p className="text-lg">
            Your about us text goes here. Provide information about your company
            or project. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores adipisci rerum molestiae, pariatur hic excepturi aperiam
            mollitia dignissimos dolor vero harum, quod iure fuga iusto expedita
            aut necessitatibus eveniet ea, aspernatur delectus maiores error
            unde! Accusantium commodi aperiam facilis quisquam, magni fuga
            praesentium atque repudiandae hic fugiat, illum culpa iste. Optio
            architecto reprehenderit eligendi debitis assumenda impedit sunt ea
            aperiam consequuntur aut accusantium vero sit esse, voluptas
            consectetur dolorum! Incidunt ipsa deleniti architecto assumenda
            tempore sed perferendis. Beatae, expedita officia. Molestiae quos
            culpa saepe aut nostrum nulla, incidunt aspernatur, error maiores
            magnam in voluptatum, sit nihil inventore quo placeat nemo vel
            repellat. Ullam asperiores necessitatibus nam molestias aperiam
            cupiditate aspernatur possimus rem adipisci exercitationem ipsam,
            consequuntur earum magni laborum, incidunt voluptatem nobis
            quibusdam, odit vitae commodi omnis ex. Ullam iste ea numquam
            consequatur at ipsa, rem labore natus, explicabo qui, praesentium
            quas odit cum perferendis hic minima sapiente. Quaerat nobis rem
            maiores placeat, commodi iste voluptatibus delectus tenetur atque,
            consequatur perferendis repudiandae, expedita cum dolorum vero
            aspernatur minima minus reprehenderit quo repellendus provident
            distinctio eveniet assumenda! Unde cupiditate magni adipisci ratione
            ea enim aperiam expedita at laborum odit tempore temporibus,
            similique blanditiis dolorem nesciunt fugiat? Inventore eligendi,
            necessitatibus praesentium magnam non sit ullam cum eveniet itaque
            id omnis nam recusandae fugit,
          </p>
        </div>
      </div>
    </section>
  );
};
