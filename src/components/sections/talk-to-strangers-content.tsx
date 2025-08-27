"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TalkToStrangersContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-5">
        <article className="bg-card rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-text-primary mb-6">
            Omegle: Talk to Strangers!
          </h2>

          <div className="text-base text-text-secondary leading-relaxed space-y-4">
            <p>
              Concluding a remarkable 14-year journey marked by the compelling
              motto &apos;
              <a
                href="https://www.omegle.fun/talk-to-strangers.html"
                className="text-link hover:underline"
              >
                Talk to strangers!
              </a>
              &apos;, the widely embraced video chat platform, Omegle, gracefully
              ends its chapter, as formally announced by its visionary founder,
              Leif K-Brooks.
            </p>
            <p>
              As Omegle bows out, a new era inspired by its essence confidently
              takes center stage. This evolution isn&apos;t just a successor;
              it&apos;s a deliberate progression. Addressing past oversights,
              this new approach places a paramount focus on fortified content
              moderation, ensuring a secure haven for spontaneous video chat
              adventures. Brace yourself for an upgraded experience that not
              only matches but surpasses its predecessor, offering
              lightning-fast connections and unrivaled security.
            </p>
          </div>

          <div
            className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="pt-4 text-base text-text-secondary leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                Meet Strangers Now
              </h3>
              <p>
                Welcome to Omegle, the latest addition to the world of video
                chat! While Omegle.com, formerly known as Omegle TV, bids
                farewell, Omegle.fun steps in as the perfect alternative.
                Embracing the best features of its predecessor, it enhances them
                to offer users an even better random video chat experience. Just
                like before, meeting and chatting with random strangers online
                is effortless on Omegle. Our advanced AI technology allows users
                from around the globe to easily connect via webcam for fun and
                engaging text and video chats, just like on Omegle. Logging in
                is a breeze—simply click the &quot;Video&quot; button to get
                started and begin your journey into a world of connections and
                new friends.
              </p>
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                How It Works
              </h3>
              <p>
                At this platform, our chat system gathers only the necessary
                information from users to find the perfect match for them. Using
                cutting-edge AI technology, we analyze user inputs and
                preferences to match them with compatible chat partners from our
                extensive database.
              </p>
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                Key Features
              </h3>
              <p>
                Our platform inherits the legacy of being the year&apos;s most
                visited online{" "}
                <a
                  href="https://www.omegle.fun/random-video-chat.html"
                  className="text-link hover:underline"
                >
                  random video chat
                </a>{" "}
                website, offering an array of remarkable features:
              </p>
              <ul className="list-disc list-inside space-y-2 !my-4">
                <li>Engage in live 1v1 Chat Rooms with strangers.</li>
                <li>
                  Utilize invaluable filters to tailor your random connections
                  via video chat.
                </li>
                <li>
                  Easily find the best match connection with our advanced
                  matchmaking algorithm.
                </li>
                <li>
                  Seamlessly change or leave chat connections at any time with a
                  single click.
                </li>
                <li>
                  Enjoy compatibility across all devices - no app download
                  required!
                </li>
                <li>
                  Access premium features for freemium{" "}
                  <a
                    href="https://www.omegle.fun/random-video-call.html"
                    className="text-link hover:underline"
                  >
                    random video call
                  </a>{" "}
                  with strangers.
                </li>
                <li>
                  Embrace our platform as the ultimate{" "}
                  <a
                    href="https://www.omegle.fun/chatroulette.html"
                    className="text-link hover:underline"
                  >
                    Chatroulette
                  </a>
                  ,{" "}
                  <a
                    href="https://www.omegle.fun/ometv.html"
                    className="text-link hover:underline"
                  >
                    OmeTV
                  </a>
                  ,{" "}
                  <a
                    href="https://www.omegle.fun/joingy.html"
                    className="text-link hover:underline"
                  >
                    Joingy
                  </a>{" "}
                  replacement platform.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                Safety First
              </h3>
              <p>
                Rest assured, your safety and security are our top priorities
                here at our platform. Unlike its predecessor, Omegle, which
                initially did not prioritize user safety, our platform was
                created with a strong emphasis on ensuring a secure environment
                from the outset. We understand the importance of user safety and
                have implemented stringent measures to safeguard your
                experience.
              </p>
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                Why Go Premium?
              </h3>
              <p>
                While a premium subscription is not mandatory to enjoy our
                platform, it unlocks additional features that enhance your video
                chatting experience. Try it out at least once to discover the
                added benefits and share your premium experience with friends.
              </p>
              <h3 className="text-xl font-semibold text-text-primary !mt-6">
                Chat Alternatives
              </h3>
              <p>
                If you&apos;re exploring other options in random video chat,
                several notable alternatives are worth checking out. Platforms
                like Chatroulette,{" "}
                <a
                  href="https://www.monkey.app/"
                  className="text-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Monkey
                </a>
                , OmeTV and more offer diverse features and experiences for a
                fresh video chatting experience.
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex flex-col items-center justify-center w-full group focus:outline-none"
              aria-expanded={isExpanded}
            >
              {!isExpanded && (
                <span className="text-gray-400 tracking-[0.2em]">-- --</span>
              )}
              <ChevronDown
                className={`h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TalkToStrangersContent;