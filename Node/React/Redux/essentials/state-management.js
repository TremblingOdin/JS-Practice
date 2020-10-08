function Counter() {
	// The State and the value used by the state
	const [counter, setCounter] = useState(0);

	// The Action it does to update the state during an event
	const increment = () => {
		setCounter(prevCounter => prevCounter + 1);
	}

	// The UI view to be used
	return (
		<div>
			Value: {counter} <button onClick={increment}>Increment</button>
		</div>
	)
}
