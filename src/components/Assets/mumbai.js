import t1 from"./1.jpg"
import t2 from"./2.jpg"
import t3 from"./3.jpg"
import t4 from"./4.jpg"
import t5 from"./5.jpg"
import t6 from"./6.jpg"
import t7 from"./7.jpg"
import t8 from"./8.jpg"
import t9 from"./9.jpg"

let mumbai =[
    {
      "id": 1,
      "name": "Gateway of India",
      "image": t1,
      "description": "The Gateway of India is an iconic monument located in Mumbai, built in 1924 to commemorate the visit of King George V and Queen Mary to India. It is a massive arch made of basalt, standing at a height of 26 meters, overlooking the Arabian Sea. This Indo-Saracenic architectural marvel is a major tourist attraction and serves as a symbolic entrance to India for visitors arriving by sea. It is a popular gathering spot for locals and tourists, offering breathtaking views, ferry rides to Elephanta Caves, and a glimpse into Mumbai's colonial past.",
      "category": "Historical",
      "city": "Mumbai",
      "timing": "24 Hours",
      "entry_fee": "Free",
      "rating": 4.8
    },
    {
      "id": 2,
      "name": "Chhatrapati Shivaji Maharaj Terminus",
      "image": t2,
      "description": "A UNESCO World Heritage Site, the Chhatrapati Shivaji Maharaj Terminus (CSMT) is one of Mumbai’s most iconic railway stations. Built in 1887, this historic station features a stunning blend of Victorian Gothic and Indian architectural styles, with intricate carvings, domes, stained glass windows, and a massive central dome. It is not just a transport hub but a masterpiece of colonial architecture that stands as a testament to Mumbai’s rich history. The station remains one of the busiest in India, serving millions of passengers daily, while also attracting history and architecture enthusiasts.",
      "category": "Historical",
      "city": "Mumbai",
      "timing": "24 Hours (Station); Museum hours vary",
      "entry_fee": "Free",
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "Marine Drive",
      "image": t3,
      "description": "Marine Drive, famously known as the 'Queen's Necklace' due to its streetlights forming a sparkling curve along the coastline, is a picturesque 3.6 km-long boulevard in South Mumbai. The road runs along the Arabian Sea, offering spectacular sunset views and a refreshing sea breeze. It is a favorite spot for locals and tourists who enjoy leisurely walks, jogging, or simply relaxing on the promenade. At night, the entire stretch glows beautifully, resembling a string of pearls, making it one of the most romantic and serene places in the city.",
      "category": "Scenic",
      "city": "Mumbai",
      "timing": "24 Hours",
      "entry_fee": "Free",
      "rating": 4.6
    },
    {
      "id": 4,
      "name": "Elephanta Caves",
      "image": t4,
      "description": "The Elephanta Caves, located on Elephanta Island, are a UNESCO World Heritage Site and one of the most remarkable rock-cut cave temple complexes in India. Dating back to the 5th-7th century, these caves contain intricately carved sculptures and temples dedicated to Hindu deities, primarily Lord Shiva. The most famous sculpture inside the caves is the massive 'Trimurti' statue, depicting Shiva as the creator, preserver, and destroyer. A short ferry ride from Mumbai’s Gateway of India takes visitors to this historical and spiritual site, surrounded by lush greenery and offering a glimpse into ancient Indian artistry.",
      "category": "Historical",
      "city": "Mumbai",
      "timing": "9:00 AM - 5:30 PM (Closed on Mondays)",
      "entry_fee": "₹40 for Indians; ₹600 for foreigners",
      "rating": 4.5
    },
    {
      "id": 5,
      "name": "Siddhivinayak Temple",
      "image": t5,
      "description": "Siddhivinayak Temple, one of Mumbai’s most revered religious sites, is dedicated to Lord Ganesha. Built in 1801, this temple attracts millions of devotees each year, including Bollywood celebrities and politicians. The temple's sanctum houses a beautiful black stone idol of Ganesha with a distinct trunk curvature. Devotees believe that prayers offered here bring prosperity and success. The temple complex also has a library and a meditation hall, and Tuesdays witness the maximum footfall as it is considered an auspicious day for Lord Ganesha worshippers.",
      "category": "Religious",
      "city": "Mumbai",
      "timing": "5:30 AM - 10:00 PM",
      "entry_fee": "Free",
      "rating": 4.8
    },
    {
      "id": 6,
      "name": "Haji Ali Dargah",
      "image": t6,
      "description": "Haji Ali Dargah is an exquisite Indo-Islamic shrine located on a tiny islet in the Arabian Sea, connected to Mumbai’s coastline via a narrow causeway. Built in the 15th century, the dargah is the final resting place of Saint Pir Haji Ali Shah Bukhari. It is one of Mumbai’s most significant religious sites, attracting devotees of all faiths. The structure is surrounded by water at high tide, making it appear like it’s floating. Apart from its spiritual significance, the dargah is admired for its stunning white marble architecture and peaceful ambiance.",
      "category": "Religious",
      "city": "Mumbai",
      "timing": "5:30 AM - 10:00 PM",
      "entry_fee": "Free",
      "rating": 4.4
    },
    {
      "id": 7,
      "name": "Chowpatty Beach",
      "image": t7,
      "description": "Chowpatty Beach, located in South Mumbai, is a lively beach famous for its street food stalls serving local delicacies like pav bhaji, bhel puri, and kulfi. The beach is a popular destination for families, joggers, and tourists looking to unwind by the sea. It is particularly famous for the grand celebrations of Ganesh Chaturthi, where thousands gather to immerse Lord Ganesha idols into the sea. In the evenings, the beach transforms into a vibrant spot with children playing, locals relaxing, and vendors offering a variety of snacks and rides.",
      "category": "Recreational",
      "city": "Mumbai",
      "timing": "24 Hours",
      "entry_fee": "Free",
      "rating": 4.3
    },
    {
      "id": 8,
      "name": "Sanjay Gandhi National Park",
      "image": t8,
      "description": "Sanjay Gandhi National Park (SGNP) is a vast green oasis within Mumbai, covering over 100 square kilometers. It is home to diverse flora and fauna, including leopards, deer, monkeys, and over 270 species of birds. One of the park's main attractions is the Kanheri Caves, a group of ancient Buddhist caves with intricate carvings. The park offers activities like jungle safaris, nature trails, and boating, making it a perfect getaway for nature lovers. It provides a refreshing escape from the city's hustle and is ideal for wildlife enthusiasts and trekkers.",
      "category": "Nature",
      "city": "Mumbai",
      "timing": "7:30 AM - 6:00 PM",
      "entry_fee": "₹85 for Indians; ₹600 for foreigners",
      "rating": 4.5
    },
    {
      "id": 9,
      "name": "Taraporewala Aquarium",
      "image": t9,
      "description": "Taraporewala Aquarium is Mumbai’s oldest and most famous aquarium, showcasing a diverse collection of marine and freshwater species. The aquarium features exotic fish, sharks, turtles, stingrays, and coral exhibits. It is an educational and entertaining attraction for children and marine life enthusiasts. The touch pool section allows visitors to interact with certain species, and the newly introduced tunnel tank provides a mesmerizing experience of underwater life. Located near Marine Drive, it offers a great way to explore marine biodiversity in the heart of the city.",
      "category": "Educational",
      "city": "Mumbai",
      "timing": "10:00 AM - 8:00 PM",
      "entry_fee": "₹60 for Indians; ₹200 for foreigners",
      "rating": 4.2
    }
  ]

  export default mumbai;