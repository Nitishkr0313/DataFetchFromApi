import { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/comments')
    // .then((res)=>setUser(res.data))
    // .catch((error)=>console.log("error")
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => setComment(res.data));
  }, []);
  const handleClick = () => {
    console.log("dbfndbvn");
  };
  return (
    <>
      <div>
        {user?.map((val) => {
          console.log(val, "data");
          return (
            <div
              style={{
                textAlign: "center",
                border: "1px solid black",
                height: "400px",
                width: "100%"
              }}
            >
              <li>
                <p onClick={() => console.log("dbfndbvn")}>
                  {val.title.toUpperCase()}
                </p>
                <hr />
                <span style={{ marginTop: "30px" }}>
                  {comment?.map((obj) => (
                    <li>{obj.body}</li>
                  ))}
                </span>
              </li>
            </div>

            // {val.name}
          );
        })}
      </div>
    </>
  );
};
export default Data;
