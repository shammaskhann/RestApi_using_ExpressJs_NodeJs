
// THIS IS USED OF TEMP PURPOSE NOT BE USED WHEN DATA BASE IS CONNECTED 
const users = [
    {
        id:1,
        name:"John",
        email:"john@gmail.com",
        pass:"123456",
    }
];

function addUser(user){
    users.push(user);
}

//update user
function updateUser(id,user){
    const index = users.findIndex((user) => user.id == id);
    users[index] = user;

}
//delete api 
function deleteUser(id){
    const index = users.findIndex((user) => user.id == id);
    users.splice(index,1);
}

module.exports = {
    users,
    addUser,
    updateUser,
    deleteUser,
};