import SocialMediaIcon from "../components/SocialMediaIcon";
import Button from "../components/Button";
import ImageCarousel from "../components/ImageCarousel";
import FloatIn from "../animations/FloatIn";
import AnimatedLetters from "../animations/AnimatedLetters";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full px-14 overflow-hidden bg-blackS select-none bg-black text-white">
      {/* Background w/ Fading Transition */}
      <ImageCarousel />
      {/* Content*/}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <FloatIn
          stagger={0.3}
          delay={5}
          className="gap-5 mx-auto w-full max-w-7xl flex flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-24 lg:py-20"
        >
          {/* Title */}
          <div className="flex flex-1 flex-col items-center sm:items-start justify-center text-center sm:text-left gap-5 -mb-2">
            <FloatIn>
              <h1 className="uppercase font-extrabold text-7xl sm:text-7xl md:text-8xl lg:text-9xl ease-in-out leading-tight -mb-5">
                <span className="block sm:inline sm:ml-4 -mb-5">
                  <AnimatedLetters
                    text="Andrew"
                    hoverY={-6}
                    className="ease-in-out"
                  />
                </span>
                <span className="block sm:inline sm:ml-4 ">
                  <AnimatedLetters
                    text="Jiang"
                    hoverY={-6}
                    className="ease-in-out "
                  />
                </span>
              </h1>
            </FloatIn>
          </div>

          <div className="hidden sm:block h-px border-b opacity-30"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 ">
            <SocialMediaIcon className="opacity-70 hover:opacity-100" />
            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 order-1 sm:order-2 font-bold text-xs tracking-widest uppercase">
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  text="portfolio"
                  to="/latestworks"
                  variant="secondary"
                  className="w-full sm:w-auto"
                />
                <Button
                  text="contact"
                  to="/contact"
                  variant="secondary"
                  className="w-full sm:w-auto "
                />
              </div>
            </div>
          </div>
        </FloatIn>
      </div>
    </div>
  );
}
