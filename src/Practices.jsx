const Practices = () => {
    const Students = [];
    return (
        <>
            {/* <p> {Students.length === 0 && "No students Found"} </p> */}
            <p> {!Students.length && "No students Found"} </p>
            <p>Number of students : {Students.length}</p>
        </>
    );
}
export default Practices;