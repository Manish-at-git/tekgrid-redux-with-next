import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/index";

import { wrapper } from "../redux/store";
import { END } from "redux-saga";

export default function Home() {
  const data = useSelector((state) => state.state.data);

  console.log(data);
  return (
    <div style={{ margin: "30px" }}>
      {data.slice(0, 15).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getData());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});
