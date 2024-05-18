import Image from "next/image";

const ApproachSection = () => {
  return (
    <section className="bg-[#0B101D] w-full overflow-hidden relative isolate xl:px-0 px-5">
      <div className="fluid-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[1.875rem]">
        <div className="cardBg p-[1.875rem] rounded-2xl hidden md:flex flex-col gap-4 lg:justify-between md:justify-center md:items-start items-center lg:col-span-1">
          <Image alt="" src="/dfm-image.svg" width="350" height="280" />
        </div>
        <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex flex-col lg:justify-between md:justify-center lg:col-span-2">
          <div>
            <p className="tag">Our Approach</p>
            <h4 className="md:text-h4 text-[1.5rem]">Managing Directors</h4>
          </div>
          <p className=" opacity-50">
            At iSAM Securities we strive to deliver an institutional grade of
            products and services for our clients, with unparalleled pricing,
            advanced trading solutions and risk management expertise. We employ
            talented people across the business to ensure that we are
            continuously innovating and evolving, by listening to our clients
            and forming long standing relationships.
          </p>
        </div>
        <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex flex-col lg:justify-between md:justify-center lg:col-span-2">
          <div>
            <p className="tag">Our Approach</p>
            <h4 className="md:text-h4 text-[1.5rem]">Client Services</h4>
          </div>
          <p className=" opacity-50">
            Our clients are of paramount importance and everything that we do is
            with them in mind. We have highly skilled and diverse teams that
            provide continuous technical and trading support. From the initial
            onboarding stage, through to going Live, we are on hand to help
            clients have the best possible trading experience.
          </p>
        </div>
        <div className="cardBg p-[1.875rem] rounded-2xl hidden md:flex flex-col gap-4 lg:justify-between md:justify-center md:items-start items-center lg:col-span-1">
          <Image alt="" src="/world-image.png" width="350" height="280" />
        </div>
        <div className="cardBg sm:p-[2.5rem] p-[1.25rem] rounded-2xl flex flex-col lg:justify-between md:justify-center col-span-full">
          <div>
            <p className="tag">Our Expertise</p>
            <h4 className="md:text-h2 text-h4">Liquidity Solutions</h4>
          </div>
          <p className=" opacity-50">
            We have invested heavily in our infrastructure and the design of our
            trading architecture to deliver an exceptional, low latency
            liquidity products to our clients. We have access to all the leading
            tier 1 liquidity providers in the industry, and we work closely with
            our clients to tailor highly customised liquidity solutions to
            optimise the client experience.
          </p>
        </div>
      </div>
      <Image
        src="/about-ellipse-img.png"
        alt=""
        width="500"
        height="500"
        className="absolute z-[-1] bottom-0 hidden sm:block lg:right-[-12%] md:right-[-18%] right-[-25%]  "
      />
    </section>
  );
};

export default ApproachSection;
