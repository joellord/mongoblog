import * as Realm from "realm-web";
const app = new Realm.App({id: "blog-ovrfr"});

const creds = Realm.Credentials.anonymous();
app.logIn(creds);
const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const blog = mongodb.db("blog").collection("blog");

async function getPosts() {
    const posts = await blog.find();
    return posts;
} 

async function addPost(title, content) {
    let result = await blog.insertOne({
        title: title,
        content: content,
        timestamp: (new Date()).getTime(),
        author: {
            name: "Anonymous"
        }
    });
    console.log(result);
    return result;
}

async function authenticate(username, password) {
    console.log("Authenticating");
    const creds = Realm.Credentials.emailPassword(username, password);
    await app.logIn(creds);
    console.log("Logged In");
    console.log(app.currentUser);
    // mongodb = app.currentUser.mongoClient("mongodb-atlas");
    // blog = mongodb.db("blog").collection("blog");
}

export {
    getPosts,
    addPost,
    authenticate
}