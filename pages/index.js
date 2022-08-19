import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/index";

import { wrapper } from "../redux/store";
import { END } from "redux-saga";

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.state);

  return (
    <div>
      <button>Click me</button>
      <div>{data.navbarOpened}</div>
      {data.navbarOpened ? <div>TRUE</div> : null}
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getData());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
