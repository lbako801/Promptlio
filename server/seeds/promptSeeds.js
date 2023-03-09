const { Prompt } = require("../schema/models/index");

async function seedPromptData() {
  const promptData = [
    {
      title: "Find a new hiking spot!",
      category: "1",
    },
    {
      title: "Find a coffee shop!",
      category: "2",
    },
    {
      title: "Take the ring to Mt. Doom",
      category: "1",
    },
    {
      title:
        "Take a photo of your favorite local coffee shop and share what you ordered.",
      category: "1",
    },
    {
      title:
        "Explore a new neighborhood and share a photo of a unique street art piece.",
      category: "1",
    },
    {
      title:
        "Visit a local farmers market and share a photo of your favorite purchase.",
      category: "1",
    },
    {
      title: "Go on a nature walk and share a photo of a scenic view.",
      category: "1",
    },
    {
      title:
        "Visit a museum or art gallery and share a photo of your favorite exhibit.",
      category: "1",
    },
    {
      title:
        "Attend a local festival or event and share a photo of the experience.",
      category: "1",
    },
    {
      title: "Try a new restaurant and share a photo of your favorite dish.",
      category: "1",
    },
    {
      title:
        "Go on a walking tour of a historic neighborhood and share a photo of a unique architecture.",
      category: "1",
    },
    {
      title:
        "Attend a local charity event or volunteer day and share a photo of your experience.",
      category: "1",
    },
    {
      title:
        "Visit a local botanical garden or greenhouse and share a photo of your favorite plant or flower.",
      category: "1",
    },
    {
      title:
        "Visit a local art supply store and share a photo of your favorite purchase.",
      category: "1",
    },
    {
      title:
        "Attend a local book club or literary event and share a photo of your favorite book or author.",
      category: "1",
    },
    {
      title:
        "Try a new outdoor activity, such as kayaking or rock climbing, and share a photo of your adventure.",
      category: "1",
    },
    {
      title:
        "Visit a local animal sanctuary or rescue and share a photo of your favorite animal.",
      category: "1",
    },
    {
      title:
        "Explore a local hiking trail and share a photo of a unique rock formation or vista.",
      category: "1",
    },
    {
      title:
        "Visit a local thrift or antique store and share a photo of your favorite find.",
      category: "1",
    },
    {
      title: "Visit a local bookstore and share a photo of your favorite find.",
      category: "1",
    },
    {
      title:
        "Attend a local concert or performance and share a photo of the show.",
      category: "1",
    },
    {
      title:
        "Go on a hike or nature trail and share a photo of a unique plant or animal you encountered.",
      category: "1",
    },
    {
      title:
        "Take a photo of a historic building or landmark and share its significance.",
      category: "1",
    },
    {
      title:
        "Go on a local brewery or winery tour and share a photo of your favorite drink.",
      category: "1",
    },
    {
      title:
        "Go on a bike ride and share a photo of your favorite trail or view.",
      category: "1",
    },
    {
      title:
        "Visit a local park and share a photo of your favorite spot to relax.",
      category: "1",
    },
    {
      title:
        "Attend a cultural festival or event and share a photo of your favorite performance.",
      category: "1",
    },
    {
      title:
        "Visit a local beach or lake and share a photo of a memorable moment.",
      category: "1",
    },
    {
      title:
        "Go on a food tour and share a photo of your favorite dish from each stop.",
      category: "1",
    },
    {
      title:
        "Explore a new park or green space and share a photo of a unique feature or hidden gem.",
      category: "1",
    },
    {
      title:
        "Try a new workout or fitness class and share a photo of your experience.",
      category: "1",
    },
  ];

  try {
    await Prompt.deleteMany({});

    const prompt = await Prompt.create(promptData);
    
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedPromptData;
