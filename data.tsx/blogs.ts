export interface BlogsProps {
  id: string;
  title: string;
  coverImg: string;
  author: string;
  date: string;
  tags: string[];
  sections: {
    title?: string;
    content: string;
    image?: string;
  }[];
}

export const blogs: BlogsProps[] = [
  {
    id: "1",
    title: "Travel Stories For Now and the Future",
    coverImg: "/blog-images/blogs-img.png",
    author: "Hasmar",
    date: "January 18, 2021",
    tags: ["Stories", "Tips"],
    sections: [
      {
        image: "/blog-images/travel-stories.jpg",
        content: `The world of travel is constantly evolving, and as we look to the future, it's important to reflect on the stories that have shaped our journeys. From navigating bustling city streets to discovering hidden natural wonders, each trip leaves an indelible mark on our memories. This blog post explores some of those cherished travel moments and offers insights into how we can continue to explore responsibly and sustainably in the years to come. We'll delve into the evolving trends in travel, from the rise of eco-tourism to the increasing importance of cultural immersion, and share practical tips for planning your next adventure, whether it's a weekend getaway or a long-awaited international expedition.`,
      },
      {
        title: "Rice Terraces, Tegallalang",
        image: "/blog-images/rice_terraces_1.jpg",
        content: `One of the most breathtaking sights I've ever encountered is the Tegalalang Rice Terraces in Bali, Indonesia. The cascading green fields, meticulously carved into the hillside, create a stunning landscape that showcases the ingenuity and artistry of the local farmers. The intricate irrigation system, known as "subak," has been passed down through generations, ensuring the sustainable cultivation of rice. Walking along the narrow pathways that wind through the terraces, you're surrounded by the sounds of nature – the gentle rustling of leaves, the flow of water, and the distant calls of birds. It's a truly immersive experience that connects you to the land and its people.`,
      },
    ],
  },
  {
    id: "2",
    title: "A Journey Through the Heart of Italy",
    coverImg: "/blog-images/italy-journey.jpg",
    author: "Elena Rossi",
    date: "February 10, 2021",
    tags: ["Italy", "Culture", "Food"],
    sections: [
      {
        image: "/blog-images/italy_landscape.jpg",
        content: `Italy, a land of ancient history, vibrant culture, and delectable cuisine, has always held a special place in my heart. My recent journey through its heartland, from the rolling hills of Tuscany to the bustling streets of Rome, was a sensory feast. I wandered through vineyards, savoring the rich flavors of Chianti, and explored medieval towns perched atop sun-drenched hills. The aroma of freshly baked bread and simmering tomato sauce filled the air, a constant reminder of Italy's culinary prowess.`,
      },
      {
        title: "Exploring the Colosseum",
        image: "/blog-images/colosseum_1.jpg",
        content: `Standing within the Colosseum, the iconic symbol of Rome, was a humbling experience. I imagined the gladiatorial contests and public spectacles that once unfolded within its walls, a stark reminder of the city's ancient past. The sheer scale of the amphitheater is awe-inspiring, a testament to the engineering skills of the Roman Empire. As I walked through its arches and corridors, I felt a connection to the millions who had gathered there centuries before.`,
      },
    ],
  },
  {
    id: "3",
    title: "The Magic of the Northern Lights",
    coverImg: "/blog-images/northern-lights-magic.jpg",
    author: "Anya Petrova",
    date: "March 15, 2021",
    tags: ["Nature", "Photography", "Iceland"],
    sections: [
      {
        image: "/blog-images/northern-lights.jpg",
        content: `Chasing the Northern Lights, or Aurora Borealis, has been a long-held dream of mine. Finally, I embarked on a journey to Iceland, a land of dramatic landscapes and ethereal beauty, to witness this celestial phenomenon. The anticipation was palpable as I waited under the vast, star-studded sky, the crisp Arctic air biting at my cheeks. And then, they appeared.`,
      },
      {
        title: "A Dance of Colors",
        image: "/blog-images/northern_lights_1.jpg",
        content: `The first glimpse of the Northern Lights is an experience that defies description. Swirls of emerald green and vibrant violet danced across the sky, shifting and changing in an otherworldly ballet. It was as if the heavens themselves were putting on a show, a mesmerizing display of light and color that left me speechless. The aurora painted the landscape in an ethereal glow, transforming the snow-covered mountains and frozen lakes into a scene of pure magic.`,
      },
    ],
  },
  {
    id: "4",
    title: "Discovering the Ancient Wonders of Egypt",
    coverImg: "/blog-images/egypt-wonders.jpg",

    author: "Omar Hassan",
    date: "April 22, 2021",
    tags: ["History", "Egypt", "Culture"],
    sections: [
      {
        image: "/blog-images/egyptian-pyramids.jpg",
        content: `Egypt, a land of pharaohs, pyramids, and ancient mysteries, has captivated travelers for centuries. My recent journey to this North African nation was a step back in time, an exploration of a civilization that shaped the course of human history. From the majestic pyramids of Giza to the intricate hieroglyphics adorning the walls of ancient temples, every corner of Egypt holds a story waiting to be uncovered.`,
      },
      {
        title: "The Great Pyramids of Giza",
        image: "/blog-images/egyptian_pyramids_1.jpg",
        content: `Standing in the shadow of the Great Pyramids of Giza is an awe-inspiring experience. These monumental structures, built as tombs for the pharaohs, have stood for millennia, testaments to the ingenuity and skill of the ancient Egyptians. The sheer scale of the pyramids is staggering, and the precision with which they were constructed is still a source of wonder and debate. Exploring the surrounding complex, including the Sphinx and the Valley Temple, provides a deeper understanding of the pharaohs' beliefs about the afterlife and their place in the cosmos.`,
      },
    ],
  },
  {
    id: "5",
    title: "Adventures in the Amazon Rainforest",
    coverImg: "/blog-images/amazon-adventure.jpg",
    author: "Isabela Silva",
    date: "May 28, 2021",
    tags: ["Rainforest", "Nature", "Brazil"],
    sections: [
      {
        image: "/blog-images/amazon-rainforest.jpg",
        content: `The Amazon rainforest, the world's largest tropical rainforest, is a place of unparalleled biodiversity and raw natural beauty. My recent adventure into the heart of the Amazon was an immersive experience, a journey into a world teeming with life and mystery. From navigating winding rivers in dugout canoes to trekking through dense jungle trails, every moment was filled with wonder and excitement.`,
      },
      {
        title: "Encountering Wildlife",
        image: "/blog-images/amazon_wildlife_1.jpg",
        content: `The Amazon is home to an incredible array of wildlife, from colorful macaws soaring through the canopy to elusive jaguars prowling the forest floor. I was fortunate enough to spot playful river dolphins swimming alongside our boat and to witness the mesmerizing sight of thousands of butterflies emerging from their chrysalises. The sounds of the rainforest – the chirping of insects, the calls of monkeys, and the rustling of leaves – created a symphony of nature that was both captivating and awe-inspiring.`,
      },
    ],
  },
  {
    id: "6",
    title: "A Taste of Japan: Culinary Delights",
    coverImg: "/blog-images/japan-taste.jpg",

    author: "Kenji Tanaka",
    date: "June 12, 2021",
    tags: ["Food", "Culture", "Japan"],
    sections: [
      {
        image: "/blog-images/japanese-food.jpg",
        content: `Japanese cuisine is renowned worldwide for its delicate flavors, artistic presentation, and emphasis on fresh, seasonal ingredients. My recent culinary journey through Japan was a feast for the senses, a delightful exploration of the country's diverse and sophisticated food culture. From bustling fish markets to serene tea houses, every meal was an experience to be savored.`,
      },
      {
        title: "Sushi and Sashimi",
        image: "/blog-images/sushi_sashimi_1.jpg",
        content: `No trip to Japan is complete without indulging in sushi and sashimi. The art of preparing these dishes is a testament to the skill and precision of Japanese chefs. The freshest seafood, expertly sliced and arranged, is a celebration of the ocean's bounty. The subtle flavors and textures, combined with the ritual of dipping each piece in soy sauce and wasabi, create a harmonious balance that is both satisfying and refined.`,
      },
    ],
  },
  {
    id: "7",
    title: "Exploring the Galapagos Islands",
    coverImg: "/blog-images/galapagos-explore.jpg",

    author: "Sofia Rodriguez",
    date: "July 19, 2021",
    tags: ["Wildlife", "Ecuador", "Nature"],
    sections: [
      {
        image: "/blog-images/galapagos-islands.jpg",
        content: `The Galapagos Islands, a volcanic archipelago in the Pacific Ocean, are a living laboratory of evolution, a place where unique and fearless wildlife roams freely. My recent expedition to these enchanted islands was a journey into a world unlike any other, a chance to witness firsthand the remarkable creatures that inspired Charles Darwin's theory of natural selection.`,
      },
      {
        title: "Unique Wildlife Encounters",
        image: "/blog-images/galapagos_wildlife_1.jpg",
        content: `The Galapagos Islands are home to a remarkable array of endemic species, creatures found nowhere else on Earth. I swam with playful sea lions, observed giant tortoises lumbering across the volcanic landscape, and marveled at the blue-footed boobies performing their comical mating dance. The animals of the Galapagos are remarkably unafraid of humans, allowing for close encounters and unforgettable wildlife experiences.`,
      },
    ],
  },
  {
    id: "8",
    title: "Hiking the Inca Trail to Machu Picchu",
    coverImg: "/blog-images/inca-trail-hike.jpg",

    author: "Carlos Perez",
    date: "August 26, 2021",
    tags: ["Hiking", "Peru", "History"],
    sections: [
      {
        image: "/blog-images/inca-trail-machu-picchu.jpg",
        content: `The Inca Trail, a legendary trek through the Andes Mountains, culminates at the breathtaking ancient city of Machu Picchu. My recent journey along this historic path was a challenging but rewarding adventure, a chance to follow in the footsteps of the Incas and witness the grandeur of their civilization. The trail winds through stunning mountain scenery, passing through cloud forests, Inca ruins, and traditional villages.`,
      },
      {
        title: "Reaching the Lost City",
        image: "/blog-images/machu_picchu_1.jpg",
        content: `Arriving at Machu Picchu after days of hiking is an unforgettable experience. The "Lost City of the Incas," perched high in the Andes, is a masterpiece of engineering and architecture. The intricate stonework, the stunning mountain backdrop, and the sense of history and mystery that permeates the site create a truly magical atmosphere. Exploring the temples, terraces, and plazas of Machu Picchu, I felt a deep connection to the people who had built this incredible city centuries ago.`,
      },
    ],
  },
  {
    id: "9",
    title: "Safari in the Serengeti",
    coverImg: "/blog-images/serengeti-safari-cover.jpg",

    author: "Nadia Ahmed",
    date: "September 15, 2021",
    tags: ["Safari", "Wildlife", "Tanzania"],
    sections: [
      {
        image: "/blog-images/serengeti-safari.jpg",
        content: `The Serengeti National Park in Tanzania is one of the world's most renowned wildlife destinations, a vast expanse of savannah teeming with life. My recent safari adventure in the Serengeti was a dream come true, an opportunity to witness the Great Migration and encounter Africa's iconic animals in their natural habitat. The sheer scale of the Serengeti is breathtaking, a seemingly endless plain stretching to the horizon.`,
      },
      {
        title: "The Great Migration",
        image: "/blog-images/great_migration_1.jpg",
        content: `Witnessing the Great Migration, the annual movement of millions of wildebeest and zebras across the Serengeti, is a spectacle unlike any other. The animals move in massive herds, driven by the search for fresh grazing and water. The thundering hooves, the dust clouds rising from the plains, and the constant movement of life create an unforgettable sensory experience. Predators such as lions, cheetahs, and hyenas follow the herds, adding to the drama of the migration.`,
      },
    ],
  },
  {
    id: "10",
    title: "Diving the Great Barrier Reef",
    coverImg: "/great-barrier-dive.jpg",

    author: "David Miller",
    date: "October 22, 2021",
    tags: ["Diving", "Australia", "Nature"],
    sections: [
      {
        image: "/blog-images/great-barrier-reef-diving.jpg",
        content: `The Great Barrier Reef, the world's largest coral reef system, is a kaleidoscope of color and life, a breathtaking underwater world teeming with marine biodiversity. My recent diving adventure on the reef was an unforgettable experience, a journey into a realm of vibrant coral gardens, playful fish, and majestic marine creatures. The sheer scale and beauty of the reef are awe-inspiring.`,
      },
      {
        title: "Exploring the Underwater World",
        image: "/blog-images/great_barrier_reef_1.jpg",
        content: `Diving on the Great Barrier Reef is like entering another world. The coral formations, in a dazzling array of shapes and colors, provide a habitat for countless species of fish, from tiny, brightly colored clownfish to large, graceful rays. I swam alongside sea turtles, explored underwater canyons, and marveled at the intricate beauty of the coral gardens. The reef is a symphony of life, a testament to the power and beauty of nature.`,
      },
    ],
  },
  {
    id: "11",
    title: "Exploring the Wonders of Europe",
    coverImg: "/blog-images/europe-exploration.jpg",

    author: "Anna L.",
    date: "March 5, 2022",
    tags: ["Travel", "Adventure"],
    sections: [
      {
        image: "/blog-images/europe-img1.jpg",
        content:
          "Europe is a tapestry of diverse cultures, breathtaking landscapes, and historic treasures. From exploring the charming cobblestone streets of Prague to hiking in the Swiss Alps, every journey offers a new perspective and unforgettable memories.",
      },
      {
        title: "The Canals of Venice",
        content:
          "Venice is a city like no other, with its intricate network of canals and gondolas gliding silently beneath arched bridges. Watching the sunset paint the sky in hues of orange and pink while sipping espresso at a piazza was a magical experience. The city's storied past and rich art scene make it a living museum.",
      },
      {
        image: "/blog-images/europe-img2.jpg",
        content:
          "The magic of Venice extends into its evenings, when the canals shimmer with reflections of city lights. Walking along the quiet streets and discovering hidden gems like a family-run trattoria was a reminder that the best moments are often unplanned.",
      },
    ],
  },
  {
    id: "12",
    title: "Urban Exploration: Hidden Gems of Tokyo",
    coverImg: "/blog-images/tokyo-urban.jpg",

    author: "Aiko Tanaka",
    date: "March 5, 2021",
    tags: ["City Guide", "Culture"],
    sections: [
      {
        image: "/blog-images/tokyo-alley.jpg",
        content: `Beyond the neon lights of Shibuya and the temples of Asakusa lies a Tokyo few tourists see. In Golden Gai's maze-like alleys, tiny bars seating just five people serve artisanal cocktails with decades of history. Shimokitazawa's vintage shops hide rare vinyl records and 80s fashion treasures. These micro-neighborhoods preserve Tokyo's soul amidst its relentless modernization.`,
      },
      {
        title: "The Art of Sento",
        content: `Discovering Tokyo's public bathhouses became my evening ritual. At century-old sento like Jakotsuyu in Asakusa, the ritual of washing before soaking in steaming onsen waters offered profound cultural insight. The intricate tile murals of Mount Fuji, the careful etiquette, and the intergenerational conversations revealed Japan's respect for tradition and community in everyday spaces.`,
      },
    ],
  },
  {
    id: "13",
    title: "Hiking the Inca Trail to Machu Picchu",
    coverImg: "/blog-images/inca-trail-trek.jpg",

    author: "Carlos Mendez",
    date: "April 22, 2021",
    tags: ["Adventure", "History"],
    sections: [
      {
        image: "/blog-images/inca-trail.jpg",
        content: `The four-day trek along ancient Inca pathways tests both body and spirit, but rewards with unparalleled vistas. At Dead Woman's Pass (4,215m), thin air makes each step a battle, yet the sight of cloud forests tumbling into valleys below erases all fatigue. Our Quechua guide shared how these stones were laid without mortar yet withstand centuries of earthquakes—an engineering marvel.`,
      },
      {
        title: "Sunrise at the Sun Gate",
        content: `Reaching Inti Punku at dawn transforms the journey into spiritual awakening. As first light spills over Machu Picchu's terraces, the citadel appears exactly as Hiram Bingham first saw it—a lost city emerging from mist. That silent moment, hearing only the wind and distant condors, connected me to something timeless. The Incas' astronomical precision becomes evident when you witness how the sunlight perfectly frames the Temple of the Sun.`,
      },
    ],
  },
  {
    id: "14",
    title: "Adventures in the Heart of Africa",
    coverImg: "/blog-images/africa-heart.jpg",

    author: "Daniel K.",
    date: "July 22, 2023",
    tags: ["Wildlife", "Culture", "Travel"],
    sections: [
      {
        image: "/blog-images/africa-img1.jpg",
        content:
          "Africa offers unparalleled adventures, with its vibrant cultures, vast savannahs, and rich wildlife. From tracking lions in the Serengeti to witnessing the Great Migration, every trip is a celebration of life and nature's wonders.",
      },
      {
        title: "Mount Kilimanjaro",
        content:
          "Scaling Mount Kilimanjaro was a life-changing journey. The snow-capped peak, surrounded by lush greenery at its base, is both challenging and awe-inspiring. Every step brought breathtaking views and a sense of accomplishment. The guides shared stories of local legends, making the trek even more memorable.",
      },
      {
        image: "/blog-images/africa-kilimanjaro.jpg",
        content:
          "As the sun set on Kilimanjaro, the sky turned into a palette of oranges and purples, casting a magical glow over the land. Sitting by a campfire, listening to the sounds of the wilderness, reminded me of the raw beauty and serenity Africa has to offer.",
      },
    ],
  },
  {
    id: "15",
    title: "Wildlife Photography in the Serengeti",
    coverImg: "/blog-images/serengeti-photo.jpg",

    author: "James Okore",
    date: "August 3, 2021",
    tags: ["Photography", "Safari"],
    sections: [
      {
        image: "/blog-images/serengeti-sunset.jpg",
        content:
          "Patience is the photographer's greatest tool on the Serengeti plains. Waiting six hours at a watering hole rewarded us with a rare scene: three generations of elephants teaching a calf to drink, their reflections painting perfect symmetry in the golden light. Our Maasai guide's ability to read animal behavior—like noticing a lioness' ears twitching toward hidden prey—transformed our snapshots into storytelling.",
      },
      {
        title: "The Vibrant Serengeti Skies",
        content:
          "One of the most breathtaking moments came at dusk, when the Serengeti skies turned vivid hues of orange and crimson. The silhouettes of acacia trees and roaming giraffes against this fiery backdrop felt surreal. Capturing these colors required perfect timing and an understanding of light dynamics, skills refined through countless trial-and-error shots.",
      },
    ],
  },
  {
    id: "16",
    title: "A Food Pilgrimage Through Vietnam",
    coverImg: "/blog-images/vietnam-food.jpg",

    author: "Linh Nguyen",
    date: "September 15, 2021",
    tags: ["Food", "Culture"],
    sections: [
      {
        image: "/blog-images/pho-street.jpg",
        content:
          "From Hanoi's steaming pho cauldrons to Hoi An's cao lầu noodles made with water from secret wells, Vietnamese cuisine tells regional histories. In Hue's imperial city, I learned royal dishes like banh khoai were once prepared exclusively for mandarins. A Mekong Delta homestay revealed how every part of a coconut—from milk to shell charcoal—is used in southern cooking, embodying the Vietnamese philosophy of 'tận dụng' (maximum utilization).",
      },
      {
        title: "Street Food and Community",
        content:
          "Saigon's buzzing night markets offered a sensory overload of grilled meats, sizzling pancakes, and colorful desserts. Local vendors, like the elderly couple crafting banh mi sandwiches, shared stories of recipes passed down through generations, making each meal a cultural immersion.",
      },
    ],
  },
  {
    id: "17",
    title: "Northern Lights in Lapland: Chasing the Aurora",
    coverImg: "/blog-images/lapland-aurora.jpg",

    author: "Sofia Koskinen",
    date: "November 30, 2021",
    tags: ["Nature", "Winter"],
    sections: [
      {
        image: "/blog-images/aurora-cabin.jpg",
        content:
          "In Finnish Lapland's -30°C silence, the aurora borealis isn't just seen—it's felt. Local Sámi guides taught us how solar winds create these celestial ribbons, while husky sleds transported us to glass igloos far from light pollution. When the sky finally erupted in neon green spirals, the ancient belief that these were spirits of ancestors made perfect sense; the lights seemed alive, dancing to some cosmic rhythm.",
      },
      {
        title: "Reindeer Sleigh Rides",
        image: "/blog-images/aurora-cabin1.jpg",
        content:
          "Gliding across snow-covered landscapes in a traditional reindeer sleigh was a surreal experience. Sámi herders shared myths and traditions, painting a vivid picture of their ancient connection to the land and its majestic animals.",
      },
    ],
  },
  {
    id: "18",
    title: "The Silk Road Revisited: Uzbekistan's Blue Cities",
    coverImg: "/blog-images/uzbekistan-silkroad.jpg",

    author: "Dmitri Volkov",
    date: "February 14, 2022",
    tags: ["History", "Architecture"],
    sections: [
      {
        image: "/blog-images/samarkand.jpg",
        content:
          "Walking through Samarkand's Registan Square feels like stepping into a Persian miniature. The madrasas' turquoise domes—glazed with techniques perfected over 600 years—glow against desert skies. In Bukhara's trading domes, I touched carpets woven with patterns carried by caravans from Isfahan to Xi'an. These cities were once the internet of their day, where ideas traveled as briskly as spices along camel routes.",
      },
      {
        title: "Shahrisabz: A Glimpse into Timurid Glory",
        image: "/blog-images/samarkand1.jpg",
        content:
          "Exploring Shahrisabz's Ak-Saray Palace ruins gave insight into the grandeur of Timur's empire. The intricate tilework and towering gates spoke volumes about the artistry and ambition of the Silk Road era.",
      },
    ],
  },
  {
    id: "19",
    title: "Living with Nomads: Mongolia's Gobi Desert",
    coverImg: "/blog-images/mongolia-nomads.jpg",

    author: "Batzorig Dorj",
    date: "May 9, 2022",
    tags: ["Nomadic", "Desert"],
    sections: [
      {
        image: "/blog-images/ger-camp.jpg",
        content:
          "Sharing a ger with a Mongolian herding family shattered all notions of 'roughing it.' Their felt-lined dwellings, engineered for -40°C winters, stayed cozy as sandstorms raged outside. We helped round up cashmere goats at dawn, then drank airag (fermented mare's milk) under stars undimmed by electricity. Their sustainable lifestyle—moving pastures seasonally, wasting nothing—offered lessons in living lightly on Earth.",
      },
      {
        title: "Camel Treks Across the Sands",
        image: "/blog-images/ger-camp1.jpg",
        content:
          "Riding camels through the Gobi's vast dunes was an unforgettable journey. The rhythmic sway of the camels and the untouched beauty of the landscape offered a profound sense of tranquility and connection to nature.",
      },
    ],
  },
  {
    id: "20",
    title: "Costa Rica's Cloud Forests: Where Nature Reigns",
    coverImg: "/blog-images/costarica-cloudforest.jpg",
    author: "María Fernández",
    date: "July 22, 2022",
    tags: ["Eco-Tourism", "Biodiversity"],
    sections: [
      {
        image: "/blog-images/quetzal-bird.jpg",
        content:
          "Monteverde's misty canopy is nature's skyscraper jungle. Suspension bridges revealed orchids growing on ancient oaks, while night hikes spotlighted kinkajous and glass frogs. Spotting the resplendent quetzal—its emerald plumage shimmering as it fed on wild avocados—was like finding a living jewel. Costa Rica's commitment to conservation (30% protected land) means such wonders thrive just feet from hiking trails.",
      },
      {
        title: "Butterfly Gardens and Biodiversity",
        image: "/blog-images/quetzal-bird1.jpg",
        content:
          "Visiting Monteverde's butterfly garden showcased the staggering array of species that thrive in Costa Rica's cloud forests. Learning about the interconnected ecosystems gave a deeper appreciation for the country's conservation efforts.",
      },
    ],
  },
  {
    id: "21",
    title: "The Enchantment of Patagonia",
    coverImg: "/blog-images/torres-del-paine-cover.jpg",
    author: "Lucía Marquez",
    date: "December 12, 2022",
    tags: ["Adventure", "Nature"],
    sections: [
      {
        image: "/blog-images/torres-del-paine.jpg",
        content:
          "Patagonia is a land of dramatic contrasts, where jagged peaks rise above endless plains and glaciers kiss ancient forests. Trekking through Torres del Paine National Park, I felt dwarfed by its towering granite spires and vast turquoise lakes. Each step brought the kind of silence that allows nature's raw beauty to leave an indelible mark on your soul.",
      },
      {
        title: "Navigating the Perito Moreno Glacier",
        image: "/blog-images/torres-del-paine-1.jpg",
        content:
          "Strapping on crampons and hiking across the Perito Moreno Glacier was surreal. The creaks and groans of moving ice beneath my feet were a reminder of nature’s constant motion. The vivid blue crevasses and the sheer magnitude of the glacier made it an unforgettable adventure in one of the planet’s most pristine landscapes.",
      },
    ],
  },
];
