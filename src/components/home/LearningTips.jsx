export default function LearningTips() {
  const tips = [
    {
      title: "Use Active Recall",
      description:
        "After every lesson, close your notes and explain the topic in your own words. This helps you remember ideas longer than only rereading.",
    },
    {
      title: "Practice With Small Projects",
      description:
        "Turn each new concept into a tiny project or exercise. Practical work helps you understand where and how to use what you learned.",
    },
    {
      title: "Follow Focus Sessions",
      description:
        "Study for 25-30 minutes, take a short break, then continue. Short focused sessions make learning easier and reduce burnout.",
    },
    {
      title: "Plan Weekly Reviews",
      description:
        "Choose one day each week to review completed lessons, fix weak areas, and organize what you need to study next.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Learning Tips
          </h2>

          <p className="text-base-content/60 mt-4 leading-relaxed">
            Build better learning habits with practical study techniques and
            simple time management strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-base-100 border border-base-300 rounded-2xl p-7 md:p-9 min-h-[200px] shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {tip.title}
              </h3>

              <p className="text-sm md:text-base text-base-content/60 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}