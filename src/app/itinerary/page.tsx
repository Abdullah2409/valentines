import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

const itinerary = [
  {
    time: "11:30 AM",
    datetime: "11:30",
    title: "Breakfast Date",
    description: "Sesame - we eat shakshuka and lots of other mazay ki cheezein",
  },
  {
    time: "01:00 PM",
    datetime: "13:00",
    title: "Coffee & Canvas",
    description: "Pluto - we do unki ghatiya si coffee and see who is more artsy :P",
  },
  {
    time: "03:00 PM",
    datetime: "15:00",
    title: "Filler Time",
    description: "We will plan spontaneously",
  },
  {
    time: "05:00 PM",
    datetime: "17:00",
    title: "DIY Bento Cake",
    description: "Retro Bar DHA PHASE 6 - I will win the bento decorating competition",
  },
  {
    time: "07:30 PM",
    datetime: "19:30",
    title: "Dinner",
    description: "Dan Dan - Excited for their ala carte??!!!",
  },
  {
    time: "10:00 PM",
    datetime: "22:00",
    title: "Movie",
    description: "Wuthering Heights - Margot Robbie so has to be good",
  },
  {
    time: "12:30 AM",
    datetime: "00:30",
    title: "Dessert",
    description: "Haute Dolci - itne sab ke baad San Sebastian cheesecake toh banta hai",
  },
  {
    time: "01:00 AM",
    datetime: "01:00",
    title: "Movie",
    description: "No Country for Old Men - aj raat nhi soyengaye",
  },
];

export default function ItineraryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 text-zinc-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-600 font-semibold">
            Saturday Plan
          </p>
          <h1 className={`text-4xl md:text-5xl mt-2 ${playfairDisplay.className}`}>
            Our Complete Day Itinerary
          </h1>
          <p className="mt-3 text-zinc-600 text-base md:text-lg">
            A full timeline of everything I want us to do together.
          </p>
        </header>

        <section className="space-y-4" aria-label="Day itinerary by time">
          {itinerary.map((item) => (
            <article
              key={`${item.datetime}-${item.title}`}
              className="bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl p-4 md:p-5 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5">
                <time
                  dateTime={item.datetime}
                  className="font-semibold text-rose-700 min-w-28"
                >
                  {item.time}
                </time>
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-zinc-700 mt-1">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
