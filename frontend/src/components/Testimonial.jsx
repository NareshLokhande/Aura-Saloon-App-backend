import React from "react";
import TestimonialCard from "./TestimonialCard";
import Lady1 from "../assets/images/testi1.jpg";
import Lady2 from "../assets/images/testi2.jpg";
import Lady3 from "../assets/images/testi3.png";

export const Testimonial = () => {
  return (
    <>
      <h1>Testimonials</h1>
      <TestimonialCard
        image={Lady1}
        name="Sneha"
        text="“Aura salon did my makeup for my wedding day, and they did a phenomenal job. I absolutely loved their work! They made me look stunning, and the look was natural, just as I wanted. Their professionalism and kindness kept me calm on the morning of the wedding. Anyone who hires Aura is in good hands! 🌟”"
        updated="Last updated 3 mins ago"
      />
      <TestimonialCard
        image={Lady2}
        name="Jyoti"
        text="“Aura worked wonders on my hair! From the moment I stepped into the salon, I felt pampered. She listened attentively to my hair concerns and recommended the perfect treatment. The scalp massage during the hair spa was heavenly. My hair feels healthier, shinier, and more manageable. I'm thrilled with the results! Thank you, Aura, for making my bridal hair care experience exceptional.”"
        updated="Last updated 2 days ago"
      />
      <TestimonialCard
        image={Lady3}
        name="Anushka"
        text="“Aura worked wonders on my skin! The facial and cleanup session was pure bliss. She customized the treatment to address my specific concerns, leaving my skin refreshed and glowing. The soothing ambiance and her gentle touch made it a truly relaxing experience. I walked out feeling like a rejuvenated bride. Thank you, Aura, for making my pre-wedding skincare journey unforgettable!"
        updated="Last updated 1 month ago"
      />
    </>
  );
};
