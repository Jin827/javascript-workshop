const CommentList = (props) => {
    const [lists, setLists] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const onInputChange = (e) => setInputValue(e.target.value);
    const clearInputValue = () => setInputValue('');

    const createList = () => {
        if (!inputValue.length) {
            // do nothing
        } else {
            setLists(prevState => {
                const newList = { id: lists.length, value: inputValue };
                return [...prevState, newList];
            });
            return clearInputValue();
        }
    };


    return (<div>
        <form>
            <input type="text" value={inputValue} onChange={onInputChange} />
            <input type="button" value="Post" onClick={createList} />
        </form>
        <ul>
            {lists && lists.length > 0 ? lists.map(list => (
                <li key={`list-item${list.id}`}>{list.value}</li>
            )) : null}
        </ul>
    </div>);
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<CommentList />, rootElement);

var input = document.querySelector("input[type='text']");
input.value = "test";
input._valueTracker.setValue("");
input.dispatchEvent(new Event('change', { bubbles: true }));

document.querySelector("input[type='button']").click();
console.log(document.getElementsByTagName("ul")[0].innerHTML);