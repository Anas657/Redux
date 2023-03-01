import logo from './logo.svg';
import './App.css';
import SinglePost from './Components/SinglePost';

const post_list =[
  { name: "M_Anas_1", post_content: "This is my post list" },
  { name: "M_Anas_2", post_content: "This is my post list" },
  { name: "M_Anas_3", post_content: "This is my post list" },
  { name: "M_Anas_4", post_content: "This is my post list" },
  { name: "M_Anas_5", post_content: "This is my post list" },
]


function App() {
  return (
    <div className="App">
      {post_list.map((post, i) =>{
        return <SinglePost item={post} />;
      })}
    </div>
  );
}

export default App;
