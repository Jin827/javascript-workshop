const Cards = (props) => {
    const [cards, setCards] = React.useState(null);


    React.useEffect(() => {
        const cardSet = new Array(props.amount).fill('down');
        return setCards(cardSet);
    }, []);

    const handleClick = (index) => {
        const updated = cards.map((card, i) => { return i === index ? 'up' : 'down'; });
        return setCards(updated);
    };

    return (
        <table>
            <tbody>
                <tr>
                    {cards && cards.length && cards.map((card, index) => (
                        <td
                            key={index}
                            onClick={() => {
                                if (card == 'down') {
                                    return handleClick(index);
                                }
                            }}>
                            {card}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Cards amount={4} />, rootElement);

let row = document.getElementById("root").getElementsByTagName("tr")[0];
console.log(row);
if (row) {
    let cell = row.getElementsByTagName("td")[1];
    if (cell) {
        cell.click();
    }
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));