
import {CommentContextProvider} from "../ContextComponent/commentContex";
import View from "../ViewComponent/View";

const Comments = () => {
  return (
    <div>
      <CommentContextProvider>
          <View/>
      </CommentContextProvider>
    </div>
  );
};

export default Comments;