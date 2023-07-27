db = new Mongo().getDB("taskManagerDB");

db.createUser({
    user: 'taskManager',
    pwd: 'taskManager',
    roles: [
        {
            role: 'readWrite',
            db: 'taskManagerDB',
        },
        {
            role: "userAdmin",
            db: "taskManagerDB"
        },
        {
            role: "dbAdmin",
            db: "taskManagerDB"
        }
    ],
});

db.createCollection('users', { capped: false });

db.users.insert([
    { "username": "taskManager", "password": "taskManager", insertAt: new Date() }
]);