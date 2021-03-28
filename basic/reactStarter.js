const Setup = () => <h1>hello, React</h1>;

document.body.innerHTML = "<div id='root'></div>";
ReactDOM.render(
    <Setup />,
    document.getElementById('root')
);