"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var react_fast_marquee_1 = require("react-fast-marquee");
var container_1 = require("@/components/container");
var button_1 = require("@/components/ui/button");
var marquee_img_1 = require("@/components/marquee-img");
var react_router_dom_1 = require("react-router-dom");
var HomePage = function () {
    return (<div className="flex-col w-full pb-24">
      <container_1.Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="w-full aspect-[16/9] mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img src="/assets/img/hero_new.jpg" alt="" className="w-full h-full object-cover"/>

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>

            <button_1.Button className="mt-3">
              Generate <lucide_react_1.Sparkles />
            </button_1.Button>
          </div>
        </div>
      </container_1.Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <react_fast_marquee_1.default pauseOnHover>
          <marquee_img_1.MarqueImg img="/assets/img/logo/firebase.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/meet.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/zoom.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/firebase.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/microsoft.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/meet.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/tailwindcss.png"/>
          <marquee_img_1.MarqueImg img="/assets/img/logo/microsoft.png"/>
        </react_fast_marquee_1.default>
      </div>

      <container_1.Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img src="/assets/img/office.jpg" alt="" className="w-full max-h-96 rounded-md object-cover"/>
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <react_router_dom_1.Link to={"/generate"} className="w-full">
              <button_1.Button className="w-3/4">
                Generate <lucide_react_1.Sparkles className="ml-2"/>
              </button_1.Button>
            </react_router_dom_1.Link>
          </div>
        </div>
      </container_1.Container>
    </div>);
};
exports.default = HomePage;
