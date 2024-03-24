const msg = 'Hello World';
const toJson = (object) => JSON.stringify(object);

const newMsg = {name:'Luis'};
export const FirstApp = () => {
    return (
    <>
    <h1>{toJson(newMsg)}</h1>
    {/* <h1>{newMsg}</h1> */}
    <p>I'm a paragraph</p>
    </>
  )
}
