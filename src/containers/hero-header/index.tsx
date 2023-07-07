import Image from "next/image";

const HeroHeaderContainer = () => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="grid md:grid-cols-2 md:grid-flow-dense md:items-end md:justify-items-center max-w-screen-2xl mx-auto">
        <div className="p-4 md:p-10">
          <p className="text-xl">سلام خوش اومدی، </p>
          <h1 className="text-6xl font-bold text-blue-600 mb-6">
            من حسین هستم
          </h1>
          <p className="text-xl mb-4">توسعه دهنده وب</p>
          <p className="text-gray-400 mb-8">
            در این وبلاگ نکات و ترفندها، فریمورک ها، پروژه ها، آموزش ها و غیره
            را به اشتراک می گذارم.
          </p>
          <button className="w-1/2 py-4 bg-blue-600 font-semibold rounded-2xl">
            دریافت رزومه
          </button>
        </div>
        <Image
          className=""
          src="/avatar.png"
          alt="Hossein Hosseini"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroHeaderContainer;
