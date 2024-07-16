# Most commonly used Hooks in React are:

# 1 useState

# 2 useEffect

# 3 useCallback

# 4 useMemo

# 5 useRef

# 6 useContext

# 8 useReducer

# 9 useLayoutEffect

`--------------------------------------------------------`

### Hook Rules

There are 3 rules for the hooks
Hooks can only be called inside the react function component
Hooks can only be called at the top level of the component
Hook cannot be conditional
NOTE: Hook will not work in class component

### useState

_useState is a react hook,which creates an `state variable` which helps us to track the state in the components and update the ui when state change_

### useEffect

_The use effect Hook allow you to perform side effect in you react component for ui_

# for example:

_-Fetching data from API_
_-Directly updating the DOM_
_-Timers like setTimeOut and SetInterval_

#IT accepts the two argument the second one is optional
useEffect(<function>,<dependency>)
we should always pass dependency array for side effects in the ui although it is optional but most time it is used
because it runs on every render which is not good from the point of view of performance of the website
Example:

1. useEffect(() =>{
   <!-- runs on every render -->
   })
2. useEffect(() =>{
      <!-- runs only for the first render -->
   },[]);
   if we keep the empty [] bracket here then it will render first time
   if there are multiple dependencies then they should be included into the array

## NOTE: some effects require cleanup to reduce memory leaks like Timeouts,subscription,eventlisteneres and other effect that are no longer need should be disposed

# useRef hook

useRef is react hook that allow us to create mutable variable,which will not re-render the component
it can be used to access DOM directly
useRef() only return one time.it return an object called return
when we intialize the useRef we set the initial value : useRef(0)
it is used to keep the track of the previous state values this is because of useRef which do not re-render many times it render only single time

# useMemo Hook

useMemo hook returns a memoized value
memoization is like caching a value so that it don't needed to be recalculated
it runs only when one of it's dependencies update which imporve the performance of the apps

NOTE: The useMemo and useCallback hook are similar.The major difference between them are `useMemo reutrn a memoized value` whereas `useCallback reutrns a memoized funciton`.

The useMemo hook can be used to keep the expensive and extensive calculation and functions from needlessly running
for doing to avoind rerendering the expensive calculation in a component we wrap the funcitons inside the memo hook like:  const calculation = useMemo(() => expensiveCalculation(count), [count]);

