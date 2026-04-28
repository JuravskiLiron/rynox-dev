export default function WhyMe() {
  return (
    <section className="py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">
למה כדאי לך לבחור בנו?      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">מהירות</h3>
          <p>אתרים מותאמים ויעילים עם ביצועים גבוהים.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">עיצוב</h3>
          <p>עיצוב מודרני ומעוצב עם סגנון פרימיום.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">תוצאה</h3>
          <p>פוקוס על מכירות וنمو של העסק של הלקוח.</p>
        </div>
      </div>
    </section>
  );
}