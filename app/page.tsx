const beats = [
  {
    id: 1,
    title: "लोहे की चेन में कैद चीता",
    text: "दो गुंडे ट्रक में एक पंख वाले चीते को लोहे की भारी चेन से बांध कर ले जा रहे हैं। चीते की आंखों में डर और बेबसी है, लेकिन उसके सुनहरे पंख सूरज की रोशनी में चमक रहे हैं।",
    gradient: "linear-gradient(135deg, #e3ffe7 0%, #d9e7ff 100%)",
  },
  {
    id: 2,
    title: "बाइक पर बिल्ला का सामना",
    text: "पीछे से तेजी से आती बाइक पर बिल्ला पूरी घटना देख लेता है। वह ट्रक के सामने अपनी बाइक लाकर रास्ता बंद है का बोर्ड दिखाता है, लेकिन गुंडे उसे नजरअंदाज कर आगे बढ़ जाते हैं।",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    id: 3,
    title: "पेड़ से बना अवरोध",
    text: "बिल्ला हिम्मत करके ट्रक से थोड़ा आगे निकलता है और एक विशाल पेड़ को उखाड़ कर सड़क पर फेंक देता है। ट्रक पेड़ से टकराकर फिसल जाता है और पलट जाता है।",
    gradient: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  },
  {
    id: 4,
    title: "चीते की आज़ादी",
    text: "उल्टे पड़े ट्रक से बिल्ला चीते को जल्दी से बाहर निकालता है और उसकी चेन काट देता है। चीता मुक्त होकर पहली बार अपने विशाल पंख फैलाता है।",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    id: 5,
    title: "खतरनाक गोलीबारी",
    text: "गुंडे बंदूक निकल कर बिल्ला और चीते पर गोलियां चलाते हैं। बिल्ला चीते की पीठ पर चढ़ जाता है ताकि उसे ढाल दे सके, लेकिन एक गोली उसे लग जाती है और वह नीचे गिर पड़ता है।",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
  },
  {
    id: 6,
    title: "सर्कस की बंदिशें",
    text: "गुंडे चीते को फिर से पकड़ लेते हैं और उसे एक घिसे-पिटे सर्कस में काम करने पर मजबूर करते हैं। चमकदार रोशनी के पीछे उदासी और थकान छिपी है।",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    id: 7,
    title: "बिल्ले का छोटा बेटा",
    text: "बिल्ले का बच्चा चुपके से सर्कस में पहुंचता है। वह कोकाकोला की बोतल में बेहोशी की दवा मिलाकर गुंडे को पिलाता है और गुंडा वहीं बेहोश हो जाता है।",
    gradient: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
  },
  {
    id: 8,
    title: "तालों की चाभी",
    text: "छोटा बिल्ला बंद तालों को तोड़ देता है और पंख वाले चीते को फिर आज़ाद कर देता है। अपनी छोटी पंजों में उसने बड़ा साहस दिखाया।",
    gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  },
  {
    id: 9,
    title: "आंसू से जागृति",
    text: "चीते को आज़ाद करने के बाद छोटा बिल्ला अपने पिता के पास दौड़ता है। बिल्ले के ऊपर उसका एक आँसू गिरते ही घायल बिल्ला फिर से जिंदा हो उठता है। हर ओर खुशी फैल जाती है।",
    gradient: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
  },
];

export default function Page() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>निडर बिल्ला और पंख वाला चीता</h1>
          <p>
            यह कथा साहस, दोस्ती और परिवार के अटूट विश्वास की है। एक बहादुर
            बिल्ला असंभव सी प्रतीत होने वाली बाधाओं को पार करके चीते की रक्षा
            करता है, और अंत में प्रेम तथा आशा की जीत होती है।
          </p>
        </section>

        <ol className="timeline">
          {beats.map((beat) => (
            <li key={beat.id} className="timeline-item">
              <div className="timeline-bubble">{beat.id}</div>
              <div
                className="timeline-image"
                style={{
                  background: beat.gradient,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    display: "grid",
                    placeItems: "center",
                    color: "#2c1f17",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    letterSpacing: "0.04em",
                    textShadow: "0 10px 22px rgba(0,0,0,0.2)",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  {beat.title}
                </div>
              </div>
              <article className="timeline-card">
                <h3 className="timeline-title">{beat.title}</h3>
                <p className="timeline-text">{beat.text}</p>
              </article>
            </li>
          ))}
        </ol>

        <section className="ending">
          <h2>जंगल में फिर से खुशी</h2>
          <p>
            चीता अंततः आज़ाद होकर अपने जंगल के घर वापस लौट जाता है। बिल्ला,
            उसका परिवार और जंगल के सभी मित्र मिलकर नई शुरुआत का जश्न मनाते हैं।
            यह कहानी हमें याद दिलाती है कि दया और साहस से कोई भी अंधेरा हटाया जा
            सकता है।
          </p>
        </section>
      </div>
    </main>
  );
}
