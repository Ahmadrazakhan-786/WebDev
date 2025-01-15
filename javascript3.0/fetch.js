async function getAllUsers() {
    try {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers();