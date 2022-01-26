import Massage from "../massageComponent/massage";
import { PostContextProvider } from "../ContextComponent/PostConext";


const Post = () => {
  return (
    <div>
      <PostContextProvider>
        <Massage />
      </PostContextProvider>
    </div>
  );
};

export default Post;
