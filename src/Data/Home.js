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

// top packages images
import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import a4 from "../assets/a4.jpg"
import a5 from "../assets/a5.jpg"
import a6 from "../assets/a6.jpg"


export const discount = 0.9;
export const GSTCharge = 0.05; // 5 %
export const serviceCharge = 0.25  // 25 %



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

export const TOP_PACKAGES = [

    {
      id:1 ,
      img: a1,
      heading:"Trip duration: 7 Nights & 8 Days (Private passenger cruise seats)" ,
      dayNight: "7 Nights & 8 Days",
      days: "8",
      night: "7",
      dayIn: [
        {
          day: "4",
          desti: "Port Blair",
        },
        {
          day: "1",
          desti: "Baratang",
        },
        {
          day: "2",
          desti: "Swaraaj Dweep",
        },
        {
          day: "1",
          desti: "Shaheed Dweep",
        },
      ],
         
      included: [
        {
          img: location,
          title: "Transfer Included",
        },
        {
          img: location,
          title: "Stay Included",
        },
      ],

      title: "Trip duration: 7 Nights & 8 Days",
       subtitle:"8 Adults + 2 children of 9 & 2 years" ,

      itinerary: [
        {
          daynum: "1",
          title: " First day in Port Blair: First day in Shri Vijaya Puram (Port Blair)",
          para: "Be received at the Airport, our private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India, were prisoned here.This place for its jail was also known as Kala Paani. Death water. One who comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Shri Vijaya Puram (Port Blair). Indulge in somewater sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
          from: "Port Blair Airport ",
          to: "hotel",

          transport: [
            {
              trans: "A/c cab pickup from airport and drop to hotel and trip around Port Blair",
              price: "₹3,300",
              price_to_cal: 3300 , 
            },
            {
              trans: "Cellular jail entry tickets per head",
              price: "30 x 9 = ₹270",
              price_to_cal: 270 , 

            },
            {
              trans: "Cellular Jail Light and Sound show ticket per head",
              price: "300 x 9 = ₹2,700",
              price_to_cal: 2700
            },
          ], 
                  

        },
        {
          daynum: "2",
          title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
          para: "Early morning rise and either collecting packed breakfast or having it at the hotel according to time availability, the cab will pick accordingly and drop you at the sea port for the cruise. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock). A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to kalapathar beach. It’s one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island. Pristine blue water welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach. Radhanagar beach is the 4thbest beach in the world, rated by Trip Advisor. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
          from: "hotel in Port Blair",
          to: " Baratang Island ",
          transport: [
            {
              trans: "A/c cab pickup from hotel to Port Blair jetty",
              price: "₹500",
              price_to_cal: 500 , 
            },
            {
              trans: "Private passenger cruise ticket to Havelock Island from Port Blair",
              price: "1,435 x 10 = ₹14,350",
              price_to_cal: 14350 ,
            },
            {
              trans: "A/c cab pickup from Havelock Island jetty and drop to hotel",
              price: "₹650",
              price_to_cal: 650,
            },
            {
              trans: "A/c cab trip to Kalapathar and Radhanagar beach",
              price: "₹3,500",
              price_to_cal: 3500 ,
            },
          ],
          
        },
        {
          daynum: "3",
          title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
          para: "Early morning rise by 5am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to board the speed boat that will take you to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures. Return to Havelock Jetty by lunch time. Head back to the hotel and retire for the day.",
          from: "Port Blair jetty ",
          to: " Swaraaj Dweep ",
          transport: [
            {
              trans: "A/c cab pickup from Hotel to Havelock Jetty",
              price: "₹650",
              price_to_cal: 650 ,
            },
            {
              trans: "Speed boat tickets on sharing basis",
              price: "1,000 x 10 = ₹10,000",
              price_to_cal: 10000 ,
            },
            {
              trans: "A/c cab pickup from Havelock jetty to Hotel",
              price: "₹650",
              price_to_cal: 650 ,
            },
          ],
          
        },
        {
          daynum: "4",
          title: "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
          para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day",
          from: "Scuba Diving Day",
          to: "Elephant Beach ",
          transport: [
            {
              trans: "A/c cab pickup from the hotel and drop to Havelock jetty",
              price: "₹650",
              price_to_cal: 650 ,
            },
            {
              trans: "Private passenger cruise ticket to Neil Island from Havelock",
              price: "1,315 x 10 = ₹13,150",
              price_to_cal: 13150 ,
            },
            {
              trans: "A/c cab pickup and tour in Neil Island",
              price: "₹3,500",
              price_to_cal: 3500 ,
            },
          ],
          
        },
        {
          daynum: "5",
          title:"Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point:",
          para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Shri Vijaya Puram (Port Blair).Leave Neil at 11:30 am cruise and reach Shri Vijaya Puram (Port Blair) at 12:40 pm. Be received at the jetty in Shri Vijaya Puram (Port Blair) and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Shri Vijaya Puram (Port Blair). Return to Shri Vijaya Puram (Port Blair) city to have dinner at Love Garden, in the evening and post dinner be dropped to the resort.",
          from: "Shaheed Dweep",
          to: "Swaraaj Dweep ",
          transport: [
            {
              trans: "A/c cab to view sunrise at Neil Island and drop to jetty",
              price: "₹1,000",
              price_to_cal: 1000 ,
            },
            {
              trans: "Private passenger cruise tickets to Port Blair from Neil Island",
              price: "1,355 x 10 = ₹13,550",
              price_to_cal: 13550 ,
            },
            {
              trans: "A/c cab pickup and drop to the hotel at Port Blair",
              price: "₹550",
              price_to_cal: 550 ,
            },
            {
              trans: "A/c cab pickup from resort, visit Chidiyataapu and return to the hotel",
              price: "₹2,500",
              price_to_cal: 2500 ,
            },
          ],
          
        },
        {
          daynum: "6",
          title:
            "Trip to Baratang Island / Lime Stone Caves / Mud Volcano / Baludera Beach / Parrot Island: (Viaroad / speed boat)",
          para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Spend time until evening and return to the hotel after witnessing a wonderful sunset. End of dayEarly morning rise by 6:00 am. Leave the hotel at 6:00am and head to Baratang. Will reach the entry gates of the convoy at 8:00 am. Convoys are used to cross the restricted tribal area with police security. An hour through the tribal area, reach Middle Straight. Cross over on a vehicle ferry to Baratang Island. Then take a speed boat on sharing basis to reach the lime stone caves and the mangrove creek. Return to Baratang jetty in the noon and check into the hotel. Have lunch and then head to see mud volcano. Later return back to Baratang Jetty, use the speed boat to visit Parrot Island. Numeroous Parrots crowd this island in the evenings and early mornings. The sound of the island to listen is mezmerizing. It is a 25 mins speed boat journey to reach near the island. No one is allowed to get on to the island. The Parrot island is watched sitting in the speedboat. After spending enough time return back to Baratang jetty and be dropped at the hotel. End of day. The tribe in the restricted area are called The Jarawas.",
         
        },
        {
          daynum: "7",
          title: "Return from Baratang to Shri Vijaya Puram (Port Blair) and rest.",
          para: "Early morning rise after breakfast leave Baratang Island in the 9:00 am convoy back to Shri Vijaya Puram (Port Blair). Reach Shri Vijaya Puram (Port Blair) by 12:00 pm. Be dropped at the hotel in Shri Vijaya Puram (Port Blair) and rest for the remaining part of the day. ",
          from: "hotel in Port Blair",
          to: "airport  ",
          transport: [
            {
              trans: "A/c cab trip to Baratang & tour",
              price: "₹12,000",
              price_to_cal: 12000 ,
            },
            {
              trans: "Ferry ticket to Baratang island",
              price: "20 x 2 x 10 = ₹400",
              price_to_cal: 400 ,
            },
            {
              trans: "Speed boat tickets to Limestone caves",
              price: "950 x 10 = ₹9,500",
              price_to_cal: 9500 ,
            },
            {
              trans: "Speed boat tickets to Parrot Island",
              price: "950 x 10 = ₹9,500",
              price_to_cal: 9500 ,
            },
          ],
          
        },
        {
          daynum: "8",
          title: " Return Home with Sweet Memory",
          para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
          from: "hotel in Port Blair",
          to: "airport",
          transport: [
            {
              trans: "A/c cab pickup from the hotel and drop to airport",
              price: "₹1,000",
              price_to_cal: 1000 ,
            },
          ],
          
          
        },
      ],
      stayAt: [
        {
          at: "Port Blair",
          hotel: "Hotel Star Paradise Deluxe Sea View room on CP plan",
          equa: "3,808 x 4 rooms x 3 nights",
          price: "45,696",
          price_to_cal: 45696,
          childequa: "1,120 x 1 CWoM x 3 nights",
          childprice: "3,360" ,
          childprice_to_cal: 3360
        },
        {
          at: "Baratang",
          hotel: "Dew Dale resort Double deluxe room on CP Plan",
          equa: "5,500 x 4 rooms x 1 night",
          price: "22,000",
          price_to_cal: 22000 ,
          childequa: "1,100 x 1 CWoM x 1 night",
          childprice: "1,100",
          childprice_to_cal: 1100
        },
        {
          at: "Swaraaj Dweep",
          hotel: "Lemon Grass beach resort Lagoon room on CP Plan",
          equa: "4,480 x 4 rooms x 2 nights",
          price: "35,840",
          price_to_cal: 35840 , 
          childequa: "1,500 x 1 CWoM x 2 nights",
          childprice: "3,000" , 
          childprice_to_cal: 3000
        },
        {
          at: "Shaheed Dweep",
          hotel: "Tango beach resort Lagoo room on CP Plan",
          equa: "4,004 x 4 rooms x 1 night",
          price: "16,016",
          price_to_cal: 16016 , 
          childequa: "1,120 x 1 CWoM x 1 night",
          childprice: "1,120" , 
          childprice_to_cal: 1120 
        },
      ],
      transportTicket:[
        {
          title:"Total for transportation, entry tickets and speed boat tickets" ,
          price:"62,820" , 
          price_to_cal: 62820
        } ,
        {
          title:"Private passenger cruise tickets" ,
          price:"41,050" ,
          price_to_cal: 41050
        } ,

      ] ,
      packageSubTotal:"2,32,002" ,
      subtotal_to_cal: 232002 , 
      // serviceCharge:"11,600" ,
      GSTCharge:"580" ,
      GrandTotal:244182 ,
      numberOfPeople: 10 

    },
    {
      id:2 ,
      img: a2,
      heading:"Trip duration: 4 nights & 5 Days (Private passenger cruise ticketproposal) " ,
      dayNight: "4 nights & 5 Days",
      days: "5",
      night: "4",
      dayIn: [
        {
          day: "2",
          desti: "Port Blair",
        },
        {
          day: "1",
          desti: "Swaraaj Dweep",
        },
        {
          day: "1",
          desti: "Shaheed Dweep",
        },
      ],
         
      included: [
        {
          img: location,
          title: "Transfer Included",
        },
        {
          img: location,
          title: "Stay Included",
        },
      ],

      title: "Trip duration: 4 nights & 5 Days",
       subtitle:"4 Adults" ,

      itinerary: [
        {
          daynum: "1",
          title: "First day in Shri Vijaya Puram (Port Blair)",
          para: "Receive at the Airport; the private driver will drive you to the hotel.Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India were prisoned here. This place for its jail was also known as Kala Paani. Death waters.One, who comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Shri Vijaya Puram (Port Blair). Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
          from: "Port Blair Airport ",
          to: "hotel",

          transport: [
            {
              trans: "A/c cab pickup from airport and drop to hotel and trip around Shri Vijaya Puram (Port Blair)",
              price: "₹1,350",
              price_to_cal: 1350,
            },
            {
              trans: "Cellular jail entry tickets per head",
              price: "30 x 4 = ₹120",
              price_to_cal: 120,
            },
            {
              trans: "Cellular Jail Light and Sound show ticket per head",
              price: "300 x 4 = ₹1,200",
              price_to_cal: 1200,
            },
          ],
            

        },
        {
          daynum: "2",
          title: "Trip to Swaraaj Dweep (Havelock) Island, Elephant beach visit / Radhanagar beach visit and stay at Swaraaj Dweep (Havelock)",
          para: "Early morning rise and the cab will pickup at 7:00am for the 8:00am cruise. Be dropped at Shri Vijaya Puram (Port Blair) jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. Our coordinator will guide you to board the speed boat that will take you to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures. Return to Swaraaj Dweep (Havelock) Jetty for lunch at any restaurant. After lunch around 3:00 pm head to see the 7th most beautiful beach in Asia, Radhanagar beach. Radhanagar beach is also famous for its sunsets. Spend time until sunset at the beach and return to the hotel and retire for the day. ",
          from: "hotel in Port Blair",
          to: " Baratang Island ",
          transport: [
            {
              trans: "A/c cab pickup from hotel to Shri Vijaya Puram (Port Blair) jetty",
              price: "₹250",
              price_to_cal: 250,
            },
            {
              trans: "Private passenger cruise tickets to Swaraaj Dweep (Havelock) Island from Shri Vijaya Puram (Port Blair)",
              price: "1,435 x 4 = ₹5,740",
              price_to_cal: 5740,
            },
            {
              trans: "Speed boat tickets on sharing basis",
              price: "1,000 x 4 = ₹4,000",
              price_to_cal: 4000,
            },
            {
              trans: "A/c cab pickup from Swaraaj Dweep (Havelock) jetty to the hotel",
              price: "₹250",
              price_to_cal: 250,
            },
            {
              trans: "A/c cab trip to Radhanagar beach and return to the hotel",
              price: "₹850",
              price_to_cal: 850,
            },
          ],
          
          
        },
        {
          daynum: "3",
          title: "Trip toShaheed Dweep (Neil Island) fromSwaraaj Dweep (Havelock) Island.",
          para: "Early morning rise and after breakfast& checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island)at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day. ",
          from: "Port Blair jetty ",
          to: " Swaraaj Dweep ",
          transport: [
            {
              trans: "A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty",
              price: "₹250",
              price_to_cal: 250,
            },
            {
              trans: "Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock)",
              price: "1,315 x 4 = ₹5,260",
              price_to_cal: 5260,
            },
            {
              trans: "A/c cab pickup and tour in Shaheed Dweep (Neil Island)",
              price: "₹1,800",
              price_to_cal: 1800,
            },
          ],
          
          
        },
        {
          daynum: "4",
          title: " Return from Shaheed Dweep (Neil Island) in the morning cruise and visit Subash Chandra Bose Dweep (Ross Island)",
          para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast. Checkout of the hotel and head to Shaheed Dweep (Shaheed Dweep (Neil Island)) Jetty to board the cruise back to Shri Vijaya Puram (Port Blair). Leave Shaheed Dweep (Neil Island) at 11:30 am cruise and reach Shri Vijaya Puram (Port Blair) at 12:30 pm. Directly head to Aberdeen jetty to board the ferry to Subash Chandra Bose Dweep (Ross Island) at 2:00pm. Subash Chandra Bose Dweep (Ross Island)Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. Later in the evening return back to Aberdeen jetty and be dropped at the hotel. End of day",
          from: "Scuba Diving Day",
          to: "Elephant Beach ",
          transport: [
            {
              trans: "A/c cab to view sunrise at Shaheed Dweep (Neil Island) and drop to jetty",
              price: "₹800",
              price_to_cal: 800,
            },
            {
              trans: "Private passenger cruise tickets to Shri Vijaya Puram (Port Blair) from Shaheed Dweep (Neil Island)",
              price: "1,355 x 4 = ₹5,420",
              price_to_cal: 5420,
            },
            {
              trans: "A/c cab pickup and drop to the hotel at Shri Vijaya Puram (Port Blair)",
              price: "₹300",
              price_to_cal: 300,
            },
            {
              trans: "A/c cab pickup and drop to Aberdeen jetty and back to the hotel",
              price: "₹500",
              price_to_cal: 500,
            },
            {
              trans: "Subash Chandra Bose Dweep (Ross Island) speed boat ticket",
              price: "570 x 4 = ₹2,280",
              price_to_cal: 2280,
            },
            {
              trans: "Entry ticket to Subash Chandra Bose Dweep (borne by guest)",
              price: "40 x 4 = ₹160",
              price_to_cal: 160,
            },
          ]
          
          
        },
        {
          daynum: "5",
          title: "Return Home with Sweet Memory.",
          para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
          from: "Scuba Diving Day",
          to: "Elephant Beach ",
          transport: [
            {
              trans: "A/c cab pickup from the hotel and drop to airport:",
              price: "₹500",
              price_to_cal: 500,
            },
          
          ]
          
          
        },
     
      ],
     
      stayAt: [
        {
          at: "Shri Vijaya Puram (Port Blair)",
          hotel: "Hotel Star Paradise Deluxe Sea View room on CP Plan",
          equa: "3,808 x 2 rooms x 2 nights",
          price: "15,232",
          price_to_cal: 15232,
          childequa: "0",
          childprice: "0",
          childprice_to_cal: 0
        },
        {
          at: "Swaraaj Dweep (Havelock Island)",
          hotel: "Sandyy Waves beach resort Premium room on CP Plan",
          equa: "7,280 x 2 rooms x 1 night",
          price: "14,560",
          price_to_cal: 14560,
          childequa: "0",
          childprice: "0",
          childprice_to_cal: 0
        },
        {
          at: "Shaheed Dweep (Neil Island)",
          hotel: "Pearl Park beach resort Executive sea view room",
          equa: "5,040 x 2 rooms x 1 night",
          price: "10,080",
          price_to_cal: 10080,
          childequa: "0",
          childprice: "0",
          childprice_to_cal: 0
        }
      ],      
      transportTicket:[
        {
          title:"Total for transportation, entry tickets and speed boat tickets" ,
          price:"14,450" , 
          price_to_cal: 14450
        } ,
        {
          title:"Private passenger cruise tickets" ,
          price:"16,420" ,
          price_to_cal: 16420
        } ,

      ] ,
      packageSubTotal:"70,742" ,
      subtotal_to_cal: 70742 , 
      // GSTCharge:"580" ,
      GrandTotal:244182 ,
      numberOfPeople:4

    },

    // {
    //   id:1 ,
    //   img: a1,
    //   heading:" 6 nights & 7 days (Private passenger cruise proposal) " ,
    //   dayNight: "6 Nights & 7 Days",
    //   days: "7",
    //   night: "6",
    //   dayIn: [
    //     {
    //       day: "3",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "1",
    //       desti: "Shaheed Dweep",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep",
    //     },


    //   ],

    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],

    //   title: "Package For 2 Adults + 1 child of 8 years",
    //    subtitle:"2 Adults + 1 child" ,
    //   totalbudget: "₹72,670",
    //   perPerson:"24223" ,
    //   totalHotel:"36,720" ,

    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: " First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and take rest ,  After Lunch  cab will pick you and will reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "2,165",
    //       from: "Port Blair Airport ",
    //       to: "hotel",

    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"₹1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry tickets per head" ,
    //           price:"30 x 3 = ₹90",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 3 = ₹900",
    //         } ,

    //       ] ,
    //       totalTransport:"₹2,165"

    //     },
    //     {
    //       daynum: "2",
    //       title: "Trip to Baratang Island and lime stone caves & mud volcano",
    //       para: "Early morning rise by 3:30am. Leave the hotel at 4:00am and head to Baratang. Will reach the entry gates of the convoy at 6:00am. Convoys are used to cross the restricted tribal area with police security. An hour through the tribal area, reach Middle Straight. Cross over on a vehicle ferry to Baratang Island. Then take a speed boat on sharing basis to reach the lime stone caves and the mangrove creek. Return to Baratang jetty in the noon and have lunch and then head to see mud volcano. Later return back to Baratang Jetty, use the vehicle ferry to get to Middle Straight. Board the waiting cab to head back to Port Blair in the 3:00pm convoy back through the tribal area. Reach the hotel in the evening and retire for the day. The tribe in the restricted area are called The Jarawas.",
    //       totalcost: "7,495",
    //       from: "hotel in Port Blair",
    //       to: " Baratang Island ",
    //       transport:[
    //         {
    //           trans:"A/c cab trip to Baratang" ,
    //           price:"4,000",
    //         } ,
    //         {
    //           trans:"Vehicle crossing ferry ticket to Baratang island" ,
    //           price:"20 x 2 x 3 = 120",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis to Limestone caves" ,
    //           price:"850 x 3 = 2,550",
    //         } ,
    //         {
    //           trans:"Jeep ride to mud volcano" ,
    //           price:"275 x 3 = 825",
    //         } ,

    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //     {
    //       daynum: "3",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pickup at 7:00 am for the 8:00 am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is two hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to kalapathar beach. Its one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island.Pristine blue waters welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach.Radhanagar beach is the 7th best beach in Asia, rated by Times and is the 25th best beach in the world. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "6,455",
    //       from: "Port Blair jetty ",
    //       to: " Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 3 = 4,305",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar and Radhanagar" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //     {
    //       daynum: "4",
    //       title: "Scuba Diving Day (Optional) and Visit Elephant Beach",
    //       para: "According to the scuba diving decision of the guests, this day we transfer the guest to Swaraajdweep jetty at to board the speed boat to reach Swaraaj Dweep (Havelock) jetty. Our coordinator will guide you to board the speed boat that will take you to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary offered by the speed boat provider. You can indulge in sea walking too organized by sea link adventures.  Return to Swaraaj Dweep (Havelock) Jetty by lunch time. Head back to the hotel and retire for the day.",
    //       totalcost: "3,500",
    //       from: "Scuba Diving Day",
    //       to: "Elephant Beach ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to Swaraajdweep jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 3 = 3,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
    //       para: "Early morning rise and after breakfast& checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island) by 8:00 am for the sailing at 10:15 am. Reach Shaheed Dweep (Neil Island)at 11:15 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "5,995",
    //       from: "Shaheed Dweep",
    //       to: "Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) fromSwaraaj Dweep" ,
    //           price:"1,315 x 3 = 3,945",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep" ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //     {
    //       daynum: "6",
    //       title:
    //         "Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point. ",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Spend time until evening and return to the hotel after witnessing a wonderful sunset. End of day",
    //       totalcost: " 6,315",
    //       from: "Neil Island",
    //       to: "Chidiyataapu Sunset point ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and Sitapur beach visit" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Port Blair from Shaheed Dweep" ,
    //           price:"1,355 x 3 = 4,065",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop at Port Blair hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,

    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //     {
    //       daynum: "7",
    //       title: "Return Home with Sweet Memory.",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",
    //       from: "hotel in Port Blair",
    //       to: "airport  ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,


    //       ] ,
    //       totalTransport:"2,165"
    //     },
    //   ],
    //   stayAt:[
    //       {
    //         at:"Port Blair",
    //         hotel:"Hotel Bell Elite Premium Deluxe room without balcony",
    //         equa:"4,600 x 1 room x 3 nights",
    //         price:"13,800" ,
    //          childequa:"1,000 x 1 CWoM x 3 nights" ,
    //         childprice:"3,000"
    //       } ,
    //       {
    //         at:"Swaraaj Dweep",
    //         hotel:"Lemon Grass beach resort Lagoon",
    //         equa:"5,600 x 1 room x 2 nights",
    //         price:"11,200" ,
    //           childequa:"1,000 x 1 CWoM x 2 nights" ,
    //         childprice:"2,000"
    //       } ,
    //       {
    //         at:"Shaheed Dweep",
    //         hotel:"Tango Beach Resort Lagoon",
    //         equa:"5,824 x 1 room x 1 night",
    //         price:"5,824" ,
    //         childequa:"896 x 1 CWoM x 1 night" ,
    //         childprice:"896"
    //       } ,

    //   ] ,
    //   totalStay:"₹36,720" ,
    //   hotelCP:"36,720" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"20,010"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"12,315"
    //     } ,

    //   ] ,
    //   packageTotal:"32,325" ,
    //   packageSubTotal:"69,045" ,
    //   serviceCharge:"17,261" ,
    //   GSTCharge:"863" ,
    //   GrandTotal:87169 ,
    //   GrandTotal2:"87,169" ,
    //   numberOfPeople:3

    // },

    // {
    //   id:2 ,
    //   img: a2,
    //   dayNight: "5 Nights & 6 Days",
    //   heading:" 5 nights & 6 days (Private passenger cruise proposal) " ,

    //   days: "6",
    //   night: "5",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep",
    //     },

    //     {
    //       day: "1",
    //       desti: "Shaheed Dweep",
    //     },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 5 nights & 6 days ",
    //    subtitle:"2 Adults + 2 childeren of 3 and 6 years" ,
    //   totalbudget: "34,104",
    //   perPerson:"8526" ,

    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Bell Elite Premium Deluxe room without balcony",
    //       equa:"5,000 x 1 rooms x 2 nights",
    //       price:"10,000" ,
    //         childwtiheq:"1,200 x 1 CWM x 2 nights" ,
    //         childwprice:"2,400"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Lemon Grass beach resort Lagoon",
    //       equa:"5,600 x 1 room x 2 nights",
    //       price:"11,200" ,
    //         childwtiheq:"1,500 x 1 CWM x 2 nights " ,
    //       childwprice:"3,000"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:"Tango Beach Resort Lagoon",
    //       equa:"5,824 x 1 room x 1 night ",
    //       price:"5,824" ,
    //        childwtiheq:"1,680 x 1 CWM x 1 night" ,
    //       childwprice:"1,680"
    //     } ,

    //   ] ,
    //   totalStay:"₹34,104" ,
    //   hotelCP:"34,104" ,

    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "First day in Port Blair",
    //       para: "At the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India, were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not an option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet ski or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "2,165",
    //       from: "Port Blair Airport",
    //       to: "hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry ticket per head" ,
    //           price:"30 x 3 = 90",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 3 = 900",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "2",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pick up at 7:00am for the 8:00am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to Kalapathar beach. It’s one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island. Pristine blue water welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach. Radhanagar beach is the 4th best beach in the world, rated by Trip Advisor. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "7,890",
    //         from: "hotel in Port Blair",
    //       to: "Swaraaj Dweep (Havelock)",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 4 = 5,740",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar & Radhanagar beach" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures. Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "4,500",

    //       from: "Hotel in Swaraaj Dweep (Havelock)",
    //       to: "Elephant Beach",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 4 = 4,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
    //       para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island) by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at 11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beaches in Shaheed Dweep (Neil Island). Indulge in some water sport activities like jet ski, glass bottom boat ride etc, on spot payments. Next visit Natural Bridge according to Low and High tide. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "7,310",
    //       from: "Swaraaj Dweep (Havelock)",
    //       to: "Shaheed Dweep (Neil Island)",
    //       transport:[
    //         {
    //           trans:"A/c Cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep " ,
    //           price:"1,315 x 4 = 5,260",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep " ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Return from Shaheed Dweep (Neil Island) in the morning cruise and visit Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to Sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast. Checkout of the hotel and head to Shaheed Dweep (Neil Island) Jetty to board the cruise back to Port Blair. Leave Shaheed Dweep (Neil Island) at 11:30 am cruise and reach Port Blair at 12:30 pm. Directly head to Aberdeen jetty to board the ferry to Subash Chandra Bose Dweep (Ross Island) at 2:00pm. Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. Later in the evening return back to Aberdeen jetty and be dropped at the hotel. End of day.",
    //       totalcost: "8,350",

    //       from: "Shaheed Dweep (Neil Island)",
    //       to: "Subash Chandra Bose Dweep (Ross Island)",
    //       transport:[
    //         {
    //           trans:"A/c cab to view sunrise at Shaheed Dweep (Neil Island)and drop to jetty" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Shaheed Dweep" ,
    //           price:"1,355 x 4 = 5,420",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to the hotel at Port Blair" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to Aberdeen jetty and back" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Subash Chandra Bose Dweep (Ross Island) speed boat ticket" ,
    //           price:"70 x 4 = 1,480",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title: "Return Home with Sweet Memory",
    //       para: "Early morning rise and after breakfast head to the airport according to the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",

    //       from: "hotel in Port Blair",
    //       to: "airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,


    //       ] ,
    //     },
    //   ],
    //   totalCost: "68,117",

    //   hotelCP:"34,104" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"14,195"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"16,420"
    //     } ,

    //   ] ,
    //   packageTotal:"30,615" ,
    //   packageSubTotal:"64,719" ,
    //   serviceCharge:"16,179" ,
    //   GSTCharge:"808" ,
    //   GrandTotal:81706 ,
    //   GrandTotal2:"81,706" ,
    //    numberOfPeople:4

    // },

    // {
    //   id:3 ,
    //   img: a3,
    //   dayNight: " 4 nights & 5 days",
    //   heading:" 4 nights & 5 days" ,
    //   days: "5",
    //   night: "4",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep (Havelock Island)",
    //     },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 4 nights & 5 days ",
    //   subtitle:"6 Adults" ,
    //   totalbudget: "34,104",
    //   perPerson:"5684",
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Bell Elite Premium Deluxe room without balcony",
    //       equa:"4,600 x 3 rooms x 2 nights",
    //       price:"27,600"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Lemon Grass beach resort Lagoon",
    //       equa:"5,600 x 3 rooms x 2 nights",
    //       price:"33,600"
    //     } ,


    //   ] ,
    //   totalStay:"₹61,200" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "3,430",

    //       from: "Port Blair Airport",
    //       to: "hotel",

    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"275",
    //         } ,
    //         {
    //           trans:"Cellular jail entry ticket per head" ,
    //           price:"30 x 6 = 180",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 6 = 1,800",
    //         } ,
    //       ] ,
    //     },
    //     {
    //       daynum: "2",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pick up at 7:00am for the 8:00am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to Kalapathar beach. It’s one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island. Pristine blue water welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach. Radhanagar beach is the 4th best beach in the world, rated by Trip Advisor. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "11,210",
    //       from: "Port Blair jetty",
    //       to: "Swaraaj Dweep (Havelock) jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"200",
    //         } ,

    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 6 = 8,610",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,

    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar & Radhanagar beach" ,
    //           price:"1,700",
    //         } ,


    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures. Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "4,500",

    //       from: "Hotel",
    //       to: "Dive centre",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,

    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 6 = 6,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,


    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
    //       para: "Lazy morning rise and checkout by 8:00am and after breakfast, head to Swaraaj Dweep (Havelock) jetty by 9:30am to board the morning cruise back to Port Blair at 10:45am. Reach Port Blair by 12:15pm in the noon. Visit Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. One can choose to drive around on a golf cart on direct payment at Subash Chandra Bose Island (Ross Island). Later in the evening return back to the hotel and retire for the day.",
    //       totalcost: "12,230",

    //       from: "Hotel",
    //       to: "Swaraaj Dweep (Havelock) jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,

    //         {
    //           trans:"Extra cab for luggagae" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Swaraaj Dweep" ,
    //           price:"1,435 x 6 = 8,610",
    //         } ,

    //         {
    //           trans:"A/c cab pickup from Port Blair jetty and drop to the hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from the hotel to Aberdeen jetty to visit Subash Chandra Bose Dweep (Ross Island) and back to hotel" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Speed boat tickets to Subash Chandra Bose Dweep " ,
    //           price:"370 x 6 = 2,220",
    //         } ,


    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Return from Shaheed Dweep (Neil Island) in the morning cruise and visit Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way..",
    //       totalcost: "600",

    //       from: "Hotel",
    //       to: "Airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"200",
    //         } ,
    //       ] ,
    //     },
    //   ],
    //   totalCost: "33,970",

    //   hotelCP:" 61,200" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"16,750"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"17,220"
    //     } ,

    //   ] ,
    //   packageTotal:"33,970" ,
    //   packageSubTotal:"95,170" ,
    //   serviceCharge:"23,792" ,
    //   GSTCharge:"1,189" ,
    //   GrandTotal:120151 ,
    //   GrandTotal2:"1,20,151" ,
    //    numberOfPeople:6

    // },

    // {
    //   id:4 ,
    //   img: a4,
    //   dayNight: "5 nights & 6 days",
    //   heading:" 5 nights & 6 days (Private passenger cruise) " ,
    //   days: "6",
    //   night: "5",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep",
    //     },
    //     {
    //       day: "1",
    //       desti: "Shaheed Dweep",
    //     },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 5 nights & 6 days ",
    //   subtitle:"2 Adults" ,
    //   totalbudget: "43,209",
    //   perPerson:"21,105" ,

    //   stayAt:[

    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Lemon Grass beach resort Lagoon",
    //       equa:"4,000 x 1 room x 2 nights",
    //       price:"8,000"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:" Tango beach resort Lagoon",
    //       equa:"5,824 x 1 room x 1 night ",
    //       price:"5,824"
    //     } ,
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Bell Elite Premium Deluxe room with balcony ",
    //       equa:" 5,000 x 1 room x 2 nights",
    //       price:"10,000"
    //     } ,


    //   ] ,
    //   totalStay:"₹23,824" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "Early arrival at Port Blair and transfer to Swaraaj Dweep",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "4,445",
    //       from: "Port Blair Airport",
    //       to: "Port Blair Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup / drop at Port Blair" ,
    //           price:"475",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 2 = 2,870",
    //         } ,
    //         {
    //           trans:"Pick up at Swaraaj Dweep (Havelock) Island and drop to the hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Drive to Radhanagar beach and back to the hotel" ,
    //           price:"850",
    //         } ,
    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures.  Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "2,500",
    //       from: "Havelock Hotel/Resort",
    //       to: "Dive Centre",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 2 = 2,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,
    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island.",
    //       para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "4,680",
    //       from: "Havelock Hotel/Resort",
    //       to: "Swaraj Dweep (Havelock) Jetty",

    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep" ,
    //           price:"1,315 x 2 = 2,630",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep" ,
    //           price:"1,800",
    //         } ,
    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         "Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Return to Port Blair city to have dinner at Love Garden, in the evening and post dinner be dropped to the resort.",
    //       totalcost: "4,960",
    //       from: "Hotel",
    //       to: "Sitapur Beach",

    //       transport:[
    //         {
    //           trans:"A/c cab to view sunrise at Neil Island and drop to jetty" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Neil Island" ,
    //           price:"1,355 x 2 = 2,710",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to the hotel at Port Blair" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from resort, visit Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,
    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Two island trip: Visit to North Bay Island and Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Early morning rise and after breakfast head to Aberdeen jetty at the Rajiv Gandhi sports complex to board the speed boat or ferry to take you on a two island trip. Subash Chandra Bose Dweep (Ross Island) and North Bay Island. First visit North Bay Island. It is also called as Coral Island which showcases a wide range of coral life and fish life. Snorkelling and a glass bottom ride is advised to view the beautiful fish life and coral life. One canchoose to either scuba dive or sea walk at North Bay Island. Spend time until lunch and after lunch head to Subash Chandra Bose Dweep (Ross Island). Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. Later in the evening return to Aberdeen jetty and head back to the hotel. Retire for the day.",
    //       totalcost: "2,400",
    //       from: "Hotel",
    //       to: "Aberdeen Jetty at Rajiv Gandhi Sports Complex",
    //       transport:[
    //         {
    //           trans:"A/c cab drop and pickup from hotel to Aberdeen jetty and back to the hotel" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Speed boat / Ferry ticket to North Bay and Subash Chandra Bose Dweep " ,
    //           price:"1,000 x 2 = 2,000",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title: "Return Home with Sweet Memory. ",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",
    //       from: "Hotel",
    //       to: "Port Blair Airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,
    //     },
    //   ],

    //   totalCost: "31,595",

    //   hotelCP:"23,824" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"11,175"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"8,210"
    //     } ,

    //   ] ,
    //   packageTotal:" 19,385" ,
    //   packageSubTotal:"43,209" ,
    //   serviceCharge:"10,802" ,
    //   GSTCharge:"540" ,
    //   GrandTotal:54551,
    //   GrandTotal2:"54,551",
    //    numberOfPeople:2

    // },

    // {
    //   id:5 ,
    //   img: a5,
    //   dayNight: "5 nights & 6 days",
    //   heading:" 5 nights & 6 days (Private passenger cruise) " ,
    //   days: "6",
    //   night: "5",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep (Havelock Island)",
    //     },

    //     {
    //       day: "1",
    //       desti: "Shaheed Dweep (Neil Island)",
    //     },
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 5 nights & 6 days ",
    //   subtitle:"2 Adults + 2 children of 8 & 14 years" ,
    //   totalbudget: "75,880",
    //   perPerson:"18970" ,
    //   stayAt:[

    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Aquays beach resort Havelock Plaza",
    //       equa:"6,000 x 1 room x 2 nights",
    //       price:"12,000" ,
    //       childequa:"1,500 x 1 CWoM x 2 nights" ,
    //       childprice:"3,000" ,
    //       childwtiheq:" 2,000 x 1 CWM x 2 nights" ,
    //       childprice:"4,000" ,
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:"Aquays beach resort Neil Plaza room ",
    //       equa:"5,000 x 1 room x 1 night",
    //       price:"5,000" ,
    //       childequa:"1,500 x 1 CWoM x 1 night" ,
    //       childprice:"1,500" ,
    //       childwtiheq:"2,000 x 1 CWM x 1 night" ,
    //       childprice:"2,000" ,
    //     } ,
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Darwin City Darwin Deluxe",
    //       equa:" 4,300 x 1 room x 2 nights ",
    //       price:"8,600" ,
    //       childequa:"1,000 x 1 CWoM x 2 nights" ,
    //       childprice:"2,000" ,
    //       childwtiheq:"1,200 x 1 CWM x 2 nights" ,
    //       childprice:"2,400" ,
    //     } ,


    //   ] ,
    //   totalStay:"₹40,500" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "Early arrival at Port Blair and transfer to Swaraaj Dweep",
    //       para: "Receive at the airport, A/c car with private driver will receive you and drive you to a close by restaurant and drop you at Port Blair jetty to board the cruise to Swaraaj Dweep (Havelock) in the afternoon. The sailing starts at 2:00 pm. You will reach Swaraaj Dweep (Havelock) Island at 3:30pm. Be picked up by a/c private cab and driver and drop at the hotel. After check into the hotel and some rest, head to Radhanagar beach, Asia’s best beach awarded by Trip Advisor. Radhanagar is also for its lovely sunset. After sunset return to the hotel and retire for the day.",
    //       totalcost: "7,315",
    //       from: "Port Blair Airport",
    //       to: "Restaurant and Port Blair Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup / drop at Port Blair" ,
    //           price:"475",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 4 = 5,740",
    //         } ,
    //         {
    //           trans:"Pick up at Swaraaj Dweep (Havelock) Island and drop to the hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Drive to Radhanagar beach and back to the hotel" ,
    //           price:"850",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures.  Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "4,500",


    //       from: "Havelock Hotel/Resort",
    //       to: "Dive Centre",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 4 = 4,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island.",
    //       para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "7,310",

    //       from: "Havelock Hotel/Resort",
    //       to: "Swaraj Dweep (Havelock) Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep" ,
    //           price:"1,315 x 2 = 5,260",
    //         } ,

    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep" ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         "Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Return to Port Blair city to have dinner at Love Garden, in the evening and post dinner be dropped to the resort.",
    //       totalcost: "7,670",
    //       from: "Hotel",
    //       to: "Sitapur Beach",
    //       transport:[
    //         {
    //           trans:"A/c cab to view sunrise at Neil Island and drop to jetty" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Neil Island" ,
    //           price:"1,355 x 4 = 5,420",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to the hotel at Port Blair" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from resort, visit Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Two island trip: Visit to North Bay Island and Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Early morning rise and after breakfast head to Aberdeen jetty at the Rajiv Gandhi sports complex to board the speed boat or ferry to take you on a two island trip. Subash Chandra Bose Dweep (Ross Island) and North Bay Island. First visit North Bay Island. It is also called as Coral Island which showcases a wide range of coral life and fish life. Snorkelling and a glass bottom ride is advised to view the beautiful fish life and coral life. One canchoose to either scuba dive or sea walk at North Bay Island. Spend time until lunch and after lunch head to Subash Chandra Bose Dweep (Ross Island). Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. Later in the evening return to Aberdeen jetty and head back to the hotel. Retire for the day.",
    //       totalcost: "4,400",

    //       from: "Hotel",
    //       to: "Aberdeen Jetty at Rajiv Gandhi Sports Complex",
    //       transport:[
    //         {
    //           trans:"A/c cab drop and pickup from hotel to Aberdeen jetty and back to the hotel" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Speed boat / Ferry ticket to North Bay and Subash Chandra Bose Dweep" ,
    //           price:"1,000 x 4 = 4,000",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title: "Return Home with Sweet Memory. ",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",
    //       from: "Hotel",
    //       to: "Port Blair Airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,

    //     },
    //   ],

    //   totalCost: "31,595",

    //   hotelCP:"40,500" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"15,175"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"16,420"
    //     } ,

    //   ] ,
    //   packageTotal:"31,595" ,
    //   packageSubTotal:"72,095" ,
    //   serviceCharge:"18,023" ,
    //   GSTCharge:"901" ,
    //   GrandTotal:91019 ,
    //   GrandTotal2:"91,019" ,
    //    numberOfPeople:4

    // },

    // {
    //    id:6 ,
    //   img: a6,
    //   dayNight: "6 nights & 7 days",
    //   heading:" 6 nights & 7 days (Private passenger cruise proposal)  ",
    //   days: "7",
    //   night: "6",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },

    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep (Havelock Island)",
    //     },

    //     {
    //       day: "2",
    //       desti: "Shaheed Dweep (Neil Island)",
    //     },


    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 5 nights & 6 days ",
    //   subtitle:"2 Adults" ,
    //   totalbudget: "77,880",
    //   perPerson:"38940" ,
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Star Paradise Deluxe Sea View",
    //       equa:"5,040 x 1 room x 2 nights",
    //       price:"10,080"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Lemon Grass beach resort Lagoon Suite",
    //       equa:"9,856 x 1 room x 2 nights",
    //       price:"19,712"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:"Tango beach resort Lagoon",
    //       equa:"5,824 x 1 room x 2 night ",
    //       price:"11,648"
    //     } ,

    //   ] ,
    //   totalStay:"₹41,440" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "1,835",

    //       from: "Port Blair Airport",
    //       to: "Hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry tickets per head" ,
    //           price:"30 x 2 = 60",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 2 = 600",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title:" Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pickup at 7:00am for the 8:00am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to kalapathar beach. It’s one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island. Pristine blue water welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach.Radhanagar beach is the 4thbest beach in the world, rated by Trip Advisor. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "5,020",
    //       from: "Hotel",
    //       to: "Swaraaj Dweep (Havelock) Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,

    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 2 = 2,870",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar & Radhanagar beach" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures.  Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "2,500",

    //       from: "Hotel",
    //       to: "Dive Centre / Havelock Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep (Havelock Jetty)" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets to Elephant beach on sharing basis" ,
    //           price:"1,000 x 2 = 2,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,


    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title: "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island.",
    //       para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "4,680",
    //       from: "Hotel (Havelock)",
    //       to: "Shaheed Dweep (Neil Island) Jetty",
    //       transport:[
    //         {
    //           trans:"/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock)",
    //           price:"1,315 x 2 = 2,630",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep (Neil Island)" ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title: " Visit Natural Bridge & Leisure at Shaheed Dweep (Neil Island):",
    //       para: "Visiting natural bridge is decided by the nature of the sea condition. High tide or low tide. Natural Bridge is visit-able only when it is LOW TIDE. The rocky path laded with corals will allow only those who are wearing their footwear. Walk down the corals and then visit the Natural Bridge. This bridge is formed due to natural weather conditions over a period of time. Enjoy the bridge until time provided and then return back to Shaheed Dweep (Neil Island) market and then return back to the Hotel. There will be time at hand, after the Natural Bridge visit, which can be conducted on the spot, in consultation with the driver & its price.",
    //       totalcost: "500",

    //       from: "Hotel (Shaheed Dweep)",
    //       to: "Natural Bridge",
    //       transport:[
    //         {
    //           trans:"A/c cab visit to natural bridge and back to the hotel" ,
    //           price:"500",
    //         } ,


    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title:"Return from Shaheed Dweep (Neil Island) in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to Sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast. Checkout of the hotel and head to Shaheed Dweep (Shaheed Dweep (Neil Island)) Jetty to board the cruise back to Port Blair. Leave Shaheed Dweep (Neil Island) at 11:45 am cruise and reach Port Blair at 1:00 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Spend time until evening and return to the hotel after witnessing a wonderful sunset. End of day",
    //       totalcost: "4,960",

    //       from: "Hotel (Shaheed Dweep)",
    //       to: "Port Blair",
    //       transport:[
    //         {
    //           trans:"A/c cab to view sunrise at Shaheed Dweep (Neil Island) and drop to jetty" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Shaheed Dweep (Neil Island)" ,
    //           price:"1,355 x 2 = 2,710",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to the hotel at Port Blair" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "7",
    //       title: "Return Home with Sweet Memory.",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",
    //       from: "Hotel (Port Blair)",
    //       to: "Airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,
    //     },
    //   ],

    //   totalCost: "64,555",

    //   hotelCP:"41,440" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"11,685"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"8,210"
    //     } ,

    //   ] ,
    //   packageTotal:"19,895" ,
    //   packageSubTotal:"61,335" ,
    //   serviceCharge:"15,333" ,
    //   GSTCharge:"766" ,
    //   GrandTotal:77434 ,
    //   GrandTotal2:"77,434",
    //    numberOfPeople:2

    // },

    // {
    //   id: 7,
    //   img: a1,
    //   dayNight: " 4 nights & 5 days",
    //   heading:" 4 nights & 5 days",
    //   days: "5",
    //   night: "4",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep (Havelock Island)",
    //     },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 4 nights & 5 days ",
    //   subtitle:"2 Adults" ,
    //   totalbudget: "21,200",
    //   perPerson:"10600" ,
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Bell Elite Premium Deluxe with balcony",
    //       equa:"5,000 x 1 room x 2 nights",
    //       price:"10,000"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Lemon Grass beach resort Lagoon ",
    //       equa:"5,600 x 1 room x 2 nights",
    //       price:"11,200"
    //     } ,


    //   ] ,
    //   totalStay:"₹21,200" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: "First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "1,835",

    //       from: "Port Blair Airport",
    //       to: "hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry ticket per head" ,
    //           price:"30 x 2 = 60",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 2 = 600",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "2",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pick up at 7:00am for the 8:00am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is one hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to Kalapathar beach. It’s one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island. Pristine blue water welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach. Radhanagar beach is the 4th best beach in the world, rated by Trip Advisor. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "5,020",

    //       from: "Port Blair jetty",
    //       to: "Swaraaj Dweep (Havelock) jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 2 = 2,870",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar & Radhanagar beach" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "3",
    //       title: " Scuba Diving Day and Visit Elephant Beach",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures. Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "2,500",

    //       from: "Hotel",
    //       to: "Dive centre",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 2 = 2,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         " Return to Port Blair from Swaraaj Dweep (Havelock) Island in the morning and visit Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Lazy morning rise and checkout by 8:00am and after breakfast, head to Swaraaj Dweep (Havelock) jetty by 9:30am to board the morning cruise back to Port Blair at 10:45am. Reach Port Blair by 12:15pm in the noon. Visit Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. One can choose to drive around on a golf cart on direct payment at Subash Chandra Bose Island (Ross Island). Later in the evening return back to the hotel and retire for the day.",
    //       totalcost: "4,770",

    //       from: "Hotel",
    //       to: "Swaraaj Dweep (Havelock) jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel and drop to Swaraaj Dweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Swaraaj Dweep" ,
    //           price:"1,435 x 2 = 2,870",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Port Blair jetty and drop to the hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from the hotel to Aberdeen jetty to visit Subash Chandra Bose Dweep (Ross Island) and back to hotel" ,
    //           price:"400",
    //         } ,

    //         {
    //           trans:"Speed boat tickets to Subash Chandra Bose Dweep " ,
    //           price:"500 x 2 = 1,000",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title: " Return Home with Sweet Memory",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",
    //       from: "Hotel",
    //       to: "Airport",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,
    //     },
    //   ],
    //   totalCost: "14,970",

    //   hotelCP:"21,200" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"8,785"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"5,740"
    //     } ,

    //   ] ,
    //   packageTotal:"14,525" ,
    //   packageSubTotal:"35,725" ,
    //   serviceCharge:"8,931" ,
    //   GSTCharge:"446" ,
    //   GrandTotal:45102,
    //   GrandTotal2:"45,102",
    //    numberOfPeople:2

    // },

    // {
    //   id: 8 ,
    //   img: a2,
    //   dayNight: "5 nights & 6 days",
    //   heading:" 5 nights & 6 days (Private passenger cruise proposal) " ,
    //   days: "6",
    //   night: "5",
    //   dayIn: [
    //     {
    //       day: "2",
    //       desti: "Port Blair",
    //     },
    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep (Havelock Island)",
    //     },

    //     {
    //       day: "1",
    //       desti: "Shaheed Dweep (Neil Island)",
    //     },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Trip duration 5 nights & 6 days ",
    //   subtitle:"2 Adults" ,
    //   totalbudget: "48,887",
    //   perPerson:"24443" ,
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Star Paradise Deluxe Sea View",
    //       equa:"5,040 x 1 room x 2 nights",
    //       price:"10,080"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:" Lemon Grass beach resort Lagoon",
    //       equa:"5,600 x 1 room x 2 nights",
    //       price:"11,200"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:" Tango Beach resort Lagoon",
    //       equa:"5,824 x 1 room x 1 night ",
    //       price:"5,824"
    //     } ,


    //   ] ,
    //   totalStay:"₹27,104" ,

    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title:"First day in Port Blair" ,
    //       para:
    //         "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and rest for a while. Afternoon at 2pm, reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India, were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "1,835",

    //       from: "Port Blair Airport",
    //       to: "Hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry ticket per head" ,
    //           price:" 30 x 2 = 60",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 2 = 600",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures.  Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "5,020",

    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 2 = 2,870",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar & Radhanagar beach" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //       from: "Havelock Hotel/Resort",
    //       to: "Port Blair Jetty",
    //     },
    //     {
    //       daynum: "3",
    //       title: "Elephant Beach Trip & Day for Scuba Diving (Optional)",
    //       para: "Early morning rise by 7am, cab will pick you from the hotel and drop you at the dive centre. The dive centre will then take you on their private speed boat to the dive spot for diving. It will be a fun dive. After the dive is over you will return to the dive centre. Breakfast at Havelock Hotel / resort and at around 9:00am reach Havelock jetty. Our coordinator will guide you to the trekking point to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary. You can indulge in sea walking too organized by sea link adventures.  Return to Havelock Jetty by lunch time by the speed boat. Head back to the hotel and retire for the day.",
    //       totalcost: "2,500",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to SwaraajDweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis" ,
    //           price:"1,000 x 2 = 2,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from SwaraajDweep (Havelock) jetty to Hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //       from: "Hotel/Resort",
    //       to: "Dive Center",
    //     },
    //     {
    //       daynum: "4",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island.",
    //       para: "Early morning rise and after breakfast & checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island)by 8:00 am for the sailing at 10:00 am. Reach Shaheed Dweep (Neil Island) at11:10 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to visit Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Next visit Natural Bridge according to Low and High tide. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "4,680",


    //       from: "Hotel",
    //       to: "Swaraaj Dweep (Havelock) Jetty",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to Swaraaj Dweep" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dwee" ,
    //           price:"1,315 x 2 = 2,630",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep" ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Two island trip: Visit to North Bay Island and Subash Chandra Bose Dweep (Ross Island)",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast. Checkout of the hotel and head to Shaheed Dweep (Shaheed Dweep (Neil Island)) Jetty to board the cruise back to Port Blair. Leave Shaheed Dweep (Neil Island) at 11:30 am cruise and reach Port Blair at 12:30 pm. Directly head to Aberdeen jetty to board the ferry to Subash Chandra Bose Dweep (Ross Island) at 2:00pm. Subash Chandra Bose Dweep (Ross Island)Subash Chandra Bose Dweep (Ross Island) was the first administrative island in the British rule of the islands. The island now in the ruins depicts the brilliant architecture that evolved in the time of the British rule. A walk through the island will enlighten you about the living conditions of the British in the time of the Indian freedom struggle. A visit to the museum at Subash Chandra Bose Dweep (Ross Island) will showcase the stages of development in the Island. Later in the evening return back to Aberdeen jetty and be dropped at the hotel. End of day",
    //       totalcost: "4,900",
    //       from: "Hotel",
    //       to: "Sitapur Beach",
    //       transport:[
    //         {
    //           trans:"A/c cab to view sunrise at Shaheed Dweep (Neil Island)and drop to jetty" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Port Blair from Shaheed Dweep" ,
    //           price:"1,355 x 2 = 2,710",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to the hotel at Port Blair" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop to Aberdeen jetty and back" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Subash Chandra Bose Dweep (Ross Island) speed boat ticket" ,
    //           price:"370 x 2 = 740",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title: " Return Home with Sweet Memory. ",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "4,900",
    //       from: "Hotel",
    //       to: "Sitapur Beach",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,
    //     },
    //   ],

    //   totalCost: "19,335",


    //   hotelCP:"27,104" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"11,125"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:" 8,210"
    //     } ,

    //   ] ,
    //   packageTotal:"19,335" ,
    //   packageSubTotal:"46,439" ,
    //   serviceCharge:"11,609" ,
    //   GSTCharge:"580" ,
    //   GrandTotal:58628 ,
    //   GrandTotal2:"58,628" ,
    //    numberOfPeople:2

    // },

    // {
    //   id:9 ,
    //   img: a3,
    //   dayNight: "6 Nights & 7 Days",
    //   heading:"6 nights & 7 days (Private passenger cruise proposal)" ,
    //   days: "7",
    //   night: "6",
    //   dayIn: [
    //     {
    //       day: "3",
    //       desti: "Port Blair",
    //     },

    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep",
    //     },

    //     { day: "1", desti: "Shaheed Dweep " },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Package For 4 Adults",
    //   subtitle:"4 Adults" ,
    //   totalbudget: "72,670",
    //   perPerson:"18167",
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:"Hotel Sea Shore Residency",
    //       equa:"2,500 x 2 rooms x 3 nights",
    //       price:"15,000"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:" Radhakrihsna Hotel AC room",
    //       equa:"2,000 x 2 rooms x 2 nights",
    //       price:"8,000"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:"Sandy Ridge Delxue",
    //       equa:"3,100 x 2 rooms x 1 night",
    //       price:"6,200"
    //     } ,


    //   ] ,
    //   totalStay:"₹29,200" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: " First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and take rest ,  After Lunch  cab will pick you and will reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "2,495",
    //       from: "Port Blair Airport ",
    //       to: "hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Cellular jail entry tickets per head" ,
    //           price:"30 x 4 = 120",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 4 = 1,200",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title:
    //         "Trip to Baratang Island and lime stone caves & mud volcano (VIA ROAD)",
    //       para: "Early morning rise by 3:30am. Leave the hotel at 4:00am and head to Baratang. Will reach the entry gates of the convoy at 6:00am. Convoys are used to cross the restricted tribal area with police security. An hour through the tribal area, reach Middle Straight. Cross over on a vehicle ferry to Baratang Island. Then take a speed boat on sharing basis to reach the lime stone caves and the mangrove creek. Return to Baratang jetty in the noon and have lunch and then head to see mud volcano. Later return back to Baratang Jetty, use the vehicle ferry to get to Middle Straight. Board the waiting cab to head back to Port Blair in the 3:00pm convoy back through the tribal area. Reach the hotel in the evening and retire for the day. The tribe in the restricted area are called The Jarawas.",
    //       totalcost: "8,860",
    //       from: "hotel in Port Blair",
    //       to: " Baratang Island ",
    //       transport:[
    //         {
    //           trans:"A/c cab trip to Baratang" ,
    //           price:"4,000",
    //         } ,
    //         {
    //           trans:"Vehicle crossing ferry ticket to Baratang island" ,
    //           price:"20 x 2 x 4 = 160",
    //         } ,
    //         {
    //           trans:"Speed boat on sharing basis tickets to Limestone caves" ,
    //           price:"900 x 4 = 3,600",
    //         } ,
    //         {
    //           trans:"Jeep ride to mud volcano" ,
    //           price:"275 x 4 = 1,100",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "3",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pickup at 7:00 am for the 8:00 am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is two hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to kalapathar beach. Its one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island.Pristine blue waters welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach.Radhanagar beach is the 7th best beach in Asia, rated by Times and is the 25th best beach in the world. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "7,890",
    //       from: "Port Blair jetty ",
    //       to: " Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 4 = 5,740",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,

    //         {
    //           trans:"A/c cab trip to Kalapathar and Radhanagar" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title: "Scuba Diving Day (Optional) and Visit Elephant Beach",
    //       para: "According to the scuba diving decision of the guests, this day we transfer the guest to Swaraajdweep jetty at to board the speed boat to reach Swaraaj Dweep (Havelock) jetty. Our coordinator will guide you to board the speed boat that will take you to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary offered by the speed boat provider. You can indulge in sea walking too organized by sea link adventures.  Return to Swaraaj Dweep (Havelock) Jetty by lunch time. Head back to the hotel and retire for the day.",
    //       totalcost: "4,500",
    //       from: "Scuba Diving Day",
    //       to: "Elephant Beach ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to Swaraajdweep jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis to Elephant beach" ,
    //           price:"1,000 x 4 = 4,000",
    //         } ,

    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) jetty to hotel" ,
    //           price:"250",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
    //       para: "Early morning rise and after breakfast& checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island) by 8:00 am for the sailing at 10:15 am. Reach Shaheed Dweep (Neil Island)at 11:15 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "7,310",
    //       from: "Shaheed Dweep",
    //       to: "Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep" ,
    //           price:"5,260",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep " ,
    //           price:"1,800",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title:
    //         "Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point. ",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Spend time until evening and return to the hotel after witnessing a wonderful sunset. End of day",
    //       totalcost: " 7,670",

    //       from: "Neil Island",
    //       to: "Chidiyataapu Sunset point ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and Sitapur beach visit" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Port Blair from Shaheed Dweep" ,
    //           price:"1,355 x 4 = 5,420",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop at Port Blair hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "7",
    //       title: "Return Home with Sweet Memory.",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "400",

    //       from: "hotel in Port Blair",
    //       to: "airport  ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,

    //       ] ,
    //     },
    //   ],
    //   totalCost: "39,125",

    //   hotelCP:"29,200" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"22,705"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"16,420"
    //     } ,

    //   ] ,
    //   packageTotal:"39,125" ,
    //   packageSubTotal:"68,325" ,
    //   serviceCharge:"17,081" ,
    //   GSTCharge:"854" ,
    //   GrandTotal:86260,
    //   GrandTotal2:"86,260",
    //   numberOfPeople:4

    // },

    // {
    //   id:10 ,
    //   img: a4,
    //   dayNight: "6 Nights & 7 Days",
    //   heading:"6 nights & 7 days (Private passenger cruise proposal)",
    //   days: "7",
    //   night: "6",
    //   dayIn: [
    //     {
    //       day: "3",
    //       desti: "Port Blair",
    //     },

    //     {
    //       day: "2",
    //       desti: "Swaraaj Dweep",
    //     },

    //     { day: "1", desti: "Shaheed Dweep " },

    //   ],
    //   included: [
    //     {
    //       img: location,
    //       title: "Transfer Included",
    //     },
    //     {
    //       img: location,
    //       title: "Stay Included",
    //     },
    //   ],
    //   title: "Package For 6 Adults",
    //   subtitle:"6 Adults" ,
    //   totalbudget: "1,01,670",
    //   perPerson:"16945" ,
    //   stayAt:[
    //     {
    //       at:"Port Blair",
    //       hotel:" Hotel Sea Shore Residency Deluxe",
    //       equa:"2,500 x 3 rooms x 3 nights",
    //       price:"22,500"
    //     } ,
    //     {
    //       at:"Swaraaj Dweep",
    //       hotel:"Hotel Radhakrishna AC double",
    //       equa:"2,500 x 3 rooms x 2 nights",
    //       price:"15,000"
    //     } ,
    //     {
    //       at:"Shaheed Dweep",
    //       hotel:"Sandy Ridge resort deluxe ",
    //       equa:" 3,100 x 3 rooms x 1 night",
    //       price:"9,300"
    //     } ,


    //   ] ,
    //   totalStay:"₹46,800" ,
    //   itinerary: [
    //     {
    //       daynum: "1",
    //       title: " First day in Port Blair",
    //       para: "Be received at the Airport, the private driver will drive you to the hotel. Check into the hotel and take rest ,  After Lunch  cab will pick you and will reach Cellular jail, this is a must visit for any person as this place has many stories to tell people who love their countries dearly. Freedom fighters of India,were prisoned here. This place for its jail was also known as Kala Paani. Death waters. One that comes here, never returns. Rightfully it is so. 1300 kms away from the main land, in between the ocean, swimming is not the option. Spend time seeing the architecture and the way prisoners were treated. After seeing this place to your contempt, head towards Corbyns Cove Beach, one of the attractive beaches in Port Blair. Indulge in some water sports there. Jet skie or a speed boat ride & parasailing to snake island will thrill you. In the evening return to the cellular jail to see the light and sound show. The light and sound show for an hour will enlighten you with the history of the Cellular Jail. After the show, head back to the hotel. End of day 1.",
    //       totalcost: "3,430",
    //       from: "Port Blair Airport ",
    //       to: "hotel",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from airport and drop to hotel and trip around Port Blair" ,
    //           price:"1,175",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"275",
    //         } ,
    //         {
    //           trans:"Cellular jail entry tickets per head" ,
    //           price:"30 x 6 = 180",
    //         } ,
    //         {
    //           trans:"Cellular Jail Light and Sound show ticket per head" ,
    //           price:"300 x 6 = 1,800",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "2",
    //       title:
    //         "Trip to Baratang Island and lime stone caves & mud volcano (VIA ROAD)",
    //       para: "Early morning rise by 3:30am. Leave the hotel at 4:00am and head to Baratang. Will reach the entry gates of the convoy at 6:00am. Convoys are used to cross the restricted tribal area with police security. An hour through the tribal area, reach Middle Straight. Cross over on a vehicle ferry to Baratang Island. Then take a speed boat on sharing basis to reach the lime stone caves and the mangrove creek. Return to Baratang jetty in the noon and have lunch and then head to see mud volcano. Later return back to Baratang Jetty, use the vehicle ferry to get to Middle Straight. Board the waiting cab to head back to Port Blair in the 3:00pm convoy back through the tribal area. Reach the hotel in the evening and retire for the day. The tribe in the restricted area are called The Jarawas.",
    //       totalcost: "11,290",
    //       from: "hotel in Port Blair",
    //       to: " Baratang Island ",
    //       transport:[
    //         {
    //           trans:"A/c cab trip to Baratang" ,
    //           price:"4,000",
    //         } ,
    //         {
    //           trans:"Vehicle crossing ferry ticket to Baratang island" ,
    //           price:" 20 x 2 x 6 = 240",
    //         } ,
    //         {
    //           trans:"Speed boat on sharing basis tickets to Limestone caves" ,
    //           price:"900 x 6 = 5,400",
    //         } ,

    //         {
    //           trans:"Jeep ride to mud volcano" ,
    //           price:"275 x 6 = 1,650",
    //         } ,

    //       ] ,
    //     },

    //     {
    //       daynum: "3",
    //       title: "Trip to Swaraaj Dweep (Havelock) Island and stay",
    //       para: "Early morning rise and the cab will pickup at 7:00 am for the 8:00 am cruise. Be dropped at Port Blair jetty at 7:15am. Cruise sailing to Swaraaj Dweep (Havelock) is two hour thirty minutes on a good weather day. Reach Swaraaj Dweep (Havelock) by 9:45am. A/c cab with private driver will pick you from Swaraaj Dweep (Havelock) jetty and drop you to the respective hotel. After check in, rest for a while. First trip will be a visit to kalapathar beach. Its one of the most beautiful beaches in Swaraaj Dweep (Havelock) Island.Pristine blue waters welcomes you. Spend quality time at the beach and return to the hotel or any restaurant for lunch. After lunch head towards Radhanagar beach.Radhanagar beach is the 7th best beach in Asia, rated by Times and is the 25th best beach in the world. The sunset at Radhanagar beach is one of the best in the islands. After sunset return to the hotel and retire for the day.",
    //       totalcost: "11,210",
    //       from: "Port Blair jetty ",
    //       to: " Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from hotel to Port Blair jetty" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"200",
    //         } ,
    //         {
    //           trans:"Private passenger cruise tickets to Swaraaj Dweep (Havelock) Island from Port Blair" ,
    //           price:"1,435 x 6 = 8,610",
    //         } ,

    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) Island jetty and drop to hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Kalapathar and Radhanagar" ,
    //           price:"1,700",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "4",
    //       title: "Scuba Diving Day (Optional) and Visit Elephant Beach",
    //       para: "According to the scuba diving decision of the guests, this day we transfer the guest to Swaraajdweep jetty at to board the speed boat to reach Swaraaj Dweep (Havelock) jetty. Our coordinator will guide you to board the speed boat that will take you to Elephant beach. Elephant beach is known for its pristine beach and the coral reef with loads of fish life. Snorkelling is complimentary offered by the speed boat provider. You can indulge in sea walking too organized by sea link adventures.  Return to Swaraaj Dweep (Havelock) Jetty by lunch time. Head back to the hotel and retire for the day.",
    //       totalcost: "6,500",
    //       from: "Scuba Diving Day",
    //       to: "Elephant Beach ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from Hotel to Swaraajdweep jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Speed boat tickets on sharing basis to Elephant beach" ,
    //           price:"1,000 x 6 = 6,000",
    //         } ,
    //         {
    //           trans:"A/c cab pickup from Swaraaj Dweep (Havelock) jetty to Hotel" ,
    //           price:" 250",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "5",
    //       title:
    //         "Trip to Shaheed Dweep (Neil Island) from Swaraaj Dweep (Havelock) Island",
    //       para: "Early morning rise and after breakfast& checking out of the hotel, head to Swaraaj Dweep (Havelock) jetty to board the cruise to Shaheed Dweep (Neil Island) by 8:00 am for the sailing at 10:15 am. Reach Shaheed Dweep (Neil Island)at 11:15 am. A/c cab with private driver will pick you and drop you at the hotel for check in. After some rest, head to Bharathpur beach. One of the best beach in Shaheed Dweep (Neil Island) Indulge in some water sport activities like jet skie, glass bottom boat ride etc, on spot payments. Spend time until late evening and then head to Laxmanpur beach to see one of the best sunsets. Evening return to the hotel and retire for the day.",
    //       totalcost: "10,490",
    //       from: "Shaheed Dweep",
    //       to: "Swaraaj Dweep ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to Swaraaj Dweep (Havelock) jetty" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Shaheed Dweep (Neil Island) from Swaraaj Dweep" ,
    //           price:" 1,315 x 6 = 7,890",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and tour in Shaheed Dweep" ,
    //           price:"1,800",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"300",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "6",
    //       title:
    //         "Return from Neil Island in the morning cruise and Chidiyataapu (Bird sanctuary) Sunset point. ",
    //       para: "Early morning rise by 4:00am, the cab will pick you to drive you to sitapur beach. Sitapur beach is known for its beautiful beach and also the awesome sunrises. After the sunrise, head back to the hotel for breakfast.Checkout of the hotel and head to Neil Jetty to board the cruise back to Port Blair.Leave Neil at 11:30 am cruise and reach Port Blair at 12:40 pm. Be received at the jetty in Port Blair and check into the hotel. After lunch and rest at the hotel, head to visit Chidiyataapu, a bird sanctuary. A mini zoo is also there which you may visit. Chidiyataapu, mundapahad beach is also one of the best beaches in Port Blair. Spend time until evening and return to the hotel after witnessing a wonderful sunset. End of day",
    //       totalcost: " 10,930",
    //       from: "Neil Island",
    //       to: "Chidiyataapu Sunset point ",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and Sitapur beach visit" ,
    //           price:"800",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"300",
    //         } ,
    //         {
    //           trans:"Private passenger cruise ticket to Port Blair from Shaheed Dweep " ,
    //           price:"1,355 x 6 = 8,130",
    //         } ,
    //         {
    //           trans:"A/c cab pickup and drop at Port Blair hotel" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"250",
    //         } ,
    //         {
    //           trans:"A/c cab trip to Chidiyataapu and return to the hotel" ,
    //           price:"1,200",
    //         } ,

    //       ] ,
    //     },
    //     {
    //       daynum: "7",
    //       title: "Return Home with Sweet Memory.",
    //       para: "Early morning rise and after breakfast head to the airport according the flight schedule. If time provides, do some shopping on the way.",
    //       totalcost: "600",
    //       transport:[
    //         {
    //           trans:"A/c cab pickup from the hotel and drop to airport" ,
    //           price:"400",
    //         } ,
    //         {
    //           trans:"Extra cab for luggage" ,
    //           price:"200",
    //         } ,

    //       ] ,
    //       from: "hotel in Port Blair",
    //       to: "airport  ",

    //     },
    //   ],
    //   totalCost: "54,450",

    //   hotelCP:"46,800" ,
    //   transportTicket:[
    //     {
    //       title:"Total for transportation, entry tickets and speed boat tickets" ,
    //       price:"29,820"
    //     } ,
    //     {
    //       title:"Private passenger cruise tickets" ,
    //       price:"24,630"
    //     } ,

    //   ] ,
    //   packageTotal:"54,450" ,
    //   packageSubTotal:"1,01,250" ,
    //   serviceCharge:"25,312" ,
    //   GSTCharge:"1265" ,
    //   GrandTotal:127827 ,
    //   GrandTotal2:"1,27,827",
    //    numberOfPeople:6

    // },


  ];

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
