import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { itemsFetchStatusAction } from "../store/fetchStatusSlice";

const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(itemsFetchStatusAction.MarkFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(itemsFetchStatusAction.MarkFetchDone());
        dispatch(itemsFetchStatusAction.MarkFetchingFinished());
        dispatch(itemsAction.addInitialItems(data.items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default Fetchitem;
