const Profile = () => {
    return (
        <>
        <h1>Hello to coding challenge</h1>
        <ProfileCard
        name = "Prince"
        age = {25}
        greeting = {<div><strong>Hello welcome to Props in jsx</strong></div>}/>
        <p>Hobbies : Gaming , cooking</p>
        <button>Contact Us</button>
        </>

    );
}

export default Profile;

function ProfileCard(props){
    const {name, age, greeting, children} = props;
    return(
        <>
            <h2>Name : {name}</h2>
            <p>Age : {age} </p>
            <p> {greeting} </p>
            <div>{children}</div>
        </>
    )
}
