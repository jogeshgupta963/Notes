import bcrypt from "bcrypt";

const users: {
    name: string;
    email: string;
    password: string;
}[] = [
    {
        name: "User1",
        email: "user1@gmail.com",
        password: bcrypt.hashSync("zxcvbnmm", 10),
    },
    {
        name: "User2",
        email: "user2@gmail.com",
        password: bcrypt.hashSync("zxcvbnmm", 10),
    },
    {
        name: "User3",
        email: "user3@gmail.com",
        password: bcrypt.hashSync("zxcvbnmm", 10),
    },
    {
        name: "User4",
        email: "user4@gmail.com",
        password: bcrypt.hashSync("zxcvbnmm", 10),
    },
    {
        name: "User5",
        email: "user5@gmail.com",
        password: bcrypt.hashSync("zxcvbnmm", 10),
    },
];

export default users;
