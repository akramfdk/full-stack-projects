const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '70vh', margin: '5px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;