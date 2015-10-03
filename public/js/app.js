var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello, world!</div>;
    }
});

document.body.append(React.render(<HelloWorld />, document.body));
document.body.append(React.render(<HelloWorld />, document.body));
document.body.append(React.render(<HelloWorld />, document.body));
