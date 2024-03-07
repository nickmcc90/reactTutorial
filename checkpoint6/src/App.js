import {  Post, Comment, Avatar } from './components/component';
import leopard from './images/leopard.jpeg';

function App() {
  return (
    <>
      <Post animal="leopards"/>
      <Avatar image={leopard} alt="Supposed-to-be-a-leopard-here"/>
      <Comment number={16} animal="leopards" user="nick"/>
    </>
  );
}

export default App;
