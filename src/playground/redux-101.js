import { createStore } from "redux";

const initialState = {
    count: 0
};

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

const store = createStore((state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 3 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 6 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 102 }));
unsubscribe();