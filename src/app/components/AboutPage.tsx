import { Link } from "react-router";

const PHOTOGRAPHER_IMG =
  "https://images.unsplash.com/photo-1641351895162-80a6d4dba682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b21hbiUyMHBvcnRyYWl0JTIwQXNpYW58ZW58MXx8fHwxNzc0MzUwOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="px-6 md:px-12 pt-12 pb-10 text-center">
        <p className="text-[9px] tracking-[0.3em] text-neutral-300 mb-3">ABOUT</p>
        <div className="h-px w-8 bg-neutral-200 mx-auto" />
      </div>

      {/* Content */}
      <div className="max-w-screen-md mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={PHOTOGRAPHER_IMG}
              alt="Karlly Feng, Photographer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio text */}
          <div className="md:pt-4">
            <h2
              className="tracking-[0.2em] text-neutral-800 mb-6"
              style={{ fontFamily: "'Georgia', serif", fontSize: "16px", fontWeight: 400 }}
            >
              KARLLY FENG
            </h2>

            <div className="space-y-5 text-neutral-500 text-[13px] leading-relaxed">
              <p>
                Karlly Feng is a photographer and visual storyteller based in the San Francisco Bay
                Area. Her work spans editorial, portrait, and documentary photography, with a
                particular focus on capturing the quiet moments that reveal the depth of the human
                experience.
              </p>
              <p>
                Drawing from her background in fine arts, Karlly approaches every shoot with a
                painterly eye — composing images that feel both timeless and immediate. Her work has
                appeared in various editorial publications and personal projects across the West
                Coast.
              </p>
              <p>
                She is currently available for editorial assignments, portrait sessions, and
                collaborative creative projects.
              </p>
            </div>

            {/* Separator */}
            <div className="h-px w-8 bg-neutral-200 my-8" />

            {/* Details */}
            <div className="space-y-3">
              <div className="flex gap-6">
                <span className="text-[9px] tracking-[0.2em] text-neutral-300 w-20 shrink-0">BASED IN</span>
                <span className="text-[11px] text-neutral-600 tracking-wide">San Francisco, CA</span>
              </div>
              <div className="flex gap-6">
                <span className="text-[9px] tracking-[0.2em] text-neutral-300 w-20 shrink-0">AVAILABLE</span>
                <span className="text-[11px] text-neutral-600 tracking-wide">Worldwide</span>
              </div>
              <div className="flex gap-6">
                <span className="text-[9px] tracking-[0.2em] text-neutral-300 w-20 shrink-0">WORK</span>
                <span className="text-[11px] text-neutral-600 tracking-wide">Editorial · Portrait · Documentary</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block text-[10px] tracking-[0.25em] text-neutral-900 border border-neutral-900 px-8 py-3 hover:bg-neutral-900 hover:text-white transition-all duration-300"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
