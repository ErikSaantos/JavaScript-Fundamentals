// const App = () => {
//     const numbers = [1, 2, 3, 4, 5];

//     return <main>
//         { numbers.map((number) => ( // PARENTHESES HERE
//             //each number has to have a unique label. For now, we're using 'key' as a type
//             <ul key={Math.random()}>  
//                 <li>{number}</li>
//             </ul>
//         )) }
//     </main>
// }

// export default App;


// ===== Example 2 =====
const App = () => {
    const usersInfo = [
        {
            username: "HuXn",
            email: "test@gmail.com",
            location: "USA",
        },
        {
            username: "John",
            email: "jd@gmail.com",
            location: "Arab",
        },
        {
            username: "Alex",
            email: "alexmersion@gmail.com",
            location: "India",
        },
    ];

    return <main>
        { usersInfo.map(({ username, email, location }) => ( // Destructuring
            <ul key={Math.random()}>
                <li>{username}</li>
                <li>{email}</li>
                <li>{location}</li>
            </ul>
        )) }
    </main>
}

export default App;