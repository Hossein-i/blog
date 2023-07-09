import Image from "next/image";

const HeroHeaderContainer = () => {
  return (
    <section className="bg-white mb-20">
      <div className="grid md:grid-cols-2 md:grid-flow-dense md:items-end md:justify-items-center max-w-screen-2xl mx-auto">
        <div className="p-4 pt-12 md:p-10">
          <p className="text-xl">سلام خوش اومدی، </p>
          <h1 className="text-6xl font-bold mb-6">
            من حسین هستم
          </h1>
          <p className="text-xl mb-4">توسعه دهنده وب</p>
          <p className="text-gray-500 mb-8">
            در این وبلاگ نکات و ترفندها، فریمورک ها، پروژه ها، آموزش ها و غیره
            را به اشتراک می گذارم.
          </p>
          <button className="w-1/2 py-4 bg-black text-white font-semibold rounded-2xl">
            دریافت رزومه
          </button>
        </div>
        <Image
          className=""
          src="/images/avatar.png"
          alt="Hossein Hosseini"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroHeaderContainer;
