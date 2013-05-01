var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
     directory: {
        path: "./public"
     }
    }
});


server.route({
    method: 'GET',
    path: '/televisions',
    handler: function(request){
    	request.reply(televisions);
    }
});

server.route({
    method: 'GET',
    path: '/televisions/1',
    handler: function(request){
      request.reply(detailedTelevision);
    }
});

var detailedTelevision = { "description" : "The sleek Sceptre X322BV-HD HDTV delivers crystal-clear pictures and brings out the best in HD programming. Featuring a 3,000:1 dynamic contrast ratio, this LCD HDTV produces vivid pictures in a widescreen aspect ratio, so you can enjoy the picture from anywhere in your room. It can also be used as a computer monitor via the VGA port. It features three HDMI ports and boasts a competent 6.5ms response time, which makes it popular with avid console gamers. The digital broadcast HDTV can render a maximum resolution of 1366 x 768 pixels. The Sceptre 32\" class LCD 720p 60 Hz HDTV comes with a built-in ATSC digital/ NTSC analog/Clear QAM tuner that allows for a wide array of possible input formats. Unlike older audio-video formats, the single cable HDMI port transmits high definition video and audio together without using multiple cables. The TV features a neat, intuitive interface that helps you operate it easily without the bundled remote.",
    "images": ["./images/0079234323252_300X300.jpg", "./images/0079234323252_AV2_300X300.jpg", "./images/0079234323252_AV1_300X300.jpg","./images/0079234323252_AV_300X300.jpg"],
    "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
    "price" : "189.00",
    "rating" : "4.08",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "32",
    "relatedItems":  [
      { "description" : "The Sceptre X409BV-FHD 40\" 1080p LCD HDTV delivers top of the line picture and audio quality at an amazing value. It features a sleek and slim look that will give your home a new feeling with its enchanted glossy black housing that shines elegantly throughout the room. With an ultra fast response time of 8ms and a 60Hz refresh rate, this LCD TV with HDMI input lets you watch your favorite shows and movies flicker free. A high resolution of 1920 x 1080 enhances the image to look crisp and sharp and the amazing 90, 000:1 dynamic contrast automatically helps balance the images to look more vivid and lifelike. The digital tuner LCD TV's USB port helps further expand the functionality, allowing you to listen to music and view digital pictures quickly and conveniently.nnNote: You must have a source of HD programming in order to take full advantage of the Sceptre 39\" HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
        "image" : "./images/0079234324090_300X300.jpg",
        "name" : "Sceptre 40 Class (38.5\" viewable)LCD 1080p 60Hz HDTV, X409BV-FHD",
        "price" : "278.00",
        "rating" : "4.16",
        "brand": "Sceptre",
        "type": "LCD",
        "size": "40"
      },
      { "description" : "The Sceptre 32-Inch Class LCD HDTV features a crystal clear LCD display that emits bright and robust colors. Three HDMI ports allow you to connect your high-definition components all at once. The Sceptre LCD TV offers an ultra fast response time of 6.5ms for a crisp, flicker-free image at 1080p Full HD resolution. The additional feature of a USB port helps further expand the functionality of your TV, allowing you to listen to music and view digital pictures quickly and conveniently. The ultra-slim design and eye-catching finish complements stainless steel electronics for a high-end, modern look.",
        "image" : "./images/0079234323253_300X300.jpg",
        "name" : "Sceptre 32\" Class LCD 1080p 60Hz HDTV, X325BV-FHD",
        "price" : "218.00",
        "rating" : "4.22",
        "brand": "Sceptre",
        "type": "LCD",
        "size": "32"
      },
      { "description" : "The ELEMENT ELCFW328 32\" 720p 60Hz LCD HDTV features built-in stereo speakers with simulated surround sound for an entertaining video and audio experience. The stand detaches for easy wall-mounting with an optional mount. Note: You must have a source of HD programming in order to take full advantage of the ELEMENT LCD HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
        "image" : "./images/0009103740112_300X300.jpg",
        "name" : "ELEMENT ELCFW328 32\" 720p 60Hz LCD HDTV, Refurbished",
        "price" : "168.00",
        "rating" : "1",
        "brand": "ELEMENT",
        "type": "LCD",
        "size": "32"
      }
    ],
    "reviews": [

     { "iD" : "15739136__SUBMISSIONTIME_11347955",
            "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
            "overallRating" : "3",
            "ratings" : [ {
                  "label" : "Value",
                  "rating" : "2"
                },
                {
                  "label" : "Fit Accuracy",
                  "rating" : "1"
                },
                {
                  "label" : "Picture Quality",
                  "rating" : "5"
                },
                {
                  "label" : "Sound Quality",
                  "rating" : "1"
                },
                {
                  "label" : "Features",
                  "rating" : "3"
                }
              ],            
            "reviewText" : "i think that this is a great price for a tv but this sound needs to be louder. Also the power cord got a short the second day i had it.",
            "reviewer" : "ladyace05",
            "reviewerProfile" : [ { 
                "label" : "Age",
                  "value" : "25 - 34"
                },
                { "label" : "Gender",
                  "value" : "Female"
                },
                { "label" : "Ownership",
                  "value" : "3 - 4 months"
                },
                { "label" : "Usage",
                  "value" : "Every day"
                }
              ],
            "submissionTime" : "2013-04-29T13:29:08",
            "title" : "need to be louder"
          },
          { "iD" : "15739136__SUBMISSIONTIME_11346639",
            "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
            "overallRating" : "2",
            "ratings" : [ {
                  "label" : "Value",
                  "rating" : "3"
                },
                {
                  "label" : "Fit Accuracy",
                  "rating" : "1"
                },
                {
                  "label" : "Picture Quality",
                  "rating" : "4"
                },
                {
                  "label" : "Sound Quality",
                  "rating" : "3"
                },
                {
                  "label" : "Features",
                  "rating" : "3"
                }
              ],            
            "reviewText" : "I purchased this HDTV in June of 2012 for use in the bedroom. As a result it sees limited use compared with the primary TV in the family room. The picture quality was good for the sale price of $189 but it's not even close to the Sony Bravia 32\" in our lounge. The image is not as bright, vivid or crisp as the Sony, but for less than have the price, the image was very good in it's use as a secondary TV. The sound quality was average with no real bass and no real ability to handle movie sounds or music with great success. But it does work well in it's role as a bedroom unit playing primarily standard television programing. Unfortunately after only 10 months of service our unit has failed. During a recent power up the image shut off and only the sound remains. A strong odor of burnt electronics accompanied the failure. Sceptre requires that I ship the unit to them for warranty service and in either the original packaging (now gone) or request an approved package. I am required to pay shipping in either case. At a minimum this will be time consuming and cost between 10% and 15% of the original purchase price. Consider these potential future costs when opting for this price point model.",
            "reviewer" : "BP2012",
            "reviewerProfile" : [ { "label" : "Age",
                  "value" : "45 - 54"
                },
                { "label" : "Gender",
                  "value" : "Male"
                },
                { "label" : "Ownership",
                  "value" : "9 - 10 months"
                },
                { "label" : "Usage",
                  "value" : "Every few days"
                }
              ],
            "submissionTime" : "2013-04-29T11:17:01",
            "title" : "Good Picture while it lasted"
          },
          { "iD" : "15739136__SUBMISSIONTIME_11344205",
            "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
            "overallRating" : "5",
            "ratings" : [ {
                  "label" : "Value",
                  "rating" : "5"
                },
                {
                  "label" : "Fit Accuracy",
                  "rating" : "5"
                },
                {
                  "label" : "Picture Quality",
                  "rating" : "5"
                },
                {
                  "label" : "Sound Quality",
                  "rating" : "5"
                },
                {
                  "label" : "Features",
                  "rating" : "4"
                }
              ],            
            "reviewText" : "I usually only by Samsung, actually all I own is Samsung. I bought this for a spare bedroom. Seems to work almost as well. No complaints",
            "reviewer" : "Paris2003",
            "reviewerProfile" : [ { "label" : "Age",
                  "value" : "45 - 54"
                },
                { "label" : "Gender",
                  "value" : "Female"
                },
                { "label" : "Ownership",
                  "value" : "2 - 7 weeks"
                },
                { "label" : "Usage",
                  "value" : "Once per week"
                }
              ],
            "submissionTime" : "2013-04-29T08:14:14",
            "title" : "Great TV for the price."
          },
          { "iD" : "15739136__SUBMISSIONTIME_11341236",
            "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
            "overallRating" : "4",
            "ratings" : [ {
                  "label" : "Value",
                  "rating" : "5"
                },
                {
                  "label" : "Fit Accuracy",
                  "rating" : "4"
                },
                {
                  "label" : "Picture Quality",
                  "rating" : "4"
                },
                {
                  "label" : "Sound Quality",
                  "rating" : "4"
                },
                {
                  "label" : "Features",
                  "rating" : "5"
                }
              ],            
            "reviewText" : "This 32\" Sceptre LCD TV is everything I expected and more. Perfect for the bedroom and it has great picture quality. I love the way it compliments my bedroom as well.",
            "reviewer" : "CRell",
            "reviewerProfile" : [ { "label" : "Age",
                  "value" : "25 - 34"
                },
                { "label" : "Gender",
                  "value" : "Female"
                },
                { "label" : "Ownership",
                  "value" : "2 - 7 weeks"
                },
                { "label" : "Usage",
                  "value" : "Every day"
                }
              ],
            "submissionTime" : "2013-04-29T07:18:41",
            "title" : "Love it!!!"
          }

    ]
  };

