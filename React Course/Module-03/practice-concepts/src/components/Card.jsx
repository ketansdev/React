import UserCard from "./UserCard";

const Card = () =>{
    return (
        <>
            <h1>This is a Card Component</h1>
            <UserCard name = {"Ketan Vilas Shetge"} profession= {"Software Developer"}/>
            <UserCard name = {"Yash Shinde"} profession= {"Marketting Head"}/>
        </>
    )
}

export default Card;