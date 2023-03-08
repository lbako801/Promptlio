const { User, Post, Prompt } = require("../schema/models/index");

async function seedUsers() {
  const userData = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      username: "johndoe",
      password: "Passw0rd!",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      username: "janesmith",
      password: "P@ssword1",
    },
    {
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      username: "mikejohnson",
      password: "M1keJ0hn$on1",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      username: "emilydavis",
      password: "Em!lyD@v!s1",
    },
    {
      name: "Chris Brown",
      email: "chrisbrown@example.com",
      username: "chrisbrown",
      password: "Chr!sBr0wn1",
    },
    {
      name: "Maria Rodriguez",
      email: "mariarodriguez@example.com",
      username: "mariarodriguez",
      password: "M@r!@R0dr!guez1",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      username: "davidlee",
      password: "D@v!dL331",
    },
    {
      name: "Olivia Garcia",
      email: "oliviagarcia@example.com",
      username: "oliviagarcia",
      password: "Ol!v!@G@rc!@1",
    },
    {
      name: "Justin Smith",
      email: "justinsmith@example.com",
      username: "justinsmith",
      password: "J$St!nSm!th1",
    },
    {
      name: "Emma Wilson",
      email: "emmawilson@example.com",
      username: "emmawilson",
      password: "Emm@W!ls0n1",
    },
    {
      name: "Joshua Taylor",
      email: "joshuataylor@example.com",
      username: "joshuataylor",
      password: "J0shu@T@ylor1",
    },
    {
      name: "Sophia Martinez",
      email: "sophiamartinez@example.com",
      username: "sophiamartinez",
      password: "S0ph!@M@rt!nez1",
    },
    {
      name: "Anthony Brown",
      email: "anthonybrown@example.com",
      username: "anthonybrown",
      password: "Anth0nyBr0wn!1",
    },
    {
      name: "Isabella Lewis",
      email: "isabellalewis@example.com",
      username: "isabellalewis",
      password: "!s@b3ll@L3w!s",
    },
    {
      name: "Matthew Hernandez",
      email: "matthewhernandez@example.com",
      username: "matthewhernandez",
      password: "M@ttH3wH3rn@nd3z",
    },
  ];

  try {
    await User.deleteMany({});   
    await Post.deleteMany({});

    const user = await User.create(userData);

    const postData = [
      {
        prompt: prompt[0]._id,
        creator: user[0]._id,
      },
    ];

    await Post.create(postData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedUsers;