var televisions = [ { "description" : "The sleek Sceptre X322BV-HD HDTV delivers crystal-clear pictures and brings out the best in HD programming. Featuring a 3,000:1 dynamic contrast ratio, this LCD HDTV produces vivid pictures in a widescreen aspect ratio, so you can enjoy the picture from anywhere in your room. It can also be used as a computer monitor via the VGA port. It features three HDMI ports and boasts a competent 6.5ms response time, which makes it popular with avid console gamers. The digital broadcast HDTV can render a maximum resolution of 1366 x 768 pixels. The Sceptre 32\" class LCD 720p 60 Hz HDTV comes with a built-in ATSC digital/ NTSC analog/Clear QAM tuner that allows for a wide array of possible input formats. Unlike older audio-video formats, the single cable HDMI port transmits high definition video and audio together without using multiple cables. The TV features a neat, intuitive interface that helps you operate it easily without the bundled remote.",
    "image" : "./images/0079234323252_300X300.jpg",
    "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD",
    "price" : "189.00",
    "rating" : "4.08",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The Sceptre X409BV-FHD 40\" 1080p LCD HDTV delivers top of the line picture and audio quality at an amazing value. It features a sleek and slim look that will give your home a new feeling with its enchanted glossy black housing that shines elegantly throughout the room. With an ultra fast response time of 8ms and a 60Hz refresh rate, this LCD TV with HDMI input lets you watch your favorite shows and movies flicker free. A high resolution of 1920 x 1080 enhances the image to look crisp and sharp and the amazing 90, 000:1 dynamic contrast automatically helps balance the images to look more vivid and lifelike. The digital tuner LCD TV's USB port helps further expand the functionality, allowing you to listen to music and view digital pictures quickly and conveniently.nnNote: You must have a source of HD programming in order to take full advantage of the Sceptre 39\" HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0079234324090_300X300.jpg",
    "name" : "Sceptre 40 Class (38.5\" viewable)LCD 1080p 60Hz HDTV, X409BV-FHD",
    "price" : "278.00",
    "rating" : "4.16",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "40"
  },
  { "description" : "The Sceptre 32-Inch Class LCD HDTV features a crystal clear LCD display that emits bright and robust colors. Three HDMI ports allow you to connect your high-definition components all at once. The Sceptre LCD TV offers an ultra fast response time of 6.5ms for a crisp, flicker-free image at 1080p Full HD resolution. The additional feature of a USB port helps further expand the functionality of your TV, allowing you to listen to music and view digital pictures quickly and conveniently. The ultra-slim design and eye-catching finish complements stainless steel electronics for a high-end, modern look.",
    "image" : "./images/0079234323253_300X300.jpg",
    "name" : "Sceptre 32\" Class LCD 1080p 60Hz HDTV, X325BV-FHD",
    "price" : "218.00",
    "rating" : "4.22",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "Introducing the new E-series slim frame design. The VIZIO 32\" Class LED 720p 60Hz HDTV,E320-A0 is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images with LED technology. A stunningly slim outer frame lets you enjoy TV with a narrower border around the picture for a more immersive experience  and lets you maximize the space in your entertainment area by allowing you to fit a larger screen size TV in the same space. Plus, this VIZIO 32\" LED TV is up to 50% more energy efficient*, to save you even more money.",
    "image" : "./images/0084522600769_300X300.jpg",
    "name" : "VIZIO 32\" Class LED 720p 60Hz HDTV,(3.34\" ultra-slim) E320-A0",
    "price" : "248.00",
    "rating" : "4.62",
    "brand": "VIZIO",
    "type": "LED",
    "size": "32"
  },
  { "description" : "Introducing the new E-series slim frame design. The VIZIO 32\"Class LED Smart TV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. A stunningly slim outer frame lets you enjoy TV with a narrower border around the picture for a more immersive experience.",
    "image" : "./images/0084522600770_300X300.jpg",
    "name" : "VIZIO 32\" Class LED 720p 60Hz SMART HDTV,(3.34\")  E320I-A0",
    "price" : "298.00",
    "rating" : "4.46",
    "brand": "VIZIO",
    "type": "LED",
    "size": "32"
  },
  { "description" : "The ELEMENT ELCFW328 32\" 720p 60Hz LCD HDTV features built-in stereo speakers with simulated surround sound for an entertaining video and audio experience. The stand detaches for easy wall-mounting with an optional mount. Note: You must have a source of HD programming in order to take full advantage of the ELEMENT LCD HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0009103740112_300X300.jpg",
    "name" : "ELEMENT ELCFW328 32\" 720p 60Hz LCD HDTV, Refurbished",
    "price" : "168.00",
    "rating" : "1",
    "brand": "ELEMENT",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "This bundle includes: Sceptre 40 class 1080p LCD HDTV Wireless Headphones ",
    "image" : "./images/1113007736308_300X300.jpg",
    "name" : "Sceptre 40 Class 1080p LCD HDTV with pair of Wireless Headphones",
    "price" : "299.00",
    "rating" : "-1",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "40"
  },
  { "description" : "",
    "image" : "./images/0088339300163_300X300.jpg",
    "name" : "RCA 32\" Class LCD 1080p 60Hz HDTV, 32LB45RQ",
    "price" : "258.00",
    "rating" : "4.38",
    "brand": "RCA",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The Sanyo 39\" LCD HDTV, DP39842 with integrated ATSC Digital and NTSC Analog Tuner is the latest technology for the digital age. In a glossy black finish, it blends into the background when the lights are dimmed for your movies, sports and favorite programs in any room of your home. Two HDMI, one combo composite component, one A/V and one USB port provide options for additional hookups. A coaxial digital audio output on the LCD 1080p 60Hz HDTV allows hookup to a home entertainment receiver amplifier system for theater-like sound. The USB with Photo Viewer feature allows display of your photos for all to easily see. With a thin, space-saving design, this Sanyo 39\" LCD HDTV, DP39842 can be positioned just about anywhere in your home. The detachable stand legs allow it to be wall mounted with a wall mount kit (not included).",
    "image" : "./images/0008648308042_300X300.jpg",
    "name" : "Sanyo 39\" Class LCD 1080p 60Hz HDTV, DP39842",
    "price" : "298.00",
    "rating" : "4.29",
    "brand": "Sanyo",
    "type": "LCD",
    "size": "39"
  },
  { "description" : "The Sceptre 32-Inch Class LED 720p 60Hz HDTV with built-in DVD player delivers superior picture quality with bright color and clear 5.1 digital audio. With three HDMI ports, you can easily connect all your favorite HD components. This high-definition TV has a refresh rate of 60Hz and a 16:9 aspect ratio. It also features an LED display with an ultra-fast 6.5ms response time. The digital tuner HDTV with all-in-one ATSC/NTSC/QAM allows you to watch HDTV programs in digital broadcasts, and has a dynamic contrast ratio of 20,000:1 to provide a life-like viewing experience. This ultra-slim LED TV is wall mountable and has VESA standard mounting holes of approximately eight inches by four inches that are designed to fit most standard brackets.Note: In order to take full advantage of the Sceptre 32-Inch HDTV, you must have a source of HD programming. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0079234333290_300X300.jpg",
    "name" : "Sceptre 32\" Class LED 720p 60Hz HDTV(2.35\" ultra-slim) with Built-in DVD Player, E325BD-HD, Black",
    "price" : "258.00",
    "rating" : "3.92",
    "brand": "Sceptre",
    "type": "LED",
    "size": "32"
  },
  { "image" : "./images/0084522600777_300X300.jpg",
    "name" : "VIZIO E390-A1 39\" 1080p 60Hz LED (2.95\" ultra-slim) HDTV",
    "price" : "368.00",
    "rating" : "4.10",
    "brand": "VIZIO",
    "type": "LED",
    "size": "39"
  },
  { "description" : "The RCA 32\" Class LCD 1080p 60Hz HDTV provides an amazing full HD entertainment experience. The 32-inch LCD TV 1080p HDTV has plenty of inputs for all of your audio and video sources, with two HDMI ports for a Blu-ray player and other HD devices.Note: You must have a source of HD programming in order to take full advantage of the RCA 32\" LCD HDTV 1080p 32LB45RQ. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/1113007391356_300X300.jpg",
    "name" : "RCA 32\" LCD 1080p 60Hz, 32LB45RQ, RCA Home Theater System, 6ft HDMI Cable, TV Bundle",
    "price" : "339.00",
    "rating" : "-1",
    "brand": "RCA",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "Enjoy your favorite programs on the E325BV-HDC Sceptre 32\" Class LED 720p 60Hz HDTV. This 3.0\" Ultra-Slim LED HDTV features a built-in ATSC/NTSC/Clear QAM tuner, three HDMI inputs and is wall mountable to create a modern, elegant look in the room. With the Sceptre 32\" LED 720p HDTV, you can watch digital broadcasts, including HDTV programs where available. View your movies as the director intended with HDMI, the one cable audio/video solution for this Sceptre 32\" LED 720p HDTV. Featuring high resolution and a true 16:9 aspect ratio, the 3.0\" Ultra-Slim LED HDTV will provide you with a crisp, clear picture. Enhance your TV viewing experience for brighter, livelier entertainment with this E325BV-HDC Sceptre 32\" Class LED 720p 60Hz HDTV. The screen size of 32\" of this Ultra-Slim LED HDTV refers to the measurement running diagonally from corner to corner. Bring your family a higher degree of viewing quality with the LED HDTV.",
    "image" : "./images/0079234333204_300X300.jpg",
    "name" : "Sceptre E325BV-HDC 32\" 720p 60Hz Class LED (3.0\" ultra-slim)  HDTV",
    "price" : "204.98",
    "rating" : "4.29",
    "brand": "Sceptre",
    "type": "LED",
    "size": "32"
  },
  { "description" : "With LED technology, the energy-efficient Samsung 32\" 720p 60Hz LED HDTV produces a brilliant, clear picture. Dolby Digital Plus/Dolby Pulse is an advanced surround sound feature that optimizes the TV's audio from connected devices. And the Wide Color Enhancer Plus feature delivers vibrant colors and natural-looking images.Note: You must have a source of HD programming in order to take full advantage of the Samsung 32\" 720p 60Hz LED HDTV. Contact your local cable or satellite TV service provider for details on how to upgrade.",
    "image" : "./images/0003672523830_300X300.jpg",
    "name" : "Samsung 32\" Class LED 720p 60Hz HDTV,(3.7\" ultra-slim)  UN32EH4003",
    "price" : "298.00",
    "rating" : "4.49",
    "brand": "Samsung",
    "type": "LED",
    "size": "32"
  },
  { "description" : "Introducing the E-series slim frame design. The VIZIO 37\" LED HDTV, E370-A0 is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value.Note: You must have a source of HD programming in order to take full advantage of the VIZIO 37\" LED HDTV, E370-A0. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0084522602048_300X300.jpg",
    "name" : "VIZIO E370-A0 37\" 720p 60Hz Class LED (3.07\" ultra-slim) HDTV",
    "price" : "348.00",
    "rating" : "4.40",
    "brand": "VIZIO",
    "type": "LED",
    "size": "37"
  },
  { "description" : "The RCA 39\" Class LCD 1080P 60Hz HDTV provides you with a brilliant full HD 1080p picture for your viewing pleasure. The wide 178-degree vertical and 178-degree horizontal angles enable optimal views from anywhere in the room, and its ultra-slim design allows you to set it up on a stand or mount it on a wall. The wall-mountable LCD TV delivers 3-D surround sound for a realistic movie experience. It also has a PC video input to connect your computer so you can enjoy high-definition images. The Energy Star-qualified LCD HDTV doesn't consume much power and is eco-friendly.",
    "image" : "./images/0088339300260_300X300.jpg",
    "name" : "RCA 39\" Class LCD 1080p 60Hz HDTV, 39LB45RQ",
    "price" : "318.00",
    "rating" : "4.23",
    "brand": "RCA",
    "type": "LCD",
    "size": "39"
  },
  { "description" : "The LG 32LN5300 32\" 1080p 60Hz LED HDTV features LED backlighting for amazing brightness, clarity and contrast detail. With TruMotion 120Hz your sports and action movies will look crystal clear with no motion blur.Note: You must have a source of HD programming in order to take full advantage of the LG 32\" LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0071919258840_300X300.jpg",
    "name" : "LG 32LN5300 32\" 1080p 60Hz LED (3.11\" ultra-slim) HDTV",
    "price" : "348.00",
    "rating" : "-1",
    "brand": "LG",
    "type": "LED",
    "size": "32"
  },
  { "description" : "The JVC 32\" Class LCD 720p 60Hz HDTV and DVD Combo provides an excellent 720p HD picture for your viewing pleasure. Connect two HD devices with the provided HDMI outputs. Play DVDs conveniently on the built-in DVD playerNote: You must have a source of HD programming in order to take full advantage of the JVC 32\" HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0004683804717_300X300.jpg",
    "name" : "JVC 32\" Class LCD 720p 60Hz HDTV and DVD Combo, LT-32DM22",
    "price" : "299.98",
    "rating" : "-1",
    "brand": "JVC",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The Sceptre 32-Inch Class LED 720p 60Hz HDTV with built-in DVD player delivers superior picture quality with bright color and clear 5.1 digital audio. With three HDMI ports, you can easily connect all your favorite HD components. This high-definition TV has a refresh rate of 60Hz and a 16:9 aspect ratio. It also features an LED display with an ultra-fast 6.5ms response time. The digital tuner HDTV with all-in-one ATSC/NTSC/QAM allows you to watch HDTV programs in digital broadcasts, and has a dynamic contrast ratio of 20,000:1 to provide a life-like viewing experience. This ultra-slim LED TV is wall mountable and has VESA standard mounting holes of approximately eight inches by four inches that are designed to fit most standard brackets.Note: In order to take full advantage of the Sceptre 32-Inch HDTV, you must have a source of HD programming. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/1113021301578_300X300.jpg",
    "name" : "Sceptre 32\" Class LED 720p 60Hz HDTV(2.35\" ultra-slim) with Built-in DVD Player, E325BD-HD, Black with SoundBar, TV Bundle",
    "price" : "298.98",
    "rating" : "-1",
    "brand": "Sceptre",
    "type": "LED",
    "size": "32"
  },
  { "description" : "Add Sony HD to your office, dorm or anywhere in the house. Sporting a long list of image-enhancing features and a space-saving slim design, this LED HDTV makes any room more entertaining. Smartphone ready  video, photos and apps on the phone are re-sized and scaled to fit the larger TV screen while charging.Note: You must have a source of HD programming in order to take full advantage of the Sony 32\" LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0002724286286_300X300.jpg",
    "name" : "Sony KDL-32R400A 32\" 720p 60Hz Class LED HDTV",
    "price" : "328.00",
    "rating" : "5",
    "brand": "Sony",
    "type": "LED",
    "size": "32"
  },
  { "description" : "The Sceptre 32-Inch Class LCD HDTV features a crystal clear LCD display that emits bright and robust colors. Three HDMI ports allow you to connect your high-definition components all at once. The Sceptre LCD TV offers an ultra fast response time of 6.5ms for a crisp, flicker-free image at 1080p Full HD resolution. The additional feature of a USB port helps further expand the functionality of your TV, allowing you to listen to music and view digital pictures quickly and conveniently. The ultra-slim design and eye-catching finish complements stainless steel electronics for a high-end, modern look.",
    "image" : "./images/1113021301577_300X300.jpg",
    "name" : "Sceptre 32\" Class LCD 1080p 60Hz HDTV, X325BV-FHD with SoundBar, TV Bundle",
    "price" : "268.98",
    "rating" : "-1",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The Emerson 39-inch Class LCD 1080p 60Hz HDTV delivers a superior-quality picture. It supports full HD 1080p resolution with a true widescreen 16:9 aspect ratio for your viewing pleasure. This wall-mountable LCD TV has a built-in digital tuner to stream your favorite digital broadcasts, including HDTV programs. HD devices can be connected via the included HDMI ports. This full HD 1080p LCD HDTV has wide viewing angles to enable you to watch from any corner of your room. It is compatible with up to 400mm x 200mm VESA mounting standard. The TV is Energy Star-rated, meaning that it consumes less power and is cost efficient.Note: You must have a source of HD programming in order to take full advantage of the Emerson 39-inch HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0005381824563_300X300.jpg",
    "name" : "Emerson 39\" Class LCD 1080p 60Hz HDTV, LC391EM3",
    "price" : "328.00",
    "rating" : "4.13",
    "brand": "Emerson",
    "type": "LCD",
    "size": "39"
  },
  { "description" : "The sleek Sceptre X322BV-HD HDTV delivers crystal-clear pictures and brings out the best in HD programming. Featuring a 3,000:1 dynamic contrast ratio, this LCD HDTV produces vivid pictures in a widescreen aspect ratio, so you can enjoy the picture from anywhere in your room. It can also be used as a computer monitor via the VGA port. It features three HDMI ports and boasts a competent 6.5ms response time, which makes it popular with avid console gamers. The digital broadcast HDTV can render a maximum resolution of 1366 x 768 pixels. The Sceptre 32\" class LCD 720p 60 Hz HDTV comes with a built-in ATSC digital/ NTSC analog/Clear QAM tuner that allows for a wide array of possible input formats. Unlike older audio-video formats, the single cable HDMI port transmits high definition video and audio together without using multiple cables. The TV features a neat, intuitive interface that helps you operate it easily without the bundled remote.",
    "image" : "./images/1113021301579_300X300.jpg",
    "name" : "Sceptre 32\" Class LCD 720p 60Hz HDTV, X322BV-HD with SoundBar, TV Bundle",
    "price" : "257.98",
    "rating" : "-1",
    "brand": "Sceptre",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The Hitachi L32C205 Class 720p 60HZ LCD HDTV features an excellent 720p picture for your viewing pleasure. Connect up to three HD devices via the provided HDMI ports.Note: You must have a source of HD programming in order to take full advantage of the Hitachi 32\" LCD HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0005058512796_300X300.jpg",
    "name" : "Hitachi L32C205 32\" 720p 60Hz Class LCD HDTV",
    "price" : "229.98",
    "rating" : "4.29",
    "brand": "Hitachi",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The LG 32LN530B 32\" 720p 60Hz LED HDTV features 2 HDMI inputs.Note: You must have a source of HD programming in order to take full advantage of the LG 32\" LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0071919258842_300X300.jpg",
    "name" : "LG 32LN530B 32\" 720p 60Hz LED (3.11\" ultra-slim) HDTV",
    "price" : "328.00",
    "rating" : "-1",
    "brand": "LG",
    "type": "LED",
    "size": "32"
  },
  { "description" : "The Sanyo LCD 720p 60Hz HDTV with integrated ATSC Digital and NTSC Analog Tuner is the latest technology for the digital age. The digital tuner within the Sanyo 32\" LCD HDTV is Digital Clear QAM capable of receiving unscrambled digital cable. In a high gloss black finish, this digital HDTV blends into the background when the lights are dimmed for your movies, sports and favorite programs in your den or living room. Having a full array of inputs, you have plenty of options for DVD, VCR, cable, satellite and external antenna hookups. A coaxial digital audio output allows hookup to a home entertainment receiver amplifier system for theater like sound. A USB input allows photo viewer display of JPEG photos. With a thin, space-saving design and small footprint, the digital HDTV can be positioned anywhere. Note: You must have a source of HD programming in order to take full advantage of the Sanyo LCD 720p 60Hz HDTV. Contact your local cable or satelli",
    "image" : "./images/0008648308041_300X300.jpg",
    "name" : "Sanyo 32\" Class LCD 720p 60Hz HDTV",
    "price" : "198.00",
    "rating" : "3.31",
    "brand": "Sanyo",
    "type": "LCD",
    "size": "32"
  },
  { "description" : "The LG 39LN5300 39\" 1080p 60Hz LED HDTV features LED backlighting for amazing brightness, clarity and contrast detail. With TruMotion 120Hz your sports and action movies will look crystal clear with no motion blur.Note: You must have a source of HD programming in order to take full advantage of the LG 39\" LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0071919258839_300X300.jpg",
    "name" : "LG 39LN5300 39\" 1080p 60Hz LED (3.11\" ultra-slim) HDTV",
    "price" : "428.00",
    "rating" : "5",
    "brand": "LG",
    "type": "LED",
    "size": "39"
  },
  { "description" : "Turn on true high-definition entertainment with the Samsung UN39EH5003 LED HDTV. Start with the stunning clarity and picture-perfect detail of Full HD 1080p resolution on a 39\" LED screen. A 120 Clear Motion Rate ensures smooth and fluid action. And the Wide Color Enhancer Plus means colors are more realistic from the deepest dark tones to the brightest whites.Note: You must have a source of HD programming in order to take full advantage of the Samsung 39\" LED HDTV With Class LED (3 3/4\" ultra-slim). Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0003672523831_300X300.jpg",
    "name" : "Samsung UN39EH5003 39\" 1080p 60Hz Class LED (3 3/4\" ultra-slim) HDTV",
    "price" : "428.00",
    "rating" : "4.36",
    "brand": "Samsung",
    "type": "LED",
    "size": "39"
  },
  { "description" : "This ELEMENT ELEFQ391J 39\" 1080p 60Hz LCD HDTV with JBL Speaker and Subwoofer features a 16:9 aspect ratio so you can view your movies as the director intended.Note: You must have a source of HD programming in order to take full advantage of the ELEMENT 39\" LCD HDTV. Contact your local cable or satellite TV provider for details on how to upgrade.",
    "image" : "./images/0081721901046_300X300.jpg",
    "name" : "ELEMENT ELEFQ391J 39\" 1080p 60Hz LCD HDTV with JBL Speaker and Subwoofer",
    "price" : "298.00",
    "rating" : "-1",
    "brand": "ELEMENT",
    "type": "LCD",
    "size": "39"
  },
   {
      "brand": "LG",
      "type": "LED",
      "size": "55",
      "price":"698.00",
      "image":"./images/0071919258446_300X300.jpg",
      "name":"LG 55LS4500 55\" 1080p 120Hz Edge 2D LED (1.4\" ultra-slim)  HDTV",
      "rating":"4.62",
      "description":"With the LG 55\" 55LS4500 LED HDTV, you can get Full HD 1080p picture quality and TruMotion 120Hz technology. The 1080p 120Hz Edge 2D LED HDTV features a built-in tuner for watching digital broadcasts, two HDMI inputs for extra connectivity and true 16:9 aspect ratio. This 1.4\" ultra-slim LG LED HDTV is large for the whole family to enjoy the big game or movie night. It can also be used as a computer monitor. The LG 1080p 120Hz Edge 2D LED HDTV is wall mountable.  You must have a source of HD programming in order to take full advantage of the LG 55\" 55LS4500 LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "60",
      "price":"998.00",
      "image":"./images/1113017176282_300X300.jpg",
      "name":"VIZIO 60\" Class LED 1080p 120Hz SMART HDTV, ( 1.94\" ultra-slim)  E601i-A3 with Wall Mount, TV Bundle",
      "rating":"-1",
      "description":"This season, go big with VIZIO. The E601i-A3 VIZIO 60\" LED 1080p 120Hz SMART HDTV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. VIZIO Internet Apps with built-in Wi-Fi puts your favorite apps like Netflix and YouTube right on the big screen all at the push of a button on the smart remote with keyboard."
   },
   {
      "brand": "LG",
      "type": "LED",
      "size": "55",
      "price":"798.00",
      "image":"./images/0071919258390_300X300.jpg",
      "name":"LG 55LM4600 55\" 1080p 120Hz 3D LED HDTV (1.4\" Ultra-Slim)",
      "rating":"4.65",
      "description":"The LG 55LM4600 HDTV is a beautiful LED display that offers all the innovations you need for an outstanding viewing experience. Sporting events, action flicks and high-brow cinema have never looked better! With almost double the pixel resolution, Full HD 1080p provides superior picture quality over standard HDTV. You'll see details and colors like never before. TruMotion 120Hz technology lets you see sports, video games and high-speed action with virtually no motion blur. Now your TV can keep up with your fast-moving entertainment. You must have a source of HD programming in order to take full advantage of the 55\" LG LED 1080p 120Hz HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "50",
      "price":"648.00",
      "image":"./images/0084522600781_300X300.jpg",
      "name":"VIZIO E500i-A1 50\" 1080p 120Hz LED (3.19\" ultra-slim)  HDTV with Built-in WiFi Smart TV",
      "rating":"4.47",
      "description":"Introducing the new E-series slim frame design. The VIZIO 50\" Class LED Smart TV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images in 1080p Full HD and 120Hz effective refresh rate. A stunningly slim outer frame lets you enjoy TV with a narrower border around the picture for a more immersive experience.The VIZIO E500i-A1 50\" LED HDTV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images in 1080p Full HD and 120Hz Effective Refresh Rate on this 3.19\" ultra-slim VIZIO LED HDTV. A stunningly slim outer frame lets you enjoy TV with a narrower border around the picture for a more immersive experience on the VIZIO E500i-A1 50\" LED HDTV. And since this 1080p 120Hz LED HDTV comes with Built-in WiFi and VIZIO Internet Apps, you get instant access to a world of streaming movies, TV shows, musi"
   },
   {
      "brand": "LG",
      "type": "LED",
      "size": "50",
      "price":"598.00",
      "image":"./images/0071919258447_300X300.jpg",
      "name":"LG 50LS4000 50\" 1080p 120Hz 2D LED (3.22\" ultra-slim)  HDTV",
      "rating":"4.47",
      "description":"Get Full HD 1080p picture quality and TruMotion 120Hz with the 3.22\" ultra-slim LG 50\" HDTV. The 50 inch panel on this LG 1080p HDTV gives a new meaning to watching movies at home. Experience top-of-the-line entertainment like never before with this 120Hz 2D LG LED HDTV and become everyone's favorite house for game night and movie night. The LG 1080p LED HDTV is also equipped with a built-in digital tuner so you can watch digital broadcasts and HDTV whenever available.  You must have a source of HD programming in order to take full advantage of the 3.22\" ultra-slim LG 50\" HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "65",
      "price":"1598.00",
      "image":"./images/0084522600753_300X300.jpg",
      "name":"VIZIO 65\" Class 3D LED 1080p 240Hz SMART HDTV, (2.25\" slim) M3D651SV",
      "rating":"4.79",
      "description":"With more entertainment to enjoy and more exciting ways to watch, the VIZIO M-Series 65\" Class Razor LED\" Smart TV with Theater 3D is the perfect upgrade everyone will love. Packed with the latest must-have features Internet Apps (V.I.A.), award-winning, flicker-free Theater 3D and stunning picture quality of Razor LED, 1080p Full HD, and 240Hz effective refresh rate this HDTV turns any room into your getaway to an exhilarating world of movies, sports and entertainment on demand. Enjoying favorites like Netflix, Amazon Instant Video, Hulu Plus, Skype and more is easier than ever with built-in WiFi and the included smart remote with keyboard. The VIZIO M-Series 65\" Class Razor LED\" Smart TV with Theater 3D gives you more of what you love about TV with all of the brilliant picture quality and world-class service you'd expect from America's LCD HDTV company."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "55",
      "price":"798.00",
      "image":"./images/0084522600764_300X300.jpg",
      "name":"VIZIO 55\" Class LED 1080p 120Hz SMART HDTV, M550VSE",
      "rating":"4.34",
      "description":"With more entertainment to enjoy and more exciting ways to watch, the VIZIO M-Series 55\" Class Razor LED Smart TV is the perfect upgrade everyone will love. Packed with the latest must-have features  VIZIO Internet Apps (V.I.A.) and stunning picture quality of Razor LED, 1080p Full HD, and 120Hz effective refresh rate this HDTV turns any room into your getaway to an exhilarating world of movies, sports and entertainment on demand. Enjoying favorites like Netflix, Hulu Plus, YouTube, Skype and more is easier than ever with built-in WiFi and the included smart remote with keyboard. The VIZIO M-Series 55\" Class Razor LED Smart TV gives you more of what you love about TV with all of the brilliant picture quality and world-class support you'd expect from America's #1 LCD HDTV company."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "47",
      "price":"598.00",
      "image":"./images/0084522600823_300X300.jpg",
      "name":"VIZIO E470i-A0 47\" 1080p 120Hz Class LED (3.23\" ultra-slim) Smart HDTV",
      "rating":"4.53",
      "description":"Introducing the E-series slim frame design. The VIZIO E470i-A0 47\" 1080p 120Hz LED HDTV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images in 1080p Full HD and 120Hz effective refresh rate with the VIZIO 47\" LED HDTV (3.23\" ultra-slim) Smart HDTV. A stunningly slim outer frame on the VIZIO 1080p LED HDTV lets you enjoy TV with a narrower border around the picture for a more immersive experience. You must have a source of HD programming in order to take full advantage of the VVIZIO E470i-A0 47\" 1080p 120Hz LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "Samsung",
      "type": "LED",
      "size": "46",
      "price":"698.00",
      "image":"./images/0088727600330_300X300.jpg",
      "name":"Samsung UN46ES6003 46\" 1080p 120Hz Class (1.8\" ultra-slim) LED HDTV",
      "rating":"4.70",
      "description":"A stylish design and stunning HD images makes the Samsung LED 1080p 120Hz HDTV, UN46ES6003 a great treat for any TV enthusiast. Start with a Slim LED design, which offers a slender profile for a striking visual effect, even before you turn the TV on. The Full HD 1080p resolution looks amazing on the Class (1.8\" ultra-slim) Samsung 1080p LED HDTV 46\" screen.  You must have a source of HD programming in order to take full advantage of the Samsung LED 1080p 120Hz HDTV, UN46ES6003. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LCD",
      "size": "50",
      "price":"548.00",
      "image":"./images/0084522600760_300X300.jpg",
      "name":"VIZIO 50\" Class LCD 1080p 60Hz HDTV, E500AR",
      "rating":"4.44",
      "description":"The VIZIO 50\" LCD 1080p 60Hz HDTV, E500AR delivers 1080p Full HD picture quality and superior audio quality at an amazing value. With SRS StudioSound HD you always get crisp and clear audio. Plus, our Ambient Light Sensing technology automatically adjusts your screen brightness for the best picture in any room. You must have a source of HD programming in order to take full advantage of the VIZIO 50\" LCD 1080p 60Hz HDTV, E500AR. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "42",
      "price":"538.00",
      "image":"./images/0084522600678_300X300.jpg",
      "name":"VIZIO 42\" Class LED 1080p 120Hz refresh rate HDTV, (1.9\" ultra-slim) M420SL",
      "rating":"4.48",
      "description":"li42\" diagonal screen sizeliHDMI Inputs: 4liWall mountableliSRS TruSurround HD"
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "60",
      "price":"748.00",
      "image":"./images/0079450489953_300X300.jpg",
      "name":"VIZIO E601i-A3 60\" 1080p 120Hz Class LED (1.94\" ultra-slim) Smart HDTV, Refurbished",
      "rating":"4.15",
      "description":"The E-Series 60\" Class Razor LED Smart TV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images in 1080p Full HD resolution with 120Hz Effective Refresh Rate with Smooth Motion on the VIZIO E601i-A3 60\" LED Smart HDTV. You must have a source of HD programming in order to take full advantage of the VIZIO E601i-A3 60\" LED Smart HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "47",
      "price":"658.00",
      "image":"./images/0084522600782_300X300.jpg",
      "name":"VIZIO M3D470KDE 47\" 1080p 120Hz (1.5\" ultra-slim)  LED 3D HDTV with Built-in WiFi",
      "rating":"4",
      "description":"With more entertainment to enjoy and more exciting ways to way, the VIZIO LED 1080p 120Hz HDTV M3D470KDE is the perfect upgrade everyone will love. Packed with the latest must-have features like VIZIO Internet Apps, award-winning, flicker-free Theater 3D and the stunning picture quality of razor thin LED, 1080p Full HD and 120Hz SPS refresh rate, this VIZIO 47\" LED HDTV turns any room into your getaway to an exhilarating world of movies, sports and entertainment on demand. Enjoying favorites like Netflix, Amazon Instant Video, Hulu Plus, Skype and more is easier than ever with built-in WiFi and the included smart remote with keyboard. Get more of what you love about TV with all of the brilliant picture quality and world-class service you want. You must have a source of HD programming in order to take full advantage of the VIZIO 3D HDTV (1.5\" ultra-slim) with Built-in WiFi. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "70",
      "price":"1698.00",
      "image":"./images/0084522600788_300X300.jpg",
      "name":"VIZIO 70\" Class Razor LED (2.35\" ultra-slim)  1080p 120Hz HDTV, E701i-A3, Smart TV",
      "rating":"4.47",
      "description":"The VIZIO Razor LED HDTV, E701i-A3 has 1080p Full HD resolution that delivers a crystal-clear picture, and a 120Hz refresh rate with smooth motion displays for fast action scenes with stunning detail and clarity. The 1,000,000:1 Dynamic Contrast Ratio creates deeper blacks, so even the darkest scenes come to life. Plus, our ambient light-sensing technology automatically adjusts your VIZIO Smart TV LED screen brightness for the best picture in any room. You must have a source of HD programming in order to take full advantage of the VIZIO 70\" LED With Class Razor LED 1080p 120Hz HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "60",
      "price":"998.00",
      "image":"./images/0084522600787_300X300.jpg",
      "name":"VIZIO 60\" Class LED 1080p 120Hz SMART HDTV (1.94\" ultra-slim), E601i-A3",
      "rating":"4.41",
      "description":"This season, go big with VIZIO. The E601i-A3 VIZIO 60\" LED 1080p 120Hz SMART HDTV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. VIZIO Internet Apps with built-in Wi-Fi puts your favorite apps like Netflix and YouTube right on the big screen all at the push of a button on the smart remote with keyboard."
   },
   {
      "brand": "Samsung",
      "type": "LED",
      "size": "40",
      "price":"528.00",
      "image":"./images/0003672523694_300X300.jpg",
      "name":"Samsung 40\" Class LED 1080p 60Hz HDTV, (3.7\" Ultra-Slim) UN40EH5300 Smart TV",
      "rating":"4.28",
      "description":"You'll never miss a moment with the Samsung 40\" Class 1080p 60Hz LED HDTV. Smart Content includes new ways to explore and locate your favorite shows, movies, games and more. A Full Web Browser with WiFi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the big screen. The Wide Color Enhancer Plus provides vibrant, natural-looking images on your Samsung 40\" Class 1080p 120Hz LED HDTV. You must have a source of HD programming in order to take full advantage of the Samsung 40\" Class LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "65",
      "price":"1298.00",
      "image":"./images/0084522600751_300X300.jpg",
      "name":"VIZIO 65\" Class LED 1080p 120Hz SMART HDTV, M650VSE",
      "rating":"4.64",
      "description":"With more entertainment to enjoy and more exciting ways to watch, the VIZIO M-Series Class Razor LED Smart TV is the perfect upgrade everyone will love. Packed with the latest must-have features  VIZIO Internet Apps (V.I.A.) and stunning picture quality of Razor LED, 1080p Full HD, and 120Hz effective refresh rate this HDTV turns any room into your getaway to an exhilarating world of movies, sports and entertainment on demand. Enjoying favorites like Netflix, Hulu Plus, YouTube, Skype and more is easier than ever with built-in Wi-Fi and the included smart remote with keyboard. The VIZIO M-Series 65\" Class Razor LED Smart TV gives you more of what you love about TV with all of the brilliant picture quality and world-class support you'd expect from America's LCD HDTV company."
   },
   {
      "brand": "VIZIO",
      "type": "LCD",
      "size": "47",
      "price":"599.00",
      "image":"./images/1113009363305_300X300.jpg",
      "name":"VIZIO 47\" Class LCD 1080p 60Hz HDTV,(3.7\" ultra-slim) E471VLE with RCA Home Theater System and HDMI Cable, TV Bundle",
      "rating":"-1",
      "description":"The VIZIO 47\" LCD TV delivers 1080p full-HD resolution for a quality picture. This ultra-slim VIZIO 47\" television features a 100,000 to 1 Dynamic Contrast Ratio for deeper blacks and brighter whites, and ambient light sensing technology for a perfectly-balanced picture that's never washed out or too bright. SRS StudioSound HD supplies advanced virtual surround sound, and two HDMI ports accommodate your satellite or cable TV and Blu-ray player. The VIZIO 47\" LCD TV also exceeds ENERGY STAR 5.3 Guidelines so the planet and your wallet are both better off. You must have a source of HD programming in order to take full advantage of the VIZIO 47\" LCD TV. Contact your local cable or satellite TV service provider for details on how to upgrade."
   },
   {
      "brand": "Sanyo",
      "type": "LCD",
      "size": "55",
      "price":"698.00",
      "image":"./images/1113011401917_300X300.jpg",
      "name":"Sanyo 55\" Class LCD 1080p 120Hz HDTV,DP55441 with Wall Mount, TV Bundle",
      "rating":"-1",
      "description":"The Sanyo 55\" LCD HDTV with integrated ATSC digital and NTSC analog tuner is the latest technology for the digital age.The digital tuner is Digital Clear QAM capable of receiving unscrambled digital cable. In a high-gloss black finish, this Sanyo 55\" 1080p TV blends into the background when the lights are dimmed for your movies, sports and favorite programs in your den or living room. With a full array of HDMI, Component Audio/Video, Composite Audio/Video and  RF inputs, you have plenty of options for DVD, VCR, Cable, Satellite and external antenna hookups. A coaxial digital audio output allows hookup to a home entertainment receiver amplifier system for theater-like sound. An additional PC/Mac input allows alternative use as a computer monitor. A  USB input allows Photo Viewer display of JPEG photos. With a thin space-saving design and small footprint, this Sanyo 55\" LCD HDTV can be positioned anywhere."
   },
   {
      "brand": "VIZIO",
      "type": "LCD",
      "size": "42",
      "price":"549.98",
      "image":"./images/1113009363310_300X300.jpg",
      "name":"VIZIO 42\" Class LCD 1080p 120Hz HDTV, E422VLE with RCA Home Theater System and HDMI Cable, TV Bundles",
      "rating":"-1",
      "description":"The VIZIO 42\" LCD TV with VIZIO Internet Apps can put the best of the Web right on your TV screen, allowing instant access to VUDU, Netflix, Hulu Plus, Pandora, Facebook, Twitter and more. With built-in Wi-Fi for easy setup, this VIZIO 42\" television also boasts 1080p full-HD resolution and a high 120Hz refresh rate for a superior picture. Its ambient light sensing technology ensures a perfectly balanced picture on the VIZIO 42\" LCD TV that's never washed out or too bright. You must have a source of HD programming in order to take full advantage of the VIZIO 42\" LCD TV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "Samsung",
      "type": "LCD",
      "size": "46",
      "price":"648.00",
      "image":"./images/0003672523744_300X300.jpg",
      "name":"Samsung 46\" Class LCD 1080p 60Hz HDTV, LN46E550",
      "rating":"4.29",
      "description":"With its fast response rate, the Samsung 46\" LCD TV offers remarkable smooth-motion scenes plus Dolby Digital Plus audio. It improves picture quality and provides vivid color reproduction. Thanks to the ConnectShare JPEG input, you'll also enjoy increased connectivity so you can easily connect your MP3 player or digital camera to your Samsung 46\" television. You must have a source of HD programming in order to take full advantage of the Samsung 46\" LCD TV. Contact your local cable or satellite TV service provider for details on how to upgrade."
   },
   {
      "brand": "Sanyo",
      "type": "LCD",
      "size": "50",
      "price":"528.00",
      "image":"./images/0008648308043_300X300.jpg",
      "name":"Sanyo 50\" Class LCD 1080p 60Hz HDTV, DP50842",
      "rating":"3.88",
      "description":"The 1080p 60Hz Sanyo 50\" LCD HDTV, DP50842 with integrated ATSC Digital and NTSC Analog Tuner is the latest technology for the digital age. The digital tuner is Digital Clear QAM capable of receiving unscrambled digital cable. In a high gloss black finish, it blends into the background when the lights are dimmed for your movies, sports and favorite programs in your den or living room. Having a full array of inputs, you have plenty of options for DVD, VCR, cable, satellite and external antenna hookups. A coaxial digital audio output allows hookup to a home entertainment receiver amplifier system for theater like sound. A USB input allows photo viewer display of JPEG photos. With a thin, space-saving design and small footprint, it can be positioned anywhere. You must have a source of HD programming in order to take full advantage of the 1080p 60Hz Sanyo 50\" LCD HDTV, DP50842. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "LG",
      "type": "LED",
      "size": "42",
      "price":"548.00",
      "image":"./images/0071919258442_300X300.jpg",
      "name":"LG 42LM3700 42\" 1080p 60Hz Cinema 3D LED (3.0\" ultra-slim) Soundbar/HDTV Bundle",
      "rating":"4.65",
      "description":"When you have 3D at home, entertainment takes on a whole new dimension. Get all the depth and excitement of the 3D you experience in the theater with LG Cinema 3D and with the included LG Sound Bar System, you'll take your movies, music, and entertainment to a whole new level. Hear a wide spacious sound from just one slim speaker system on the LG 42\" 1080p 60hz LED HDTV, 42LM3700. You must have a source of HD programming in order to take full advantage of the LG 42\" 1080p 60hz LED HDTV, 42LM3700. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "Seiki",
      "type": "LCD",
      "size": "60",
      "price":"698.00",
      "image":"./images/0085925900225_300X300.jpg",
      "name":"Seiki SC-601GS 60\" 1080p 120Hz LCD HDTV",
      "rating":"4.57",
      "description":"The Seiki SC-601GS 60\" 1080p 120Hz LCD HDTV provides an amazing Full HD entertainment experience for your TV shows, movies and games. The 120Hz refresh rate, high brightness and 4 ms response time ensures a lifelike picture for even the fastest action scenes! You must have a source of HD programming in order to take full advantage of the Seiki 60\" LCD HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "VIZIO",
      "type": "LED",
      "size": "55",
      "price":"798.00",
      "image":"./images/0084522600798_300X300.jpg",
      "name":"VIZIO E550I-A0 55\" 1080p 120Hz LED (3.78\" ultra-slim) Smart HDTV",
      "rating":"4",
      "description":"The VIZIO E550I-A0 55\" 1080p 120Hz LED Smart HDTV is shattering the mold in a way only VIZIO can, with high-quality design and picture at the best value. Enjoy crystal-clear action and eye-popping images in 1080p Full HD and at a 120Hz refresh rate. A stunningly slim outer frame lets you enjoy TV with a narrower border around the picture for a more immersive experience. You must have a source of HD programming in order to take full advantage of the VIZIO 55\" LED HDTV. Contact your local cable or satellite TV provider for details on how to upgrade."
   },
   {
      "brand": "Samsung",
      "type": "LED",
      "size": "46",
      "price":"748.00",
      "image":"./images/0003672523695_300X300.jpg",
      "name":"Samsung 46\" Class LED 1080p 60Hz HDTV, (3.7\" ultra-slim) UN46EH5300 Smart TV",
      "rating":"4.56",
      "description":"Enjoy new ways to watch TV on the Samsung 46\" LED TV, UN46EH5300. Smart Content includes new ways to explore and locate your favorite shows, movies, games and more on this Samsung 46\" television. A full Web Browser with Wi-Fi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the Samsung 46\" LED TV. The Wide Color Enhancer Plus of the Samsung 46\" LED TV provides vibrant natural-looking images. You must have a source of HD programming in order to take full advantage of the Samsung 46\" LED TV. Contact your local cable or satellite TV service provider for details on how to upgrade."
   }
];
// Start the server
server.start();