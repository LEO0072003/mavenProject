import d2 from "../assets/d2.png"
import d1 from "../assets/detail1.png"
import location from "../assets/location.png"
import copy from "../assets/detailcopy2.png"
import rec90 from "../assets/Rectangle 1920.png";
import copy1 from "../assets/detailcopy1.png";
import rec92 from "../assets/Rectangle 1922.png";

// import images 



// ============= PDSec1 file data ===============

export const HEROSECTION_IMAGES = [
     {
        img:d2 , 
     } , 
     {
        img: d1 
     } ,
     {
        img: d1 
     } ,
     {
        img: d1 
     } ,
     {
        img: d1 
     } ,
]

export const HEROSECTION_IMAGES_SMALLSCREEN = [
   {
    img: rec90 ,
   } , 
   {
    img: rec90 ,
   } , 
   {
    img: rec90 ,
   } , 
]

// ============== PDSec2.jsx file data START =============


// *****************LEFT SIDE CONTENT START ***************

//CLASSNAME (pdSec2left)
 export const LEFTSIDECONTENT1 = {
  heading:"Create the Chapters of Love in the Andamans" , 

//   CLASSNAME(pds22leftop)
   totaldays:"5" , 
   totalNight:"5" , 

    dayin:[
        {
            daynum:"1" , 
            destiny:"Portblair"
        } , 
        {
            daynum:"1" , 
            destiny:"Bihar"
        } , 
        {
            daynum:"1" , 
            destiny:"haldwani"
        } , 
        {
            daynum:"1" , 
            destiny:"haldwani"
        } , 
    ] , 

    // CLASSNAME (includedSec)
    includedSection:[
     {
        img: location ,
        title:"Transfer Included"
     } , 
     {
        img: location ,
        title:"Stay Included"
     } , 
     {
        img: location ,
        title:"Transfer Included"
     } , 
     {
        img: location ,
        title:"Stay Included"
     } , 
     {
        img: location ,
        title:"Stay Included"
     } , 
    ]
     , 

     tripHighlightsHeading:"Trip Highlights" , 
     tripHightlight:[
        " Gear up for exciting sea kart and water-scooter rides that promise a thrilling adventure in Andaman." , 
        " Gear up for exciting sea kart and water-scooter rides that promise a thrilling adventure in Andaman." , 
        " Gear up for exciting sea kart and water-scooter rides that promise a thrilling adventure in Andaman." , 
     ]  ,

    //  CLASSNAME (destinydetailssec)
    destinyDetails : [
           {
            img: copy , 
            daynum:"1" , 
            title:"Arrival in Portblair" , 
            totalCost:"$10" , 
            description:"After arrival, you will be transferred to the hotel for check in. Later, you will get transferred to the Corbyn Cove Beach, admire its beautiful shore and palm trees. Next, you will visit the Cellular Jail and enjoy a light show, before getting dropped off at the hotel for an overnight stay." , 
            transportType:"Private" , 
            tranportIn:"Transfer in Sedan, SUV or similar" , 
            From:"Veer Savarkar International Airport " , 
            to:"ABC Hotel " , 
            stayAt:"Transfer in Sedan, SUV or similar" , 
            stayImg1: rec90, 
            stayImg2:rec90 , 
            stayImg3: rec92 ,
            activityHeading:"Day Trip to Corbyn Cove Beach and Cellular Jail on a Private basis" , 
            activityImage:copy1
           } , 
           {
            img: copy , 
            daynum:"2" , 
            title:"Arrival in haldwani" , 
            totalCost:"$20" , 
            description:"After, you will be transferred to the hotel for check in. Later, you will get transferred to the Corbyn Cove Beach, admire its beautiful shore and palm trees. Next, you will visit the Cellular Jail and enjoy a light show, before getting dropped off at the hotel for an overnight stay." , 
            transportType:"Public" , 
            tranportIn:"Transfer in uttarakhand" , 
            From:"Veer Savarkar International Airport " , 
            to:"XYZ HOTEL" , 
            stayAt:"Transfer in Sedan, SUV or similar" , 
            stayImg1: rec90, 
            stayImg2:rec90 , 
            stayImg3: rec92 ,
            activityHeading:"Day Trip to Corbyn Cove Beach and Cellular Jail on a Private basis" , 
            activityImage:copy1
           } , 
    ]

 }

// *****************LEFT SIDE CONTENT END ***************


// ***************** RIGHT SIDE CONTENT START *************

//  CLASSNAME (pdlepar1)
export const RIGHTSIDECONTENT1 = {
        amount: "20000" , 
        cutAmount: "15000" , 
        rating:"4.5" , 
        totalrating:"1k"
    }

    // CLASSNAME (formdetail)
    export const RIGHTSIDECONTENT2 = {
        heading:"Create the Chapters of Love in the Andamans INR"
    }

    // ***************** RIGHT SIDE CONTENT END *************


    // ****************** PDSec5.jsx CONTENT **********
   export const POLICIES = [
        {
            heading: "Hotel policies", 
            li: [
                "Couples are welcome", 
                "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
                "Only Indian Nationals allowed", 
                "As a complimentary benefit, your stay is now insured by Acko.", 
                "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
            ]
        },
        {
            heading: "Refund Policy", 
            li: [
                "Couples are welcome", 
                "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
                "Only Indian Nationals allowed", 
                "As a complimentary benefit, your stay is now insured by Acko.", 
                "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
            ]
        },
        {
            heading: "Cancellation policy", 
            li: [
                "Couples are welcome", 
                "Guests can check in using any local or outstation ID proof (PAN card not accepted).", 
                "Only Indian Nationals allowed", 
                "As a complimentary benefit, your stay is now insured by Acko.", 
                "This hotel is serviced under the trade name of Hotel Devi Palace Inn as per quality standards of OYO"
            ]
        },
    ];


    // ============== PDSec2.jsx file data END =============


