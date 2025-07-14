import {useState} from 'react';
export default function LikeButton() {
    let [like, setLike] = useState(false);
    let [count, setCount] = useState(0);

    let toggleLike=()=>{
        let newValue = !like;
        setLike(newValue);
        console.log("Button clicked");
        setCount(count + 1);
    }

  return (
    <>
      <div>
        <p> {count} times clicked</p>
        <p onClick={toggleLike}>like button &nbsp;
            {
                like ?        <i className="fa-regular fa-heart"></i>
                 : <i class="fa-solid fa-heart"></i>
            }
           
        </p>
      </div>
    </>
  );
}
