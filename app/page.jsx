import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <main>
        <section className="relative flex flex-col justify-center items-center text-center h-screen hero">
          <h1 className="text-5xl font-bold text-[#1D2B3F]">Discover Your Investor Personality</h1>
          <p className="text-2xl mt-5 text-[#397c68]">Understand your financial behavior, risk tolerance, and investment style through a personalized assessment</p>
          <Link href="/assessment" className="button-hero mt-14 px-8 py-4 font-bold">Start Assessment</Link>

          <div className="elemen1-hero" aria-hidden="true">
            <Image
              src="/elemen1.png"
              alt=""
              width={650}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              priority
            />
          </div>

          <div className="elemen2-hero" aria-hidden="true">
            <Image
              src="/elemen5.png"
              alt=""
              width={150}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              className="image-1"
              priority
            />
          </div>

          <div className="elemen3-hero" aria-hidden="true">
            <Image
              src="/elemen5.png"
              alt=""
              width={150}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              className="image-1"
              priority
            />

          </div>
        </section>
      </main>

      <section className="features-section">

        <div className="features-header flex flex-col justify-center items-center text-center pt-60">
          <h2 className="font-bold">Why Choose FinPersona</h2>
          <p>Designed to help you understand your investment personality with confidence</p>
        </div>

        <div className="features-grid">

          <article className="feature-card">
            <div className="icon-box icon-color">
              <Image
                src="/e-invest.png"
                alt="Investor Personality Profiling"
                width={50}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
                className="image-2"
                priority
              />
            </div>
            <h3 className="feature-name">Investor Personality Profiling</h3>
            <p className="feature-description">
              Identify whether your investment style is conservative, balanced, or growth-oriented based on your financial behavior and risk tolerance
            </p>
          </article>

          <div className="feature-card">
            <div className="icon-box icon-color">
              <Image
                src="/e-porto.png"
                alt="Personalized Portfolio Suggestion"
                width={200}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
                priority
              />
            </div>
            <h3 className="feature-name">Personalized Portfolio Suggestion</h3>
            <p className="feature-description">
              Receive an educational portfolio allocation tailored to your goals, time horizon, and preferred risk level
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box icon-color">
              <Image
                src="/e-learn.png"
                alt="Smart Financial Learning Insight"
                width={80}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
                className="image-2"
                priority
              />
            </div>
            <h3 className="feature-name">Smart Financial Learning Insight</h3>
            <p className="feature-description">
              Get clear explanations and learning recommendations to help you understand why a certain investment style suits you
            </p>
          </div>

        </div>

        <div className="elemen1-features" aria-hidden="true">
          <Image
            src="/elemen7.png"
            alt=""
            width={250}
            height={0}
            sizes="100vw"
            style={{ height: 'auto' }}
            className="image-2"
            priority
          />
        </div>

        <div className="elemen2-features" aria-hidden="true">
          <Image
            src="/elemen7.png"
            alt=""
            width={250}
            height={0}
            sizes="100vw"
            style={{ height: 'auto' }}
            className="image-2"
            priority
          />
        </div>
      </section>

      <section className="three-section">
        <div className="judul-section flex flex-col justify-center items-center text-center">
          <h2 className="font-bold">How It Works</h2>
          <p>Understand your investment personality in three simple steps</p>
        </div>
        <div className="main-card mt-8">
          <article className="elemen-card flex flex-col justify-center items-center text-center mx-4">
            <Image
              src="/e-assessment.png"
              alt="Complete Your Assessment"
              width={80}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              priority
            />
            <h3>Complete Your Assessment</h3>
            <p>Answer a few simple questions about your financial goals, risk tolerance, and investment time horizon</p>
          </article>
          <article className="elemen-card flex flex-col justify-center items-center text-center mx-4">
            <Image
              src="/e-profil.png"
              alt="Analyze Your Investor Profile"
              width={80}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              priority
            />
            <h3>Analyze Your Investor Profile</h3>
            <p>Your responses are analyzed to identify your investor personality and preferred investment style</p>
          </article>
          <article className="elemen-card flex flex-col justify-center items-center text-center mx-4">
            <Image
              src="/e-insight.png"
              alt="Get Personalized Insights"
              width={80}
              height={0}
              sizes="100vw"
              style={{ height: 'auto' }}
              priority
            />
            <h3>Get Personalized Insights</h3>
            <p>Receive a personalized investment profile, portfolio suggestions, and tailored financial learning recommendations</p>
          </article>
        </div>

        <div className="elemen1-section" aria-hidden="true">
          <Image
            src="/elemen2.png"
            alt=""
            width={200}
            height={0}
            sizes="100vw"
            style={{ height: 'auto' }}
            className="image-3"
            priority
          />
        </div>

        <div className="elemen2-section" aria-hidden="true">
          <Image
            src="/elemen3.png"
            alt=""
            width={200}
            height={0}
            sizes="100vw"
            style={{ height: 'auto' }}
            className="image-3"
            aria-hidden="true"
            priority
          />
        </div>
      </section>

      <section className="cta-container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to Discover Your Investment Style?</h2>
            <p>Take a quick personalized assessment and understand your investor personality, risk tolerance, and learning path</p>
          </div>
          <div className="cta-action">
            <Link href="/assessment" className="btn-cta">Start Now</Link>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <p>&copy; 2026 FinPersona. All rights reserved.</p>
      </footer>
    </div >
  );
}
