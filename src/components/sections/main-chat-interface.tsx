import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainChatInterface = () => {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-6 shadow-sm md:p-10">
      <div className="mb-6 rounded-md border border-border bg-muted p-3 text-center text-sm text-text-secondary">
        You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
      </div>

      <h2 className="mb-4 text-center text-2xl font-bold text-text-primary">
        Meet strangers with your interests!
      </h2>

      <p className="mb-4 text-sm leading-relaxed text-text-secondary md:text-base">
        Omegle (oh`meg`ull) is a great way to meet new friends. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you'll be randomly paired with someone who selected some of the same interests. To help you stay safe, chats are anonymous unless you tell someone who you are (not recommended!), and you can stop a chat at any time. See our{' '}
        <a href="https://www.omegle.fun/teams.html" className="text-link hover:underline">
          Terms of Service
        </a> and{' '}
        <a href="https://www.omegle.fun/community.html" className="text-link hover:underline">
          Community Guidelines
        </a> for more info about the do's and don'ts in using Omegle. Omegle video chat is moderated but no moderation is perfect. Users are solely responsible for their behavior while using Omegle.
      </p>

      <div className="mb-4 text-sm leading-relaxed text-text-secondary">
        <span className="font-bold text-text-primary">YOU MUST BE 18 OR OLDER TO USE OMEGLE.</span>
        <span> See Omegle's <a href="https://www.omegle.fun/teams.html" className="text-link hover:underline">Terms of Service</a> for more info. Parental control protections that may assist parents are commercially available and you can find more info at <a href="https://www.connectsafely.org/controls/" className="text-link hover:underline">https://www.connectsafely.org/controls/</a> as well as other sites.</span>
      </div>

      <div className="mb-4 flex items-center rounded-md bg-muted p-2 text-sm text-text-secondary">
        <span>Video is monitored. Keep it clean</span>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLBAMAAADKYGfZAAAALVBMVEVHcEzvhTLwhTL2iTnxhTLyhjTwhTPvhDL99M3ynVT4zpj747X1r2z2vIDwjkEHPEuxAAAAB3RSTlMA86kbbE7Z7HWWKQAAAStJREFUSMfd1j1uwkAUBOCnmAMguXCLlILWHa2VFGmhSkto0gbL0joQaCHhpw03wDcIN4AbxDeIj5Egv0js7mAWx7ZEXjn6tMUWoyEism4exLHr924pPaspMu86ZZ1sJfrtvapJ2fT3DrJgz+4ltmE1Owx/nrOc08wmuhKnmU/UklnE7E1KXbozYR41TViDHmUWM1tIaZccE1Yn5ct3zOZS+pSTrZi9VskSZstsFjKbFMKGzD6qZANm6yrZiNlnIeyF2bYQ9szsvUo2ZvaVzYTeW39hG72QymcRKKTSWQx6Kz/bgd7Kz1agkEpnCag3wELQW4DB+5fM8EMukDkmrK4uB8y66g7BrKGuGsw8dSNh5qqLCzJf22+Q2doahKytbUvEgjOWqunuNVnR33xMLyLMk5D/AAAAAElFTkSuQmCC"
          alt="tip"
          width={22}
          height={22}
          className="ml-2"
        />
      </div>
      
      <p className="mb-6 text-sm text-text-secondary">
        Leave Omegle and visit an adult site instead if that's what you're looking for, and you are 18 or older.
      </p>

      <div>
        <h3 className="mb-2 text-xl font-semibold text-text-primary">
          Start chatting:
        </h3>
        <Link href="/video">
          <button className="w-full rounded-md bg-primary px-12 py-3 text-lg font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105 md:w-auto">
            Video
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainChatInterface;