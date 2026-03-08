export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "quote" | "highlight";
  content?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "balanced-diet",
    title: "Balanced Diet",
    subtitle: "The 'Sugar Rush' of Good Health",
    category: "Nutrition Basics",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "The concept of a balanced diet is introduced to us in primary school, yet we often begin to truly value it only when health concerns arise.",
      },
      {
        type: "paragraph",
        content:
          "A balanced diet is a complete and nutritionally adequate pattern of eating that provides the body with all essential nutrients in the right proportions. It supplies sufficient nutrients for energy, along with water, proteins, vitamins, minerals, and dietary fibre to support growth, repair, and overall well-being. Since different nutrients perform different functions in the body, no single food can meet all nutritional needs. Maintaining good health therefore requires a thoughtful and varied selection of foods to ensure all essential nutrients are obtained.",
      },
      {
        type: "paragraph",
        content:
          "One person's ideal balanced diet may differ from another's, as nutritional needs vary depending on age, sex, height, weight, and physical activity. Consulting a clinical dietitian can help provide personalized guidance and ensure dietary choices align with individual health goals.",
      },
      {
        type: "paragraph",
        content:
          "The ICMR Dietary Guidelines for Indians emphasize including a variety of food groups to meet daily nutrient requirements. According to these guidelines, an average adult should aim for:",
      },
      {
        type: "list",
        items: [
          "Cereals: Approximately 250 grams per day",
          "Vegetables: At least 400 grams",
          "Fruits: About 100 grams",
          "Pulses, eggs, or flesh foods: Around 85 grams",
          "Nuts and seeds: 35 grams",
          "Fats and oils: 27 grams",
        ],
      },
      {
        type: "paragraph",
        content:
          "A balanced diet forms the foundation for strong immunity. It not only provides the energy needed to complete daily tasks, both mental and physical, but also helps the body fight infections, heal wounds, and recover more quickly. In addition, it helps prevent both obesity and malnutrition. A healthy body supports a healthy mind. Proper nutrition enhances brain function, improves concentration, and positively affects mood.",
      },
      {
        type: "paragraph",
        content:
          "Without a balanced diet, fatigue sets in and concentration drops. The body becomes more prone to health disorders and faces an increased risk of chronic diseases such as diabetes, obesity, and heart disease. Inadequate nutrient intake can also lead to deficiencies such as anemia (iron deficiency), weak bones (vitamin D deficiency), and muscle loss (protein deficiency).",
      },
      {
        type: "paragraph",
        content:
          "At the end of the day, good health is an individual choice. Exercising portion control and prioritizing nutrition over taste requires effort and willpower. No external pressure can make you eat healthily until your own conscience is on board. Results take time, but small, consistent steps make a difference. A balanced diet is not a short-term goal, it is a lifelong commitment to your well-being.",
      },
    ],
  },
  {
    slug: "calories-universal",
    title: "Calories Being Universal",
    subtitle: "UNIversal v/s UNIque",
    category: "Nutrition Science",
    readTime: "4 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "Uni means an individual entity and in this case, it is our Keyword. One person's energy, protein and calorie requirements differ from those of others. At the end of the day, it is not wise to imitate the food consumption patterns of other people as no two bodies are identical.",
      },
      {
        type: "paragraph",
        content:
          "Energy needs are unique for each person and it depends on our age, height, weight, physical activity, and hormonal balance. What works for one person could have negative consequences on another. Therefore, any kind of imitation does more bad than good.",
      },
      {
        type: "paragraph",
        content:
          "An important aspect to this is understanding each term. Energy is what the body needs to function, it is the requirement. Protein is a nutrient found in food that builds muscles, repairs tissues, strengthens immunity and helps in hormone production. Among its various functions, it also provides energy. A Calorie is the unit used to measure energy.",
      },
      {
        type: "highlight",
        content: "1 gram of protein = 4 calories of energy",
      },
      {
        type: "paragraph",
        content:
          "Easy access to answers on Social Media creates chaos for consumers, as they universalise diet plans without considering the individual needs of each person. Most of these social media trends and posts include extreme calorie diets, which can have an adverse impact on the body. Some diet schedules go as far as recommending 800-1000 calories per day, and that can cause a significant energy deficit in the body.",
      },
      {
        type: "paragraph",
        content:
          "As per Indian Council of Medical Research's (ICMR) recommendations, an average adult may need approximately:",
      },
      {
        type: "list",
        items: ["2500 kcal/day for men", "2000 kcal/day for women"],
      },
      {
        type: "paragraph",
        content:
          "1000 calories will not do justice to your body and will further add to its struggles. It will eventually result in Fatigue, Poor Metabolism and Nutrient Deficiencies.",
      },
      {
        type: "paragraph",
        content:
          "Excess calories are not advisable, but the lack of it is also just as harmful. Often people opt for a low-protein diet to reduce calories, but that worsens weakness and exhaustion. Adequacy and Optimum Quantities are the needs of the hour and you MUST consult a professional dietitian to find ways to balance your diet.",
      },
      {
        type: "quote",
        content:
          "What matters is not fear-based dieting. It's eating the right quantity, at the right time, consistently, in a way that suits your body. Don't punish your body. Eat smart, eat balanced. — Certified Clinical Dietitian Simran Suri",
      },
      {
        type: "paragraph",
        content:
          "Avoid running after quick results because, sustainable health is built on constant nourishment.",
      },
      {
        type: "paragraph",
        content: "Do not be part of the tribe, Nourish your own Uniqueness!",
      },
    ],
  },
  {
    slug: "volume-eating",
    title: "Volume Eating",
    subtitle: "A Full-Filling Meal, Minus the Guilt",
    category: "Meal Planning",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "More Food does not always mean More Calories. Let's help you plan your meals better and introduce you to the concept called Volume Eating.",
      },
      {
        type: "paragraph",
        content:
          "Volume Eating involves consuming large quantities of low-energy-density foods such as our good old friends : Fruits and Vegetables. These foods strike the perfect balance, as fruits and vegetables are high in water and fiber but low in calories. Thus, they make you feel 'full and filled' while keeping your calorie count to a minimum.",
      },
      {
        type: "paragraph",
        content:
          "Now, let's debunk a myth! Not all fruits and vegetables fit into this category. Almost all fruits, including the likes of apples, citrus fruits, berries, bananas, stone fruits etc, tick the boxes but among the vegetables, it's only the non-starchy ones that make the cut. Carrots, tomatoes, leafy greens, broccoli, cauliflower etc. are recommended for Volume Eating. Broth-based soups made from vegetables or light meat stock, are the perfect cheat code for this diet. They keep your body hydrated and are low on calories, unlike processed foods, fried foods, and sweets.",
      },
      {
        type: "paragraph",
        content:
          "Volume Eating aims to reduce overeating and helps your body to feel full and satisfied sooner, especially when you start your meal with high-volume foods. Volume-eating foods must be a necessity in every meal of the day.",
      },
      {
        type: "heading",
        content: "A Look into an Ideal Plate:",
      },
      {
        type: "list",
        items: [
          "50% - Volume-eating Foods",
          "25% - Whole Grains",
          "25% - Lean Protein (which is slightly higher in calorie density)",
        ],
      },
      {
        type: "paragraph",
        content:
          "Volume Eating is a sustainable approach to maintain a healthy appetite, without unnecessarily giving into cravings. Not only does it reduce overeating and weight gain, but also helps to reduce the secretion of the Hunger Hormone, Ghrelin. This is further explained in detail in our blog 'When the Stomach Roars', so do give that a read. But getting back to the point, Volume Eating is an effective way to control calorie consumption. This method suggests eating larger amounts of low-calorie foods, limiting intake of medium-calorie foods, and avoiding high-calorie foods altogether.",
      },
      {
        type: "heading",
        content: "Volume eating provides several benefits, such as:",
      },
      {
        type: "list",
        items: [
          "Improving immunity",
          "Maintaining skin, eye, and dental health",
          "Supporting the development and strengthening of muscles and bones",
          "Improving gut health",
          "Lowering the risk of certain cancers, heart disease, and type 2 diabetes",
        ],
      },
      {
        type: "paragraph",
        content:
          "Volume eating gives you the privilege to satisfy your stomach without constantly feeling hungry. It is not about restriction; it is about keeping your guilt at bay!",
      },
      {
        type: "paragraph",
        content:
          "A point to remember, responsible eating never goes out of style.",
      },
      {
        type: "paragraph",
        content: "So, Eat Generously but Eat Smart.",
      },
    ],
  },
  {
    slug: "ghrelin-leptin",
    title: "Ghrelin and Leptin",
    subtitle: "When the Stomach Roars",
    category: "Hormones & Health",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "Have you ever paid heed to your stomach's growls? In layman's terms, it's our body's (desperate) way of asking for food. In cases like these, CALORIES and PORTION SIZES stop mattering. The body reaches a point where it will not hesitate before eating anything that comes its way. It's easy to blame it on one's Willpower, or rather the lack of it. But the reason is far more complicated than it looks on the surface level.",
      },
      {
        type: "paragraph",
        content:
          "The feeling of emptiness in our stomachs triggers the release of Ghrelin, also known as the Hunger Hormone. It is responsible for the 'Grrrr' sound we often hear, which signals the hypothalamus in the brain that it is time to EAT. Excess secretion of Ghrelin results in Extreme Hunger, which then leads to Higher Food Intake and eventually, Weight Gain.",
      },
      {
        type: "paragraph",
        content:
          "Once we reach the feeling of fullness in our stomachs, the Fat Cells in our body release a hormone called Leptin, the satiety hormone. Leptin sends a strong signal to the brain that the Monster called Hunger is now tamed and hence, prevents overeating.",
      },
      {
        type: "paragraph",
        content:
          "Ghrelin and Leptin work together to determine the body's balance between hunger and fullness, a thin line that is easy to cross. If the body becomes Leptin resistant, it will struggle to recognise fullness and continue eating after adequate intake. This can disrupt one's natural appetite control.",
      },
      {
        type: "paragraph",
        content:
          "Maintaining the balance is quite possible, if you put your mind (and body) to it. The balance between Ghrelin and Leptin can be achieved through these simple steps.",
      },
      {
        type: "list",
        items: [
          "Avoid skipping meals and having long gaps between meals.",
          "Practice mindful eating. Listen to and look out for Hunger and Fullness cues.",
          "Limit sugar and highly processed foods.",
          "Include fibre-rich foods, healthy fats and protein to stay satiated.",
          "Get adequate sleep.",
          "Engage in (any form of) Exercise.",
          "Drink plenty of water. Stay hydrated.",
          "Limit late-night snacking and eating.",
          "Eat a balanced, healthy diet.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Prioritise your wellbeing because Good Health is about Intention, and not Perfection. Listen to the body's cues and Act on them. Prevent the constant Tug-of-War between Ghrelin and Leptin because, these hormones work in harmony FOR you and NOT AGAINST you.",
      },
    ],
  },
  {
    slug: "portion-control",
    title: "Portion Control",
    subtitle: "(Portion) Size Matters!",
    category: "Meal Planning",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "All sizes are beautiful, but not when it comes to Portion Sizes. The smaller the portion size and the more frequent the meals throughout the day, the more effective it is for controlling hunger, maintaining energy levels, and supporting weight loss. This method of eating will be a massive shift from the usual eating habits, but that is where a clinical dietitian can jump in and make this transition easier.",
      },
      {
        type: "paragraph",
        content:
          "In this blog, you will be introduced to practical tips for eating small portions. Let's dive straight into it.",
      },
      {
        type: "heading",
        content: "Plan Your Meals and Snacks",
      },
      {
        type: "paragraph",
        content:
          "First and foremost, you must plan your meals and snacks in order to avoid the urge to snack on unhealthy foods. A meal plan needs to be put in place that includes small portions of nutritious foods in intervals of 3-4 hours, as this ensures you receive the right balance of nutrients to rejuvenate your days.",
      },
      {
        type: "heading",
        content: "Choose Nutrient-Dense Foods",
      },
      {
        type: "paragraph",
        content:
          "The choice of Nutrient-Dense Foods keeps your stomach full and satisfied longer, besides providing essential nutrients to your body. If you are unsure which foods are considered nutrient-dense foods, then let's clear this out. You can opt for whole grains, lean proteins, healthy fats, and fiber-rich fruits and vegetables.",
      },
      {
        type: "heading",
        content: "Use Smaller Plates and Containers",
      },
      {
        type: "paragraph",
        content:
          "It is imperative to psychologically manipulate your brain by using smaller plates and containers to help control portion sizes. This makes the meals appear larger and prevents overeating. Working hard becomes easier when you also work smart!",
      },
      {
        type: "heading",
        content: "Listen to Your Body's Hunger Cues",
      },
      {
        type: "paragraph",
        content:
          "How often do you truly listen to your body's hunger cues? If you do not already, 'now' is a good time! Eat only when you are hungry and stop before you feel overly full. You should start practising mindful eating, as it helps regulate food intake and prevents unnecessary snacking.",
      },
      {
        type: "heading",
        content: "Drink Plenty of Water",
      },
      {
        type: "paragraph",
        content:
          "There is nothing quite like Water! Therefore, you are advised to drink plenty of water. Staying hydrated helps control hunger and prevents mistaking thirst for hunger. A simple process of elimination can help you decide your next course of action. This makes catering to your needs relatively more convenient. Besides this, drinking water before meals can reduce the amount of food consumed.",
      },
      {
        type: "heading",
        content: "Avoid Processed and Sugary Foods",
      },
      {
        type: "paragraph",
        content:
          "Perhaps the most basic and important tip, avoid processed and sugary foods. These foods can cause blood sugar spikes and crashes, which can lead to hunger and cravings. Always go for natural, whole foods to keep the stress at bay.",
      },
      {
        type: "heading",
        content: "Include Protein in Every Meal",
      },
      {
        type: "paragraph",
        content:
          "A pro-tip is to include protein in every meal. If you wish to flex your muscles, what better than protein to help you out in this endeavour. Not only does it maintain your muscle mass, but it also helps you to feel full for longer. There are many protein-rich foods to choose from, such as lean meats, eggs, yogurt, nuts or plant-based protein.",
      },
      {
        type: "heading",
        content: "Eat Slowly and Enjoy Your Food",
      },
      {
        type: "paragraph",
        content:
          "We all have heard that chewing 32 times helps with better digestion, even if it's slow! It is actually recommended to eat slowly and to enjoy your food, because eating slowly allows your brain to recognize when you are full and therefore, reduces the risk of overeating.",
      },
      {
        type: "heading",
        content: "Stay Consistent",
      },
      {
        type: "paragraph",
        content:
          "Stay consistent! Avoid deviating from your eating schedules alongside gradually, adjusting portion sizes and frequency of meals to suit your needs.",
      },
      {
        type: "paragraph",
        content:
          "Limiting food does not mean staying hungry, so do not confuse the two. Controlling portion sizes and increasing the frequency of meals is taking your future in your own hands and improving it tenfold. It is the journey towards the ultimate destination, Good Health!",
      },
    ],
  },
  {
    slug: "healthy-nutrition-healthy-life",
    title: "Healthy Nutrition, Healthy Life",
    subtitle: "Building Sustainable Eating Habits",
    category: "Healthy Living",
    readTime: "7 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "As a clinical dietitian, one of the most common questions I am asked is what a truly healthy diet looks like. Many people believe that healthy eating has to be complicated or restrictive, but in reality, good nutrition is about balance, consistency, and making informed choices over time. Food plays a central role in how we feel every day. The right nutrition can improve energy levels, support immunity, strengthen the body, and contribute to overall well-being.",
      },
      {
        type: "paragraph",
        content:
          "Through my work with individuals and families, I have seen how small and practical changes in eating habits can make a meaningful difference. Healthy nutrition is not about following extreme diets or eliminating entire food groups. Instead, it is about creating a sustainable approach to food that nourishes the body while still allowing room for enjoyment. Understanding the basics of balanced eating can help build a lifestyle that supports long term health.",
      },
      {
        type: "paragraph",
        content:
          "Here are some key principles that can guide healthier nutrition habits in everyday life.",
      },
      {
        type: "heading",
        content: "Balanced Meals",
      },
      {
        type: "paragraph",
        content:
          "A healthy diet begins with balance. This means including a variety of foods from different food groups in your daily meals. Fruits, vegetables, whole grains, lean proteins, and healthy fats all provide different nutrients that the body needs to function properly.",
      },
      {
        type: "paragraph",
        content:
          "A simple way to structure a balanced meal is by filling half your plate with colourful fruits and vegetables. These foods are rich in vitamins, minerals, and dietary fibre, which support digestion and overall health. The remaining portion of the plate can be divided between whole grains and protein sources such as lentils, eggs, fish, or lean meats.",
      },
      {
        type: "heading",
        content: "Portion Control",
      },
      {
        type: "paragraph",
        content:
          "Even healthy foods can lead to overeating when portion sizes are not monitored. Being mindful of portions can help maintain a balanced intake without feeling restricted.",
      },
      {
        type: "paragraph",
        content:
          "Small habits can make a difference. Using smaller plates or bowls can naturally reduce the amount of food consumed. It is also important to listen to your body's hunger and fullness signals. Eating slowly and recognising when you are satisfied can prevent unnecessary snacking and overeating.",
      },
      {
        type: "heading",
        content: "Hydration",
      },
      {
        type: "paragraph",
        content:
          "Hydration plays a vital role in maintaining overall health. Water supports digestion, regulates body temperature, and helps transport nutrients throughout the body.",
      },
      {
        type: "paragraph",
        content:
          "Aim to drink water consistently throughout the day rather than waiting until you feel very thirsty. At the same time, try to limit sugary beverages such as sodas or packaged fruit juices. These drinks often add extra calories without providing significant nutritional benefits.",
      },
      {
        type: "heading",
        content: "Limiting Processed Foods",
      },
      {
        type: "paragraph",
        content:
          "Highly processed foods such as fast food, sugary snacks, and packaged convenience meals are often high in added sugars, unhealthy fats, and sodium. Regular consumption of these foods can increase the risk of various health issues over time.",
      },
      {
        type: "paragraph",
        content:
          "Reducing processed foods and choosing more whole, minimally processed options can make a significant difference in improving overall diet quality.",
      },
      {
        type: "heading",
        content: "Nutrient Dense Choices",
      },
      {
        type: "paragraph",
        content:
          "Nutrient dense foods provide a high amount of vitamins, minerals, and beneficial compounds relative to their calorie content. Including these foods regularly helps ensure that the body receives the essential nutrients it needs.",
      },
      {
        type: "paragraph",
        content:
          "Examples of nutrient rich foods include leafy green vegetables, berries, nuts, seeds, fish, and whole grains. These foods support immunity, heart health, and long term wellness.",
      },
      {
        type: "heading",
        content: "Mindful Eating",
      },
      {
        type: "paragraph",
        content:
          "Mindful eating involves paying attention to the experience of eating rather than rushing through meals. Slowing down allows you to enjoy the taste, texture, and aroma of your food while also helping you recognise when you are comfortably full.",
      },
      {
        type: "paragraph",
        content:
          "Try to minimise distractions such as phones, televisions, or laptops during meals. This can prevent mindless eating and help create a healthier relationship with food.",
      },
      {
        type: "heading",
        content: "Healthy Cooking Methods",
      },
      {
        type: "paragraph",
        content:
          "The way food is prepared can influence its nutritional value. Cooking methods such as baking, grilling, steaming, or sautéing help retain nutrients while reducing the need for excessive added fats.",
      },
      {
        type: "paragraph",
        content:
          "Deep frying, on the other hand, can increase calorie and unhealthy fat intake. Choosing lighter cooking techniques can make everyday meals both healthier and more balanced.",
      },
      {
        type: "heading",
        content: "Limiting Added Sugars and Salt",
      },
      {
        type: "paragraph",
        content:
          "Many packaged foods contain hidden sources of added sugars and sodium. Consuming high amounts of these ingredients can contribute to health concerns such as high blood pressure and weight gain.",
      },
      {
        type: "paragraph",
        content:
          "Reading nutrition labels and choosing low sodium or reduced sugar options can help maintain a healthier balance.",
      },
      {
        type: "heading",
        content: "Regular Physical Activity",
      },
      {
        type: "paragraph",
        content:
          "While diet is important, a healthy lifestyle also includes regular physical activity. Movement supports metabolism, strengthens the body, and contributes to overall well being.",
      },
      {
        type: "paragraph",
        content:
          "Activities such as walking, swimming, cycling, or playing sports can help maintain consistency while making exercise enjoyable.",
      },
      {
        type: "heading",
        content: "The Bottom Line",
      },
      {
        type: "paragraph",
        content:
          "Improving your diet does not require drastic or immediate changes. In fact, trying to completely overhaul your eating habits all at once can feel overwhelming and difficult to sustain.",
      },
      {
        type: "paragraph",
        content:
          "Instead, focus on incorporating small changes gradually. This could mean adding more vegetables to your meals, drinking more water during the day, or choosing whole foods more often. Over time, these small steps can build healthier habits that support long term well being.",
      },
      {
        type: "paragraph",
        content:
          "A balanced and mindful approach to nutrition is not about perfection. It is about creating sustainable habits that allow your body to feel nourished, energised, and supported every day.",
      },
    ],
  },
  {
    slug: "taste-the-rainbow",
    title: "Taste the Rainbow",
    subtitle: "A Spectrum on the Plate",
    category: "Nutrition Basics",
    readTime: "6 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "Who said mindful eating has to be boring? All you need is a splash of colours on your plate!",
      },
      {
        type: "paragraph",
        content:
          "Health experts often recommend eating at least five small portions of fruits and vegetables every day and the more colours you include, the better it is for your body. The fact that colours are visually appealing is an added bonus, but more importantly, it ensures that your body receives a variety of phytonutrients (natural plant compounds) that are beneficial for your health.",
      },
      {
        type: "paragraph",
        content:
          "Each colour comes with its own set of unique vitamins, minerals, antioxidants that aid in protecting the body from diseases, building immunity, and improving overall well-being. The foods you consume are directly linked to your digestive health. A diverse meal plan helps support a strong gut microbiome, which improves digestion, metabolism, and immune function.",
      },
      {
        type: "paragraph",
        content:
          "No single vegetable can be held responsible for giving your body all the nutrients, it requires a team of colours to cross train your internal systems. 'Eat the Rainbow' is a nutritional philosophy and a science-backed approach to ensure a shift in eating patterns. Let's introduce you to the recommended colours on your plate.",
      },
      {
        type: "heading",
        content: "GREEN — [spinach, beans, cabbage, lettuce, etc.]",
      },
      {
        type: "paragraph",
        content:
          "Since childhood, everyone has been told that eating your greens should be prioritised. But have you ever wondered why? Greens are our body's cleansers and detoxifiers! They are packed with chlorophyll, iron, folate and magnesium, all of which are essential for everyday functioning. Besides detoxification of the body, they support bone density, brain function and blood health. Folate is imperative for cell repair and DNA synthesis.",
      },
      {
        type: "heading",
        content: "ORANGE — [carrots, pumpkins, oranges, etc.]",
      },
      {
        type: "paragraph",
        content:
          "These fruits and vegetables contain high amounts of beta-carotene, which the body converts into vitamin A. They are your Vision Protectors as they maintain your vision health, especially night vision. But this is not it, as they also form a strong immune barrier and look after the well-being of your largest sensory organ, the skin.",
      },
      {
        type: "heading",
        content: "YELLOW — [sweetcorn, yellow peppers, etc.]",
      },
      {
        type: "paragraph",
        content:
          "Yellow, Yellow, A Hearty Fellow! The yellow colour in veggies supports your heart as well as gut health. Rich in flavonoids, vitamin C and potassium, yellow is truly a happy colour. Potassium helps regulate blood pressure and supports heart health, while vitamin C acts as the immunity booster for your body.",
      },
      {
        type: "heading",
        content: "RED — [beetroot, tomatoes, pomegranates, etc.]",
      },
      {
        type: "paragraph",
        content:
          "Red is a vital colour when it comes to health, whether it is blood in the body or the colour in fruits and vegetables. Red-coloured food is the cellular guard of your body. Red foods contain powerful compounds such as lycopene and anthocyanins. Lycopene happens to be a powerful antioxidant that is associated with heart health and the prevention of skin damage caused by UV rays. Some studies have also suggested that it has cancer-fighting properties, making them a true game changer!",
      },
      {
        type: "heading",
        content: "PURPLE — [eggplant (brinjal), purple cabbage, etc.]",
      },
      {
        type: "paragraph",
        content:
          "Purple pigment is an excellent brain booster. It is rich in anthocyanins, which act as powerful antioxidants. This colour boasts of anti-inflammatory properties and has the potential to slow down signs of aging. But more importantly, it looks after brain health, supporting both memory and cognitive function.",
      },
      {
        type: "heading",
        content: "WHITE — [cauliflower, radish, garlic, etc.]",
      },
      {
        type: "paragraph",
        content:
          "Last but certainly not the least, let's introduce you to the benefits of a more subtle colour, white. White foods contain allicin, and possess strong anti-inflammatory as well as immune-boosting properties. It also offers antibacterial benefits to the body.",
      },
      {
        type: "paragraph",
        content:
          "Not every colour needs to be consumed in one meal or even in every meal. The goal is to 'hit the rainbow' over the course of an entire day or even, a full week is acceptable. Prioritise variety over repetition, as more colours will bring more nutrients to the table.",
      },
      {
        type: "paragraph",
        content: "Colours are the New Black!",
      },
    ],
  },
];
