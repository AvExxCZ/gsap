// import Test from "./_modules/Test";

import GsapComponent from "./_concepts/GsapComponent";

export default function Page() {
  return (
    <>
      <div className="w-screen h-36 bg-green-300">SPACER</div>
      <section className="relative w-full h-fit p-5">

        <GsapComponent />

      </section>
      <div className="w-screen h-36 bg-blue-300">SPACER</div>
    </>
  );
}