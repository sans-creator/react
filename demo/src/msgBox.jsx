export default function MsgBox({ username, textColor }) {
    let styles = {
        color: textColor || "black",    
        fontSize: "20px",
        textAlign: "center",
        padding: "10px",
    }
    return (

        <h1  style={styles}> hello {username}</h1>
    )
            
}