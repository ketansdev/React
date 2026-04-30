
const MapList = () =>{
    
    const courses = ["HTML", "CSS", "Javascript", "React", "Tailwind", "NodeJS"];
    return (
        <>
            <h1>Array List</h1>
            <h2>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            </h2>
        </>
    )
}

export default MapList;