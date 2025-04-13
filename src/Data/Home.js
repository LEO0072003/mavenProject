import swipbg from "../assets/swipebg.png";
import bannerimg from "../assets/bannerimg.png";
import img from "../assets/Img.png";
// import frame from "../assets/frame1.png";
import frame1 from "../assets/frame1.png";
// import frame2 from "../assets/frame3.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import location from "../assets/location.png";
import scubadiving from "../assets/Scuba Diving.jpg"
import kayak from "../assets/Kayaking.jpg"
import Snorkelling  from "../assets/Snorkelling.jpg"
import  radhanagar  from "../assets/Radhanagar Beach.png"
import   kalpadhar from "../assets/Kalapathar Beach.png"






// =========== Home.jsx file data ===========
export const HEADER_DATA = {
  heading: "Explore Andaman Tourism Packages with Maven Andaman",
  para: "Get the best of the Andaman Islands with Maven Andaman. Maven Andaman offers you a priority client support and service, which makes sure that you have the best experience of the Andaman Islands.",
  buttonText: "Book With Us",
};

// ============= Homesec2.jsx file data ============

export const PACKAGE_DATA = {
  tag: "Can't afford to overpay? Travel smart with transparent pricing",
  heading: "Discover the Best Andaman Tour Offers Today!",

  sliderDetails: [
    {
      img: swipbg,
      title: "See the best of Neil Islands",
      daysNight: "6 Nights, 7 Days",
    },
    {
      img: swipbg,
      title: "See the best of Chidiya Tapu",
      daysNight: "6 Nights, 7 days",
    },
    {
      img: swipbg,
      title: "See the best of Ross Island",
      daysNight: "5 Nights, 6 days",
    },
  ],
};

// ============= Homesec3.jsx file data ============

export const BANNER_DETAIL = {
  bannerImg: img,
  exclusiveOfferText: "Exclusive offer",
  offerText: "Book your Andaman Islands Tour today with Maven Andaman",
  // for small screen image
  specialOfferImg: bannerimg,
};

// ============Homesec4.jsx file data ==============

export const TOP_DESTINATIONS = {
  image1: frame1,
  title1: "Cellular Jail",

  image2: frame4,
  title2: "Corbyn's Cove Beach",

  image3: radhanagar ,
  title3: "Radhanagar Beach",

  image4: kalpadhar,
  title4: "Kalapathar Beach",

  image5: frame3,
  title5: "Neil Island",
};

export const TOP_DESTINATIONS2 = [
  // { image: frame, title: "Cellular Jail" },

  { image: frame4, title: "Corbyn's Cove Beach" },
  { image: frame3, title: "Radhanagar Beach" },

  // { image: frame2, title: "Kalapathar Beach" },

  { image: frame1, title: "Ross Island" },
];

// ============= Homesec5.jsx file data ===============



// ============== waterActivity.jsx file data ============

export const WATER_ACTIVITY = {
  heading: "Exciting Things to Do!!!",
  sliderData: [

    {
      img: kayak,
      name: "Kayak Ride",
      destiny: "Havelock Island, Andaman",
    },
    {
      img: scubadiving,
      name: "Scuba Diving",
      destiny: "Barracuda City, Andaman",
    },
    {
      img: Snorkelling,
      name: "Snorkelling",
      destiny: "Elephanta Beach, Andaman",
    },
  ],
};

// ==================== Testimonial.jsx file data ===========

export const TESTIMONIAL = {
  tag: "What Our Clients Say About Maven Andaman",
  heading: "Client Testimonials",
  reviews: [
    {
      review:
        "Amazing experience with Maven Andaman🤩 The owner is very helpful and provides a budget friendly itinerary too",
      name: "Kushagra Srivastava",
    },
    {
      review:
        "Visited Andaman with the Mave Andaman tour package and the experience was seamless. From tickets to cabs everything was managed very well. Would recommend it to everyone. ",
      name: "Harshita Joshi",
    },
    {
      review:
        "The most professional travel agent in Port Blair. The packages are very much affordable and the arrangements are superb. Highly recommended ",
      name: "Vishnu Prasad",
    },
  ],
};

// ==================== frequentquestion.jsx file data =========

export const FREQUENT_QUESTIONS = [
  {
    ques: "What is the best time to visit the Andaman Islands?",
    ans: "One always wishes to visit Andaman during the most pleasant months to enjoy each bit of it. The best time to visit the Andaman Islands is during the months of November to April. During this time, the weather is pleasant and favours all water-activities.",
  },
  {
    ques: "Can I customise my Andaman Tour Package?",
    ans: "With Maven Adventures, you need not worry about paying extra. You can get a customised Andaman Tour Package as well. Just make sure to contact us (add link to contact page) and let us know what customisation would you like in your Andaman Tour Package",
  },
  {
    ques: "How is the mobile network and connectivity in the Andaman Islands?",
    ans: "Mobile network and connectivity in the Andaman Islands can be spotty and inconsistent. In Port Blair, the capital, and some  popular tourist spots like Havelock Island, you'll generally find decent coverage, especially with major Indian telecom providers like BSNL, Airtel, and Jio. However, as you move to more remote areas or smaller islands, the signal can weaken, and internet speeds may drop significantly. It's a good idea to plan for limited connectivity, especially if you're heading to less populated places.",
  },
  {
    ques: "How do I book my Andaman Tour Package?",
    ans: "Here at Maven Adventures, we have made the booking procedure quite simple. All you need to do is select a tour package that suits your budget and your needs and click on the book now button. Our in-house team will be there for you and guide you through any issues while booking.",
  },
  {
    ques: "What are the must-visit locations in the Andaman Islands?",
    ans: "The must-visit locations if you are travelling to the Andaman Islands include Cellular Jail, Radhanagar Beach, Ross Island, Neil Island, and Havelock Island. If you are travelling to the Andaman Islands, make sure to visit these places to have the best experience of the place.",
  },
];
